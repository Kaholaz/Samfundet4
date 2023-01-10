export const ROUTES_FRONTEND = {
  home: '/',
  health: '/health/',
  about: '/about/',
  components: '/components/',
  api_testing: '/api-testing/',
  login: '/login/',
  signup: '/signup/',
  lyche: '/lyche/',
  events: '/events/',
  event: '/events/:id/',
  information_page_list: '/information-page/',
  information_page_detail: '/information-page/:slugField/',
  information_page_edit: '/information-page/:slugField/edit/',
  groups: '/groups/',
  admin: '/admin/',
  admin_gangs: '/admin/gangs/',
  admin_gangs_create: '/admin/gangs/create/',
  admin_gangs_edit: '/admin/gangs/edit/:id/',
  admin_events_upcomming: '/admin/events/upcomming/',
  admin_events_create: '/admin/events/create/',
  admin_events_edit: '/admin/events/edit/:id/',
  admin_information: '/admin/information/',
  admin_information_create: '/admin/information/create/',
  admin_information_edit: '/admin/information/edit/:slugField/',
  admin_images: '/admin/images/',
  admin_images_create: '/admin/images/create/',
} as const;
