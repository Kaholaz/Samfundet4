from typing import Any

from django.dispatch import receiver
from django.db.models.signals import post_save

from .models import UserPreference, Profile, User


@receiver(post_save, sender=User)
def create_user_preference(sender: User, instance: User, created: bool, **kwargs: Any) -> None:
    """Ensures user_preference is created whenever a user is created."""
    if created:
        UserPreference.objects.get_or_create(user=instance)


@receiver(post_save, sender=User)
def create_profile(sender: User, instance: User, created: bool, **kwargs: Any) -> None:
    """Ensures profile is created whenever a user is created."""
    if created:
        Profile.objects.get_or_create(user=instance)
