/**
 * Mapping of every existing translation key.
 *
 * referenced to as "KEY.example"
 *
 * Naming convention: <component/page/common>_<key>: '<component/page/common>_<key>'
 * This is because the right side strings MUST be unique
 */
export const KEY = {
  common_event: 'common_event',
  common_information: 'common_information',
  common_restaurant: 'common_restaurant',
  common_volunteer: 'common_volunteer',
  common_member: 'common_member',
  common_membership: 'common_membership',
  common_internal: 'common_internal',
  common_other_language: 'common_other_language',
  common_save: 'common_save',
  common_title: 'common_title',
  common_create: 'common_create',
  common_delete: 'common_delete',
  norwegian: 'norwegian',
  english: 'english',
  common_buy: 'common_buy',
  common_edit: 'common_edit',
  common_login: 'common_login',
  common_logout: 'common_logout',
  common_password: 'common_password',
  common_description: 'common_description',
  common_short: 'common_short',
  common_long: 'common_long',
  common_message: 'common_message',
  login_forgotten_password: 'login_forgotten_password',
  login_internal_login: 'login_internal_login',
  login_email_placeholder: 'login_email_placeholder',
  common_text: 'common_text',
  common_search: 'common_search',
  common_choose: 'common_choose',
  common_age_res: 'common_age_res',
  common_time: 'common_time',
  common_price: 'common_price',
  common_reservations: 'common_reservations',
  common_menu: 'common_menu',
  common_about_us: 'common_about_us',
  common_about_samfundet: 'common_about_samfundet',
  common_contact_us: 'common_contact_us',
  common_capacity: 'common_capacity',
  common_whatsup: 'common_whatsup',
  common_image: 'common_image',
  common_results: 'common_results',
  common_tags: 'common_tags',
  common_publication_date: 'common_publication_date',
  common_not_found: 'common_not_found',
  common_contact: 'common_contact',
  common_next: 'common_next',
  common_previous: 'common_previous',
  gangs_title: 'gangs_title',
  gangs_text: 'gangs_text',
  opening_hours: 'opening_hours',
  control_panel_title: 'control_panel_title',
  control_panel_faq: 'control_panel_faq',
  back: 'back',
  admin_gangs_title: 'admin_gangs_title',
  admin_gangs_create: 'admin_gangs_create',
  information_form_page__show_original: 'information_form_page__show_original',
  information_form_page__show_draft: 'information_form_page__show_draft',
  information_form_page__preview: 'information_form_page__preview',
  admin_images_title: 'admin_images_title',
  admin_images_create: 'admin_images_create',
  day_monday: 'day_monday',
  day_tuesday: 'day_tuesday',
  day_wednesday: 'day_wednesday',
  day_thursday: 'day_thursday',
  day_friday: 'day_friday',
  day_saturday: 'day_saturday',
  day_sunday: 'day_sunday',
  month_january: 'month_january',
  month_february: 'month_february',
  month_march: 'month_march',
  month_april: 'month_april',
  month_may: 'month_may',
  month_june: 'month_june',
  month_july: 'month_july',
  month_august: 'month_august',
  month_september: 'month_september',
  month_october: 'month_october',
  month_november: 'month_november',
  month_december: 'month_december',
  admin_information_manage_title: 'admin_information_manage_title',
  information_page_short: 'information_page_short',
  information_page: 'information_page',
  admin_information_new_page: 'admin_information_new_page',
  admin_information_create_page: 'admin_information_create_page',
  admin_information_edit_page: 'admin_information_edit_page',
  admin_information_update_page: 'admin_information_update_page',
  admin_information_confirm_delete: 'admin_information_confirm_delete',
  admin_closed_period_title: 'admin_closed_period_title',
  admin_closed_period_new_period: 'admin_closed_period_new_period',
  admin_closed_period_edit_period: 'admin_closed_period_edit_period',
  not_found_text: 'not_found_text',
  not_found_contact_prompt: 'not_found_contact_prompt',
  name: 'name',
  owner: 'owner',
  last_updated: 'last_updated',
  edit: 'last_updated',
  delete: 'delete',
  content: 'content',
  gang: 'gang',
  abbreviation: 'abbreviation',
  webpage: 'webpage',
  gang_type: 'gang_type',
  past: 'past',
  upcomming: 'upcomming',
  event_type: 'event_type',
  start_time: 'start_time',
  end_time: 'end_time',
  organizer: 'organizer',
  venue: 'venue',
  form_must_choose: 'form_must_choose',
  form_required: 'form_required',
  form_confirm: 'form_confirm',
  duration: 'duration',
  publication: 'publication',
  closed_period: 'closed_period',
  saksdokument: 'saksdokument',
  photos: 'photos',
  nybygg: 'nybygg',
  common_sulten: 'common_sulten',
  sulten_page_book_table: 'sulten_page_book_table',
  sulten_page_kitchen: 'sulten_page_kitchen',
  sulten_page_see_menu: 'sulten_page_see_menu',
  sulten_page_about_us: 'sulten_page_about_us',
  sulten_page_more_about_us: 'sulten_page_more_about_us',
  admin_saksdokumenter_title: 'admin_saksdokumenter_title',
  back_to_samfundet: 'back_to_samfundet',
  no_file_selected: 'no_file_selected',
  category: 'category',
  choose_a_file: 'choose_a_file',
} as const;

/**
 * Types used for type-proofing translations
 * Reveals errors in translations.ts if some keys are not translated
 */
export type KeyKeys = keyof typeof KEY;
export type KeyValues = typeof KEY[KeyKeys];

export const LANGUAGES = {
  NB: 'nb',
  EN: 'en',
} as const;

export type LanguageKey = keyof typeof LANGUAGES;
export type LanguageValue = typeof LANGUAGES[LanguageKey];
