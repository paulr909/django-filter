from django.db.models import Q
from django.shortcuts import render
from rest_framework import generics
from .models import Journal, Category
from .serializers import JournalSerializer


def is_valid_param(param):
    return param != '' and param is not None


def filter(request):
    qs = Journal.objects.all()
    categories = Category.objects.all()
    title_contains_query = request.GET.get('title_contains')
    id_exact_query = request.GET.get('id_exact')
    title_or_author_query = request.GET.get('title_or_author')
    view_count_min = request.GET.get('view_count_min')
    view_count_max = request.GET.get('view_count_max')
    date_min = request.GET.get('date_min')
    date_max = request.GET.get('date_max')
    category = request.GET.get('category')
    reviewed = request.GET.get('reviewed')
    not_reviewed = request.GET.get('notReviewed')

    if is_valid_param(title_contains_query):
        qs = qs.filter(title__icontains=title_contains_query)

    elif is_valid_param(id_exact_query):
        qs = qs.filter(id=id_exact_query)

    elif is_valid_param(title_or_author_query):
        qs = qs.filter(Q(title__icontains=title_or_author_query)
                       | Q(author__name__icontains=title_or_author_query)
                       ).distinct()

    if is_valid_param(view_count_min):
        qs = qs.filter(views__gte=view_count_min)

    if is_valid_param(view_count_max):
        qs = qs.filter(views__lt=view_count_max)

    if is_valid_param(date_min):
        qs = qs.filter(publish_date__gte=date_min)

    if is_valid_param(date_max):
        qs = qs.filter(publish_date__lt=date_max)

    if is_valid_param(category) and category != 'Category':
        qs = qs.filter(categories__name=category)

    if reviewed == 'on':
        qs = qs.filter(reviewed=True)

    elif not_reviewed == 'on':
        qs = qs.filter(reviewed=False)

    return qs


def bootstrap_filter_view(request):
    qs = filter(request)
    context = {
        'queryset': qs,
        'categories': Category.objects.all()
    }
    return render(request, "form.html", context)


class ReactFilterView(generics.ListAPIView):
    serializer_class = JournalSerializer

    def get_queryset(self):
        qs = filter(self.request)
        return qs
