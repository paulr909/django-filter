import React, { useState } from "react";
import {
  Form,
  Select,
  InputNumber,
  Input,
  Radio,
  Button,
  DatePicker,
  Spin,
  Empty
} from "antd";
import axios from "axios";
import Results from "./Results";

const Search = Input.Search;
const { Option } = Select;
const { RangePicker } = DatePicker;
const dateFormat = "DD/MM/YYYY";

const FilterForm = ({ form }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      const category =
        values["category"] === undefined ? null : values["category"];
      const view_count_max =
        values["maximum-views"] === undefined ? null : values["maximum-views"];
      const view_count_min =
        values["minimum-views"] === undefined ? null : values["minimum-views"];
      let notReviewed = null;
      let reviewed =
        values["reviewed"] === undefined ? null : values["reviewed"];
      if (reviewed === "reviewed") {
        reviewed = "on";
        notReviewed = null;
      } else if (reviewed === "notReviewed") {
        reviewed = null;
        notReviewed = "on";
      }
      const title_contains =
        values["searchTitle"] === undefined ? null : values["searchTitle"];
      const id_exact =
        values["searchTitleID"] === undefined ? null : values["searchTitleID"];
      const title_or_author =
        values["searchTitleOrAuthor"] === undefined
          ? null
          : values["searchTitleOrAuthor"];
      const rangeValue = values["date-range"];
      const date_min =
        rangeValue === undefined ? null : rangeValue[0].format("YYYY-MM-DD");
      const date_max =
        rangeValue === undefined ? null : rangeValue[1].format("YYYY-MM-DD");
      setLoading(true);

      if (!err) {
        axios
          .get("http://127.0.0.1:8000/api/", {
            params: {
              title_contains,
              id_exact,
              title_or_author,
              view_count_min,
              view_count_max,
              date_min,
              date_max,
              category,
              reviewed,
              notReviewed
            }
          })
          .then(res => {
            setLoading(false);
            setResults(res.data);
          })
          .catch(err => {
            setError({ error: "Error loading data!" });
            console.log(err);
          });
        console.log("Received values of form: ", values);
      }
    });
  };
  const { getFieldDecorator } = form;
  const formItemLayout = {
    wrapperCol: { span: 8, offset: 2 }
  };

  return (
    <div>
      {error && <Empty style={{ paddingBottom: 20 }} />}
      <Form
        {...formItemLayout}
        onSubmit={handleSubmit}
        style={{ width: "100%", paddingBottom: 20, marginLeft: "-43px" }}
      >
        <Form.Item>
          {getFieldDecorator("searchTitle")(
            <Search
              placeholder="Title contains"
              onSearch={value => console.log(value)}
              enterButton
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("searchTitleID")(
            <Search
              placeholder="Id"
              onSearch={value => console.log(value)}
              enterButton
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("searchTitleOrAuthor")(
            <Search
              placeholder="Title or author"
              onSearch={value => console.log(value)}
              enterButton
            />
          )}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator("category")(
            <Select placeholder="Category">
              <Option value="Sport">Sport</Option>
              <Option value="Lifestyle">Lifestyle</Option>
              <Option value="Music">Music</Option>
              <Option value="Coding">Coding</Option>
              <Option value="Travelling">Travelling</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("date-range")(<RangePicker format={dateFormat} />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("minimum-views")(
            <InputNumber min={0} placeholder="0" />
          )}
          <span className="ant-form-text"> Minimum views</span>
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("maximum-views")(
            <InputNumber min={0} placeholder="0" />
          )}
          <span className="ant-form-text"> Maximum views</span>
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("reviewed")(
            <Radio.Group>
              <Radio value="reviewed">Reviewed</Radio>
              <Radio value="notReviewed">Not reviewed</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 6, offset: 2 }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>

      {loading ? (
        <div className="loader-div">
          <Spin size="large" />
        </div>
      ) : (
        <Results items={results} />
      )}
    </div>
  );
};

const WrappedFilterForm = Form.create({ name: "validate_other" })(FilterForm);

export default WrappedFilterForm;
