/**
"""
THIS FILE IS AUTOGENERATED.
DO NOT WRITE IN THIS FILE, AS IT WILL BE OVERWRITTEN ON NEXT UPDATE.

THIS FILE WAS GENERATED BY: root.management.commands.generate_routes
LAST UPDATE: 2022-11-25 18:56:33.820387+00:00
"""
*/
// ############################################################

export const ROUTES_BACKEND = {
  admin__index: '/admin/',
  admin__login: '/admin/login/',
  admin__logout: '/admin/logout/',
  admin__password_change: '/admin/password_change/',
  admin__password_change_done: '/admin/password_change/done/',
  admin__autocomplete: '/admin/autocomplete/',
  admin__jsi18n: '/admin/jsi18n/',
  admin__view_on_site: '/admin/r/:contentTypeId/:objectId/',
  admin__auth_group_changelist: '/admin/auth/group/',
  admin__auth_group_add: '/admin/auth/group/add/',
  admin__auth_group_history: '/admin/auth/group/:objectId/history/',
  admin__auth_group_delete: '/admin/auth/group/:objectId/delete/',
  admin__auth_group_change: '/admin/auth/group/:objectId/change/',
  adminauthgroup__objectId: '/admin/auth/group/:objectId/',
  admin__auth_user_password_change: '/admin/auth/user/:id/password/',
  admin__auth_user_changelist: '/admin/auth/user/',
  admin__auth_user_add: '/admin/auth/user/add/',
  admin__auth_user_history: '/admin/auth/user/:objectId/history/',
  admin__auth_user_delete: '/admin/auth/user/:objectId/delete/',
  admin__auth_user_change: '/admin/auth/user/:objectId/change/',
  adminauthuser__objectId: '/admin/auth/user/:objectId/',
  admin__guardian_groupobjectpermission_permissions: '/admin/guardian/groupobjectpermission/:objectPk/permissions/',
  admin__guardian_groupobjectpermission_permissions_manage_user:
    '/admin/guardian/groupobjectpermission/:objectPk/permissions/user-manage/:userId/',
  admin__guardian_groupobjectpermission_permissions_manage_group:
    '/admin/guardian/groupobjectpermission/:objectPk/permissions/group-manage/:groupId/',
  admin__guardian_groupobjectpermission_changelist: '/admin/guardian/groupobjectpermission/',
  admin__guardian_groupobjectpermission_add: '/admin/guardian/groupobjectpermission/add/',
  admin__guardian_groupobjectpermission_history: '/admin/guardian/groupobjectpermission/:objectId/history/',
  admin__guardian_groupobjectpermission_delete: '/admin/guardian/groupobjectpermission/:objectId/delete/',
  admin__guardian_groupobjectpermission_change: '/admin/guardian/groupobjectpermission/:objectId/change/',
  adminguardiangroupobjectpermission__objectId: '/admin/guardian/groupobjectpermission/:objectId/',
  admin__guardian_userobjectpermission_permissions: '/admin/guardian/userobjectpermission/:objectPk/permissions/',
  admin__guardian_userobjectpermission_permissions_manage_user:
    '/admin/guardian/userobjectpermission/:objectPk/permissions/user-manage/:userId/',
  admin__guardian_userobjectpermission_permissions_manage_group:
    '/admin/guardian/userobjectpermission/:objectPk/permissions/group-manage/:groupId/',
  admin__guardian_userobjectpermission_changelist: '/admin/guardian/userobjectpermission/',
  admin__guardian_userobjectpermission_add: '/admin/guardian/userobjectpermission/add/',
  admin__guardian_userobjectpermission_history: '/admin/guardian/userobjectpermission/:objectId/history/',
  admin__guardian_userobjectpermission_delete: '/admin/guardian/userobjectpermission/:objectId/delete/',
  admin__guardian_userobjectpermission_change: '/admin/guardian/userobjectpermission/:objectId/change/',
  adminguardianuserobjectpermission__objectId: '/admin/guardian/userobjectpermission/:objectId/',
  admin__auth_permission_permissions: '/admin/auth/permission/:objectPk/permissions/',
  admin__auth_permission_permissions_manage_user: '/admin/auth/permission/:objectPk/permissions/user-manage/:userId/',
  admin__auth_permission_permissions_manage_group:
    '/admin/auth/permission/:objectPk/permissions/group-manage/:groupId/',
  admin__auth_permission_changelist: '/admin/auth/permission/',
  admin__auth_permission_add: '/admin/auth/permission/add/',
  admin__auth_permission_history: '/admin/auth/permission/:objectId/history/',
  admin__auth_permission_delete: '/admin/auth/permission/:objectId/delete/',
  admin__auth_permission_change: '/admin/auth/permission/:objectId/change/',
  adminauthpermission__objectId: '/admin/auth/permission/:objectId/',
  admin__contenttypes_contenttype_permissions: '/admin/contenttypes/contenttype/:objectPk/permissions/',
  admin__contenttypes_contenttype_permissions_manage_user:
    '/admin/contenttypes/contenttype/:objectPk/permissions/user-manage/:userId/',
  admin__contenttypes_contenttype_permissions_manage_group:
    '/admin/contenttypes/contenttype/:objectPk/permissions/group-manage/:groupId/',
  admin__contenttypes_contenttype_changelist: '/admin/contenttypes/contenttype/',
  admin__contenttypes_contenttype_add: '/admin/contenttypes/contenttype/add/',
  admin__contenttypes_contenttype_history: '/admin/contenttypes/contenttype/:objectId/history/',
  admin__contenttypes_contenttype_delete: '/admin/contenttypes/contenttype/:objectId/delete/',
  admin__contenttypes_contenttype_change: '/admin/contenttypes/contenttype/:objectId/change/',
  admincontenttypescontenttype__objectId: '/admin/contenttypes/contenttype/:objectId/',
  admin__admin_logentry_permissions: '/admin/admin/logentry/:objectPk/permissions/',
  admin__admin_logentry_permissions_manage_user: '/admin/admin/logentry/:objectPk/permissions/user-manage/:userId/',
  admin__admin_logentry_permissions_manage_group: '/admin/admin/logentry/:objectPk/permissions/group-manage/:groupId/',
  admin__admin_logentry_changelist: '/admin/admin/logentry/',
  admin__admin_logentry_add: '/admin/admin/logentry/add/',
  admin__admin_logentry_history: '/admin/admin/logentry/:objectId/history/',
  admin__admin_logentry_delete: '/admin/admin/logentry/:objectId/delete/',
  admin__admin_logentry_change: '/admin/admin/logentry/:objectId/change/',
  adminadminlogentry__objectId: '/admin/admin/logentry/:objectId/',
  admin__sessions_session_permissions: '/admin/sessions/session/:objectPk/permissions/',
  admin__sessions_session_permissions_manage_user: '/admin/sessions/session/:objectPk/permissions/user-manage/:userId/',
  admin__sessions_session_permissions_manage_group:
    '/admin/sessions/session/:objectPk/permissions/group-manage/:groupId/',
  admin__sessions_session_changelist: '/admin/sessions/session/',
  admin__sessions_session_add: '/admin/sessions/session/add/',
  admin__sessions_session_history: '/admin/sessions/session/:objectId/history/',
  admin__sessions_session_delete: '/admin/sessions/session/:objectId/delete/',
  admin__sessions_session_change: '/admin/sessions/session/:objectId/change/',
  adminsessionssession__objectId: '/admin/sessions/session/:objectId/',
  admin__samfundet_userpreference_permissions: '/admin/samfundet/userpreference/:objectPk/permissions/',
  admin__samfundet_userpreference_permissions_manage_user:
    '/admin/samfundet/userpreference/:objectPk/permissions/user-manage/:userId/',
  admin__samfundet_userpreference_permissions_manage_group:
    '/admin/samfundet/userpreference/:objectPk/permissions/group-manage/:groupId/',
  admin__samfundet_userpreference_changelist: '/admin/samfundet/userpreference/',
  admin__samfundet_userpreference_add: '/admin/samfundet/userpreference/add/',
  admin__samfundet_userpreference_history: '/admin/samfundet/userpreference/:objectId/history/',
  admin__samfundet_userpreference_delete: '/admin/samfundet/userpreference/:objectId/delete/',
  admin__samfundet_userpreference_change: '/admin/samfundet/userpreference/:objectId/change/',
  adminsamfundetuserpreference__objectId: '/admin/samfundet/userpreference/:objectId/',
  admin__samfundet_profile_permissions: '/admin/samfundet/profile/:objectPk/permissions/',
  admin__samfundet_profile_permissions_manage_user:
    '/admin/samfundet/profile/:objectPk/permissions/user-manage/:userId/',
  admin__samfundet_profile_permissions_manage_group:
    '/admin/samfundet/profile/:objectPk/permissions/group-manage/:groupId/',
  admin__samfundet_profile_changelist: '/admin/samfundet/profile/',
  admin__samfundet_profile_add: '/admin/samfundet/profile/add/',
  admin__samfundet_profile_history: '/admin/samfundet/profile/:objectId/history/',
  admin__samfundet_profile_delete: '/admin/samfundet/profile/:objectId/delete/',
  admin__samfundet_profile_change: '/admin/samfundet/profile/:objectId/change/',
  adminsamfundetprofile__objectId: '/admin/samfundet/profile/:objectId/',
  admin__samfundet_event_permissions: '/admin/samfundet/event/:objectPk/permissions/',
  admin__samfundet_event_permissions_manage_user: '/admin/samfundet/event/:objectPk/permissions/user-manage/:userId/',
  admin__samfundet_event_permissions_manage_group:
    '/admin/samfundet/event/:objectPk/permissions/group-manage/:groupId/',
  admin__samfundet_event_changelist: '/admin/samfundet/event/',
  admin__samfundet_event_add: '/admin/samfundet/event/add/',
  admin__samfundet_event_history: '/admin/samfundet/event/:objectId/history/',
  admin__samfundet_event_delete: '/admin/samfundet/event/:objectId/delete/',
  admin__samfundet_event_change: '/admin/samfundet/event/:objectId/change/',
  adminsamfundetevent__objectId: '/admin/samfundet/event/:objectId/',
  admin__samfundet_eventgroup_permissions: '/admin/samfundet/eventgroup/:objectPk/permissions/',
  admin__samfundet_eventgroup_permissions_manage_user:
    '/admin/samfundet/eventgroup/:objectPk/permissions/user-manage/:userId/',
  admin__samfundet_eventgroup_permissions_manage_group:
    '/admin/samfundet/eventgroup/:objectPk/permissions/group-manage/:groupId/',
  admin__samfundet_eventgroup_changelist: '/admin/samfundet/eventgroup/',
  admin__samfundet_eventgroup_add: '/admin/samfundet/eventgroup/add/',
  admin__samfundet_eventgroup_history: '/admin/samfundet/eventgroup/:objectId/history/',
  admin__samfundet_eventgroup_delete: '/admin/samfundet/eventgroup/:objectId/delete/',
  admin__samfundet_eventgroup_change: '/admin/samfundet/eventgroup/:objectId/change/',
  adminsamfundeteventgroup__objectId: '/admin/samfundet/eventgroup/:objectId/',
  admin__samfundet_venue_permissions: '/admin/samfundet/venue/:objectPk/permissions/',
  admin__samfundet_venue_permissions_manage_user: '/admin/samfundet/venue/:objectPk/permissions/user-manage/:userId/',
  admin__samfundet_venue_permissions_manage_group:
    '/admin/samfundet/venue/:objectPk/permissions/group-manage/:groupId/',
  admin__samfundet_venue_changelist: '/admin/samfundet/venue/',
  admin__samfundet_venue_add: '/admin/samfundet/venue/add/',
  admin__samfundet_venue_history: '/admin/samfundet/venue/:objectId/history/',
  admin__samfundet_venue_delete: '/admin/samfundet/venue/:objectId/delete/',
  admin__samfundet_venue_change: '/admin/samfundet/venue/:objectId/change/',
  adminsamfundetvenue__objectId: '/admin/samfundet/venue/:objectId/',
  admin__samfundet_gang_permissions: '/admin/samfundet/gang/:objectPk/permissions/',
  admin__samfundet_gang_permissions_manage_user: '/admin/samfundet/gang/:objectPk/permissions/user-manage/:userId/',
  admin__samfundet_gang_permissions_manage_group: '/admin/samfundet/gang/:objectPk/permissions/group-manage/:groupId/',
  admin__samfundet_gang_changelist: '/admin/samfundet/gang/',
  admin__samfundet_gang_add: '/admin/samfundet/gang/add/',
  admin__samfundet_gang_history: '/admin/samfundet/gang/:objectId/history/',
  admin__samfundet_gang_delete: '/admin/samfundet/gang/:objectId/delete/',
  admin__samfundet_gang_change: '/admin/samfundet/gang/:objectId/change/',
  adminsamfundetgang__objectId: '/admin/samfundet/gang/:objectId/',
  admin__samfundet_gangtype_permissions: '/admin/samfundet/gangtype/:objectPk/permissions/',
  admin__samfundet_gangtype_permissions_manage_user:
    '/admin/samfundet/gangtype/:objectPk/permissions/user-manage/:userId/',
  admin__samfundet_gangtype_permissions_manage_group:
    '/admin/samfundet/gangtype/:objectPk/permissions/group-manage/:groupId/',
  admin__samfundet_gangtype_changelist: '/admin/samfundet/gangtype/',
  admin__samfundet_gangtype_add: '/admin/samfundet/gangtype/add/',
  admin__samfundet_gangtype_history: '/admin/samfundet/gangtype/:objectId/history/',
  admin__samfundet_gangtype_delete: '/admin/samfundet/gangtype/:objectId/delete/',
  admin__samfundet_gangtype_change: '/admin/samfundet/gangtype/:objectId/change/',
  adminsamfundetgangtype__objectId: '/admin/samfundet/gangtype/:objectId/',
  admin__samfundet_informationpage_permissions: '/admin/samfundet/informationpage/:objectPk/permissions/',
  admin__samfundet_informationpage_permissions_manage_user:
    '/admin/samfundet/informationpage/:objectPk/permissions/user-manage/:userId/',
  admin__samfundet_informationpage_permissions_manage_group:
    '/admin/samfundet/informationpage/:objectPk/permissions/group-manage/:groupId/',
  admin__samfundet_informationpage_changelist: '/admin/samfundet/informationpage/',
  admin__samfundet_informationpage_add: '/admin/samfundet/informationpage/add/',
  admin__samfundet_informationpage_history: '/admin/samfundet/informationpage/:objectId/history/',
  admin__samfundet_informationpage_delete: '/admin/samfundet/informationpage/:objectId/delete/',
  admin__samfundet_informationpage_change: '/admin/samfundet/informationpage/:objectId/change/',
  adminsamfundetinformationpage__objectId: '/admin/samfundet/informationpage/:objectId/',
  admin__app_list: '/admin/:appLabel/',
  admin__url: '/admin/:url',
  rest_framework__login: '/rest_framework/login/',
  rest_framework__logout: '/rest_framework/logout/',
  samfundet__events_list: '/api/events/',
  samfundet__events_detail: '/api/events/:pk/',
  samfundet__venues_list: '/api/venues/',
  samfundet__venues_detail: '/api/venues/:pk/',
  samfundet__gangs_list: '/api/gangs/',
  samfundet__gangs_detail: '/api/gangs/:pk/',
  samfundet__information_list: '/api/information/',
  samfundet__information_detail: '/api/information/:nameNo/',
  samfundet__user_preference_list: '/api/user-preference/',
  samfundet__user_preference_detail: '/api/user-preference/:pk/',
  samfundet__api_root: '/api/',
  samfundet__csrf: '/csrf/',
  samfundet__login: '/login/',
  samfundet__logout: '/logout/',
  samfundet__user: '/user/',
  samfundet__groups: '/groups/',
  samfundet__users: '/users/',
  samfundet__permissions: '/permissions/',
  static__path: '/static/:path',
  media__path: '/media/:path',
} as const;
