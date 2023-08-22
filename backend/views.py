from .models import SphereOfInfluence, EngagementDashboard, CommunitiesOfPractice, VisualizationTool, SearchFunctionality, EmailCommunication, UserAccessPermission, IntegrationExtension, DatabaseManagementSystem, VisualizationTool

# View for Sphere of Influence
def sphere_of_influence_view(request):
    if request.method == 'GET':
        spheres = SphereOfInfluence.objects.all().values()
        return JsonResponse(list(spheres), safe=False)

# View for Engagement Dashboard
def engagement_dashboard_view(request):
    if request.method == 'GET':
        engagements = EngagementDashboard.objects.all().values()
        return JsonResponse(list(engagements), safe=False)
# View for Search Functionality
def search_functionality_view(request):
    if request.method == 'GET':
        search_term = request.GET.get('search_term', '')
        search = SearchFunctionality.objects.filter(search_term__icontains=search_term).values()
        return JsonResponse(list(search), safe=False)

from django.http import JsonResponse

# View for Communities of Practice
def communities_of_practice_view(request):
    if request.method == 'GET':
        communities = CommunitiesOfPractice.objects.all().values()
        return JsonResponse(list(communities), safe=False)

# View for Visualization Tool
def visualization_tool_view(request):
    if request.method == 'GET':
        visualizations = VisualizationTool.objects.all().values()
        return JsonResponse(list(visualizations), safe=False)
# View for User Access & Permissions System
def user_access_permission_view(request):
    if request.method == 'GET':
        if request.user.is_superuser:  # Check if the user is an administrator
            permissions = UserAccessPermission.objects.all().values()
            return JsonResponse(list(permissions), safe=False)
        else:
            return JsonResponse({'error': 'Unauthorized access'}, status=401)

# View for Current User
def current_user_view(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            return JsonResponse({'is_admin': request.user.is_superuser})
        else:
            return JsonResponse({'is_admin': False})
