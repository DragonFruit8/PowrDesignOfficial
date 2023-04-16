from django.views.generic import TemplateView

# Create your views here.
class AboutPageView(TemplateView):
    """About Page View"""
    template_name = "about.html"
class ContactPageView(TemplateView):
    """Contact Page View"""
    template_name = "contact.html"
class HomePageView(TemplateView):
    """Home Page View"""
    template_name = "index.html"
class ReferralPageView(TemplateView):
    """Referral Page View"""
    template_name = "referral.html"