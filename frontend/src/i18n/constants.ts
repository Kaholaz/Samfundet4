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
  common_internal: 'common_internal',
  common_other_language: 'common_other_language',
  common_save: 'common_save',
  common_title: 'common_title',
  common_create: 'common_create',
  norwegian: 'norwegian',
  english: 'english',
  common_buy: 'common_buy',
  common_edit: 'common_edit',
  common_login: 'common_login',
  common_logout: 'common_logout',
  common_password: 'common_password',
  login_forgotten_password: 'login_forgotten_password',
  login_internal_login: 'login_internal_login',
  login_email_placeholder: 'login_email_placeholder',
  common_text: 'common_text',
  gangs_title: 'gangs_title',
  gangs_text: 'gangs_text',
  control_panel_title: 'control_panel_title',
  control_panel_faq: 'control_panel_faq',
  back: 'back',
  admin_gangs_title: 'admin_gangs_title',
  admin_gangs_create: 'admin_gangs_create',
  information_form_page__show_original: 'information_form_page__show_original',
  information_form_page__show_draft: 'information_form_page__show_draft',
  information_form_page__preview: 'information_form_page__preview',
  admin_information_manage_title: 'admin_information_manage_title',
  information_page_short: 'information_page_short',
  information_page: 'information_page',
  admin_information_new_page: 'admin_information_new_page',
  admin_information_create_page: 'admin_information_create_page',
  admin_information_edit_page: 'admin_information_edit_page',
  admin_information_update_page: 'admin_information_update_page',
  admin_information_confirm_delete: 'admin_information_confirm_delete',
  name: 'name',
  owner: 'owner',
  last_updated: 'last_updated',
  edit: 'last_updated',
  delete: 'delete',
  content: 'content',
  gang: 'gang',
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
