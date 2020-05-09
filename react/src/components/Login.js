import React from "react";
import { Form, Icon, Input, Button, Spin } from "antd";
import { connect } from "react-redux";
import { authLogin } from "../store/actions/auth";

const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const NormalLoginForm = ({ form, onAuth, history, error, loading }) => {
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        onAuth(values.userName, values.password);
        history.push("/");
      }
    });
  };

  let errorMessage = null;
  if (error) {
    errorMessage = <p>{error.message}</p>;
  }

  const { getFieldDecorator } = form;
  return (
    <div style={{ width: "30%", marginLeft: 90 }}>
      {errorMessage}
      {loading ? (
        <Spin indicator={antIcon} />
      ) : (
        <Form onSubmit={handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator("userName", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </FormItem>

          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>

          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "10px" }}
            >
              Login
            </Button>
          </FormItem>
        </Form>
      )}
    </div>
  );
};

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  };
};

const mapDispatchToProps = {
  onAuth: (username, password) => authLogin(username, password)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalLoginForm);
