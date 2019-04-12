from django.contrib import admin
from django.urls import path
from core.views import bootstrap_filter_view, ReactFilterView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', bootstrap_filter_view, name='bootstrap'),
    path('api/', ReactFilterView.as_view(), name='react'),
]
