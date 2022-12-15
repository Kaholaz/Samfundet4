/** Autogenerated from call_command('generate_frontend_routes') */
// NOTE: Some of them are manually edited because of missing name or weird format.
export const ROUTES = {
  backend: {
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
    admin__auth_group: '/admin/auth/group/:objectId/',
    admin__auth_user_password_change: '/admin/auth/user/:id/password/',
    admin__auth_user_changelist: '/admin/auth/user/',
    admin__auth_user_add: '/admin/auth/user/add/',
    admin__auth_user_history: '/admin/auth/user/:objectId/history/',
    admin__auth_user_delete: '/admin/auth/user/:objectId/delete/',
    admin__auth_user_change: '/admin/auth/user/:objectId/change/',
    admin__auth_user: '/admin/auth/user/:objectId/',
    admin__auth_permission_changelist: '/admin/auth/permission/',
    admin__auth_permission_add: '/admin/auth/permission/add/',
    admin__auth_permission_history: '/admin/auth/permission/:objectId/history/',
    admin__auth_permission_delete: '/admin/auth/permission/:objectId/delete/',
    admin__auth_permission_change: '/admin/auth/permission/:objectId/change/',
    admin__auth_permission: '/admin/auth/permission/:objectId/',
    admin__contenttypes_contenttype_changelist: '/admin/contenttypes/contenttype/',
    admin__contenttypes_contenttype_add: '/admin/contenttypes/contenttype/add/',
    admin__contenttypes_contenttype_history: '/admin/contenttypes/contenttype/:objectId/history/',
    admin__contenttypes_contenttype_delete: '/admin/contenttypes/contenttype/:objectId/delete/',
    admin__contenttypes_contenttype_change: '/admin/contenttypes/contenttype/:objectId/change/',
    admin__contenttypes_contenttype: '/admin/contenttypes/contenttype/:objectId/',
    admin__admin_logentry_changelist: '/admin/admin/logentry/',
    admin__admin_logentry_add: '/admin/admin/logentry/add/',
    admin__admin_logentry_history: '/admin/admin/logentry/:objectId/history/',
    admin__admin_logentry_delete: '/admin/admin/logentry/:objectId/delete/',
    admin__admin_logentry_change: '/admin/admin/logentry/:objectId/change/',
    admin__admin_logentry: '/admin/admin/logentry/:objectId/',
    admin__sessions_session_changelist: '/admin/sessions/session/',
    admin__sessions_session_add: '/admin/sessions/session/add/',
    admin__sessions_session_history: '/admin/sessions/session/:objectId/history/',
    admin__sessions_session_delete: '/admin/sessions/session/:objectId/delete/',
    admin__sessions_session_change: '/admin/sessions/session/:objectId/change/',
    admin__sessions_session: '/admin/sessions/session/:objectId/',
    admin__samfundet_event_changelist: '/admin/samfundet/event/',
    admin__samfundet_event_add: '/admin/samfundet/event/add/',
    admin__samfundet_event_history: '/admin/samfundet/event/:objectId/history/',
    admin__samfundet_event_delete: '/admin/samfundet/event/:objectId/delete/',
    admin__samfundet_event_change: '/admin/samfundet/event/:objectId/change/',
    admin__samfundet_event: '/admin/samfundet/event/:objectId/',
    admin__samfundet_venue_changelist: '/admin/samfundet/venue/',
    admin__samfundet_venue_add: '/admin/samfundet/venue/add/',
    admin__samfundet_venue_history: '/admin/samfundet/venue/:objectId/history/',
    admin__samfundet_venue_delete: '/admin/samfundet/venue/:objectId/delete/',
    admin__samfundet_venue_change: '/admin/samfundet/venue/:objectId/change/',
    admin__samfundet_venue: '/admin/samfundet/venue/:objectId/',
    admin__authtoken_tokenproxy_changelist: '/admin/authtoken/tokenproxy/',
    admin__authtoken_tokenproxy_add: '/admin/authtoken/tokenproxy/add/',
    admin__authtoken_tokenproxy_history: '/admin/authtoken/tokenproxy/:objectId/history/',
    admin__authtoken_tokenproxy_delete: '/admin/authtoken/tokenproxy/:objectId/delete/',
    admin__authtoken_tokenproxy_change: '/admin/authtoken/tokenproxy/:objectId/change/',
    admin__authtoken_tokenproxy: '/admin/authtoken/tokenproxy/:objectId/',
    admin__app_list: '/admin/:appLabel/',
    samfundet__events_list: '/api/events/',
    samfundet__events_detail: '/api/events/:pk/',
    samfundet__venues_list: '/api/venues/',
    samfundet__venues_detail: '/api/venues/:pk/',
    samfundet__api_root: '/api/',
    samfundet__csrf: '/csrf/',
    samfundet__login: '/login/',
    samfundet__logout: '/logout/',
    samfundet__user: '/user/',
    samfundet__groups: '/groups/',
    samfundet__users: '/users/',
    samfundet__permissions: '/permissions/',
    samfundet__token: '/token/',
    static_path: '/static/:path',
    media_path: '/media/:path',
    //
    rest_password_reset: '/dj-rest-auth/password/reset/',
    rest_password_reset_confirm: '/dj-rest-auth/password/reset/confirm/',
    rest_login: '/dj-rest-auth/login/',
    rest_logout: '/dj-rest-auth/logout/',
    rest_user_details: '/dj-rest-auth/user/',
    rest_password_change: '/dj-rest-auth/password/change/',
  },
  frontend: {
    home: '/',
    health: '/health/',
    events: '/events/',
    event: '/events/:id',
    components: '/components/',
  },
};
