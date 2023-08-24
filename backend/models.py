from django.db import models
class SphereOfInfluence(models.Model):
    staff_name = models.CharField(max_length=200)
    contact_name = models.CharField(max_length=200)
    contact_organization = models.CharField(max_length=200)
    last_contact_date = models.DateField()
    notes = models.TextField()

class EngagementDashboard(models.Model):
    organization_name = models.CharField(max_length=200)
    engagement_type = models.CharField(max_length=200)
    engagement_date = models.DateField()
    engagement_details = models.TextField()

class CommunitiesOfPractice(models.Model):
    community_name = models.CharField(max_length=200)
    community_description = models.TextField()
    community_members = models.ManyToManyField(User)
    community_resources = models.TextField()
    community_discussions = models.TextField()

class VisualizationTool(models.Model):
    staff_name = models.CharField(max_length=200)
    organization_name = models.CharField(max_length=200)
    relationship_type = models.CharField(max_length=200)
    relationship_strength = models.IntegerField()
class SearchFunctionality(models.Model):
    search_term = models.CharField(max_length=200)
    search_results = models.TextField()

class EmailCommunication(models.Model):
    sender = models.EmailField()
    recipient = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    sent_date = models.DateTimeField(auto_now_add=True)

class UserAccessPermission(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=200)
    permissions = models.TextField()

class DatabaseManagementSystem(models.Model):
    organization_name = models.CharField(max_length=200)
    contact_person = models.CharField(max_length=200)
    visits = models.IntegerField(default=0)
    MOUs = models.TextField()
    cooperation_type = models.CharField(max_length=200)
class VisitRegistration(models.Model):
    community = models.ForeignKey(CommunitiesOfPractice, on_delete=models.CASCADE)
    visitor_name = models.CharField(max_length=200)
    visit_date = models.DateField()
    visit_details = models.TextField()

class PostVisitReport(models.Model):
    visit = models.ForeignKey(VisitRegistration, on_delete=models.CASCADE)
    report_date = models.DateField()
    report_details = models.TextField()
