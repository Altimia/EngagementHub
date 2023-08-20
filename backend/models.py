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
    # Fields for Communities of Practice Portal go here

class VisualizationTool(models.Model):
    # Fields for Visualization Tools go here
class SearchFunctionality(models.Model):
    search_term = models.CharField(max_length=200)
    search_results = models.TextField()

class EmailCommunication(models.Model):
    # Fields for Email and Communication Module go here

class UserAccessPermission(models.Model):
    # Fields for User Access & Permissions System go here

class IntegrationExtension(models.Model):
    # Fields for Integration & Extension Interface go here

class RiskAssessmentTool(models.Model):
    # Fields for Risk Assessment Tool go here

class DatabaseManagementSystem(models.Model):
    organization_name = models.CharField(max_length=200)
    contact_person = models.CharField(max_length=200)
    visits = models.IntegerField(default=0)
    MOUs = models.TextField()
    cooperation_type = models.CharField(max_length=200)
