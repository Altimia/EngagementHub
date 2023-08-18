from .models import SphereOfInfluence, EngagementDashboard, CommunitiesOfPractice, VisualizationTool, SearchFunctionality, EmailCommunication, UserAccessPermission, IntegrationExtension, DatabaseManagementSystem

# Views for each new model go here

from django.http import JsonResponse
from .models import DatabaseManagementSystem

# View for Database Management System
def database_management_system_view(request):
    if request.method == 'GET':
        dbms = DatabaseManagementSystem.objects.all().values()
        return JsonResponse(list(dbms), safe=False)
