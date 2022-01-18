from django.contrib import admin
from django.urls import include, path

from core.views import ReactFilterView, bootstrap_filter_view

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("rest-auth/", include("rest_auth.urls")),
    path("rest-auth/registration/", include("rest_auth.registration.urls")),
    path("", bootstrap_filter_view, name="bootstrap"),
    path("api/", ReactFilterView.as_view(), name="react"),
]
