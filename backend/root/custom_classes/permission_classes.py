from __future__ import annotations

from typing import TYPE_CHECKING

from rest_framework.permissions import DjangoObjectPermissions

if TYPE_CHECKING:
    from rest_framework.views import APIView
    from rest_framework.request import Request
    from django.db.models import Model, QuerySet
    from samfundet.models.general import User


class CustomDjangoObjectPermissions(DjangoObjectPermissions):
    """Add django permissions to read methods."""

    perms_map = {
        'GET': ['%(app_label)s.view_%(model_name)s'],
        'OPTIONS': [],
        'HEAD': [],
        'POST': ['%(app_label)s.add_%(model_name)s'],
        'PUT': ['%(app_label)s.change_%(model_name)s'],
        'PATCH': ['%(app_label)s.change_%(model_name)s'],
        'DELETE': ['%(app_label)s.delete_%(model_name)s'],
    }

    def has_permission(self, request: Request, view: APIView) -> bool:
        queryset: QuerySet = self._queryset(view)
        model_cls: Model = queryset.model
        user: User = request.user

        if not user.is_authenticated:
            return False

        if request.method == 'POST':
            post_perms: list[str] = self.get_required_permissions(method='POST', model_cls=model_cls)
            has_perm = user.has_perms(perm_list=post_perms)
            return has_perm

        return True
