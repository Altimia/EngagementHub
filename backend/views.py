from .models import SphereOfInfluence, EngagementDashboard, CommunitiesOfPractice, VisualizationTool, SearchFunctionality, EmailCommunication, UserAccessPermission, IntegrationExtension, DatabaseManagementSystem
# View for Search Functionality
def search_functionality_view(request):
    if request.method == 'GET':
        search_term = request.GET.get('search_term', '')
        search = SearchFunctionality.objects.filter(search_term__icontains=search_term).values()
        return JsonResponse(list(search), safe=False)

from django.http import JsonResponse
from .models import DatabaseManagementSystem

# View for Database Management System
def database_management_system_view(request):
    if request.method == 'GET':
        dbms = DatabaseManagementSystem.objects.all().values()
        return JsonResponse(list(dbms), safe=False)
