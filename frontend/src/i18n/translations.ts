/* eslint-disable max-len */
import { KEY, KeyValues } from '~/i18n/constants';

export const nb: Record<KeyValues, string> = {
  // ==================== //
  //        Common        //
  // ==================== //

  // Days:
  [KEY.common_day_monday]: 'Mandag',
  [KEY.common_day_tuesday]: 'Tirsdag',
  [KEY.common_day_wednesday]: 'Onsdag',
  [KEY.common_day_thursday]: 'Torsdag',
  [KEY.common_day_friday]: 'Fredag',
  [KEY.common_day_saturday]: 'Lørdag',
  [KEY.common_day_sunday]: 'Søndag',

  // Months:
  [KEY.common_month_january]: 'Januar',
  [KEY.common_month_february]: 'Februar',
  [KEY.common_month_march]: 'Mars',
  [KEY.common_month_april]: 'April',
  [KEY.common_month_may]: 'Mai',
  [KEY.common_month_june]: 'Juni',
  [KEY.common_month_july]: 'Juli',
  [KEY.common_month_august]: 'August',
  [KEY.common_month_september]: 'September',
  [KEY.common_month_october]: 'October',
  [KEY.common_month_november]: 'November',
  [KEY.common_month_december]: 'Desember',

  // Date related
  [KEY.common_today]: 'I dag',
  [KEY.common_tomorrow]: 'I morgen',

  // Other common
  [KEY.common_to]: 'Til',
  [KEY.common_buy]: 'Kjøp',
  [KEY.common_from]: 'Fra',
  [KEY.common_here]: 'her',
  [KEY.common_show]: 'Vis',
  [KEY.common_date]: 'Dato',
  [KEY.common_menu]: 'Meny',
  [KEY.common_name]: 'Navn',
  [KEY.common_next]: 'Neste',
  [KEY.common_save]: 'Lagre',
  [KEY.common_gang]: 'Gjeng',
  [KEY.common_edit]: 'Rediger',
  [KEY.common_tags]: 'Merkelapper',
  [KEY.common_image]: 'Bilde',
  [KEY.common_venue]: 'Lokale',
  [KEY.common_title]: 'Tittel',
  [KEY.common_login]: 'Logg inn',
  [KEY.common_event]: 'Arrangement',
  [KEY.common_repeat]: 'Repeter',
  [KEY.common_venues]: 'Lokaler',
  [KEY.common_events]: 'Arrangementer',
  [KEY.common_create]: 'Opprett',
  [KEY.common_delete]: 'Slett',
  [KEY.common_logout]: 'Logg ut',
  [KEY.common_search]: 'Søk',
  [KEY.common_choose]: 'Velg',
  [KEY.common_sulten]: 'Lyche',
  [KEY.common_delete]: 'Slett',
  [KEY.common_missing]: 'Mangler',
  [KEY.common_contact]: 'Kontakt',
  [KEY.common_english]: 'Engelsk',
  [KEY.common_message]: 'Melding',
  [KEY.common_whatsup]: 'Hva skjer?',
  [KEY.common_sponsor]: 'Sponsorer',
  [KEY.common_lastname]: 'Etternavn',
  [KEY.common_register]: 'Registrer',
  [KEY.common_password]: 'passord',
  [KEY.common_about_us]: 'Om oss',
  [KEY.common_previous]: 'Forrige',
  [KEY.common_required]: 'Påkrevd',
  [KEY.common_overview]: 'Oversikt',
  [KEY.common_volunteer]: 'Opptak',
  [KEY.common_festivals]: 'Festivaler',
  [KEY.common_more_info]: 'Mer info',
  [KEY.common_norwegian]: 'Norsk',
  [KEY.common_firstname]: 'Fornavn',
  [KEY.common_membership]: 'Medlemskap',
  [KEY.common_restaurant]: 'Restaurant',
  [KEY.common_contact_us]: 'Kontakt oss',
  [KEY.common_recruitment]: 'Opptak',
  [KEY.common_information]: 'Informasjon',
  [KEY.common_description]: 'Beskrivelse',
  [KEY.common_reservations]: 'Reservasjon',
  [KEY.common_opening_hours]: 'Åpningstider',
  [KEY.common_about_samfundet]: 'Generelt',
  [KEY.common_long_description]: 'Lang beskrivelse',
  [KEY.common_short_description]: 'Kort beskrivelse',
  [KEY.common_back_to_samfundet]: 'Tilbake til samfundet.no',
  [KEY.common_delete_successful]: 'Slettingen var vellykket',
  [KEY.common_update_successful]: 'Oppdateringen var vellykket',
  [KEY.common_see_in_django_admin]: 'Se i django admin-panel',
  [KEY.common_creation_successful]: 'Opprettelsen var vellykket',
  [KEY.common_something_went_wrong]: 'Noe gikk galt',

  // Price groups:
  [KEY.common_ticket_type]: 'Billett',
  [KEY.common_ticket_type_free]: 'Gratis',
  [KEY.common_ticket_type_custom]: 'Tilpasset',
  [KEY.common_ticket_type_billig]: 'Betalt',
  [KEY.common_ticket_type_included]: 'Inkludert i inngang',
  [KEY.common_ticket_type_registration]: 'Påmelding',

  // ==================== //
  //        Others        //
  // ==================== //

  // LoginPage:
  [KEY.loginpage_register]: 'Lag bruker',
  [KEY.loginpage_internal_login]: 'Logg inn som intern',
  [KEY.loginpage_email_placeholder]: 'E-post eller medlemsnummer',
  [KEY.loginpage_forgotten_password]: 'Glemt passordet ditt?',

  // GroupsPage:
  [KEY.groupspage_gangs_text]:
    'Samfundet består av mer enn 20 gjenger som jobber med blandt annet lyd, lys, teater, snekring, IT, artistbooking, korsang, markedsføring, musikk og mye annet. Gjengene er organisert i følgende grupperinger:',
  [KEY.groupspage_gangs_title]: 'Gjengene på Samfundet',

  // Venue Page:
  [KEY.venuepage_title]: 'Kart og lokaler',

  // AdminPage:
  [KEY.adminpage_gangs_title]: 'Administrer gjenger',
  [KEY.adminpage_gangs_create]: 'Opprett gjeng',

  // SaksdokumentPage:
  [KEY.saksdokumentpage_publication_date]: 'Publiseringsdato',

  // Navbar:
  [KEY.navbar_map]: 'Kart og lokaler',
  [KEY.navbar_photos]: 'Foto',
  [KEY.navbar_nybygg]: 'Nybygg',

  // Recruitment:
  [KEY.recruitment_tags]: 'Tags',
  [KEY.recruitment_position]: 'Stilling',
  [KEY.recruitment_duration]: 'Varighet',
  [KEY.recruitment_funksjonaer]: 'Funksjonær',
  [KEY.recruitment_visible_from]: 'Synlig fra',
  [KEY.recruitment_organization]: 'Organisasjon',
  [KEY.recruitment_administrate]: 'Administrer opptak',
  [KEY.shown_application_deadline]: 'Vist søknadsfrist',
  [KEY.actual_application_deadlin]: 'Faktisk søknadsfrist',
  [KEY.recrutment_default_admission_letter]: 'Standard søknadstekst',
  [KEY.reprioritization_deadline_for_groups]: 'Flaggefrist',
  [KEY.reprioritization_deadline_for_applicant]: 'Omprioriteringsfrist',
  [KEY.recruitment_show_unprocessed_applicants]: 'Vis ubehandlede søkere',
  [KEY.recruitment_show_applicants_without_interview]: 'Vis søkere uten et intervju',

  // Admin:
  [KEY.admin_organizer]: 'Arrangør',
  [KEY.admin_saksdokument]: 'Saksdokument',
  [KEY.admin_images_title]: 'Bildearkiv',
  [KEY.admin_images_create]: 'Nytt Bilde',
  [KEY.admin_opening_hours_hint]: 'Endringer lagres automatisk!',
  [KEY.admin_closed_period_title]: 'Planlagte perioder Samfundet skal holde stengt',
  [KEY.admin_saksdokumenter_title]: 'Administrer Saksdokumenter',
  [KEY.admin_events_recently_edited]: 'Nylig redigert',
  [KEY.admin_gangsadminpage_webpage]: 'Nettside',
  [KEY.admin_information_manage_title]: 'Administrer sider',
  [KEY.admin_closed_period_new_period]: 'Legg til ny periode',
  [KEY.admin_closed_period_edit_period]: 'Endre periode',
  [KEY.admin_information_confirm_delete]: 'Er du sikker du vil slette denne informasjonssiden?',
  [KEY.admin_information_confirm_cancel]: 'Er du sikker på at du vil gå tilbake uten å lagre?',
  [KEY.admin_gangsadminpage_abbreviation]: 'Forkortelse',

  // CommandMenu:
  [KEY.command_menu_label]: 'Global kommando meny',
  [KEY.command_menu_no_results]: 'Ingen resultater',
  [KEY.command_menu_shortcut_home]: 'Hjemmeside',
  [KEY.command_menu_shortcut_admin]: 'Admin-panel',
  [KEY.command_menu_shortcut_lyche]: 'Lyche',
  [KEY.command_menu_group_shortcuts]: 'Snarveier',
  [KEY.command_menu_shortcut_events]: 'Arrangementer',
  [KEY.command_menu_input_placeholder]: 'Søk..',
  [KEY.command_menu_shortcut_recruitment]: 'Opptak',
  [KEY.command_menu_shortcut_control_panel]: 'Kontrollpanel',
  [KEY.command_menu_shortcut_about_samfundet]: 'Om Samfundet',

  // No category:
  [KEY.owner]: 'Eier',
  [KEY.end_time]: 'Sluttid',
  [KEY.category]: 'Kategori',
  [KEY.event_type]: 'Arrangementstype',
  [KEY.start_time]: 'Starttid',
  [KEY.last_updated]: 'Sist oppdatert',
  [KEY.form_confirm]: 'Er du sikker på at du vil',
  [KEY.we_use_cookies]: 'Vi bruker cookies for å gi deg en best mulig opplevelse på Samfundet.no. Les mer om cookies',
  [KEY.control_panel_faq]: 'Hjelp/spørsmål',
  [KEY.control_panel_title]: 'Kontrollpanel',
  [KEY.sulten_page_see_menu]: 'Se meny',
  [KEY.sulten_page_about_us]: 'Om Lyche',
  [KEY.information_page_short]: 'Side',
  [KEY.sulten_page_book_table]: 'Bestill bord',
  [KEY.inputfile_choose_a_file]: 'Velg en fil...',
  [KEY.sulten_page_more_about_us]: 'Mer om oss',
  [KEY.inputfile_no_file_selected]: 'Ingen fil er valgt',
  [KEY.notfoundpage_contact_prompt]: 'Hvis du tror dette er en feil, vennligst',
  [KEY.admin_saksdokumenter_cannot_reupload]: 'Det er ikke mulig å endre filen som er lastet opp.',
  [KEY.eventsadminpage_successful_delete_toast]: 'Slettingen av arrangementet var vellykket.',
};

export const en: Record<KeyValues, string> = {
  // ==================== //
  //        Common        //
  // ==================== //

  // Days:
  [KEY.common_day_monday]: 'Monday',
  [KEY.common_day_tuesday]: 'Tuesday',
  [KEY.common_day_wednesday]: 'Wednesday',
  [KEY.common_day_thursday]: 'Thursday',
  [KEY.common_day_friday]: 'Friday',
  [KEY.common_day_saturday]: 'Saturday',
  [KEY.common_day_sunday]: 'Sunday',

  // Months:
  [KEY.common_month_january]: 'January',
  [KEY.common_month_february]: 'February',
  [KEY.common_month_march]: 'March',
  [KEY.common_month_april]: 'April',
  [KEY.common_month_may]: 'May',
  [KEY.common_month_june]: 'June',
  [KEY.common_month_july]: 'July',
  [KEY.common_month_august]: 'August',
  [KEY.common_month_september]: 'September',
  [KEY.common_month_october]: 'October',
  [KEY.common_month_november]: 'November',
  [KEY.common_month_december]: 'December',

  // Date related
  [KEY.common_today]: 'Today',
  [KEY.common_tomorrow]: 'Tomorrow',

  // No category:
  [KEY.common_to]: 'To',
  [KEY.common_buy]: 'Buy',
  [KEY.common_here]: 'here',
  [KEY.common_save]: 'Save',
  [KEY.common_from]: 'From',
  [KEY.common_date]: 'Date',
  [KEY.common_edit]: 'Edit',
  [KEY.common_show]: 'Show',
  [KEY.common_tags]: 'Tags',
  [KEY.common_menu]: 'Menu',
  [KEY.common_name]: 'Name',
  [KEY.common_next]: 'Next',
  [KEY.common_gang]: 'Group',
  [KEY.common_image]: 'Image',
  [KEY.common_venue]: 'Venue',
  [KEY.common_event]: 'Event',
  [KEY.common_title]: 'Title',
  [KEY.common_login]: 'Log in',
  [KEY.common_venues]: 'Venues',
  [KEY.common_events]: 'Events',
  [KEY.common_repeat]: 'Repeat',
  [KEY.common_create]: 'Create',
  [KEY.common_delete]: 'Delete',
  [KEY.common_logout]: 'Log out',
  [KEY.common_sulten]: 'Lyche',
  [KEY.common_search]: 'Search',
  [KEY.common_choose]: 'Choose',
  [KEY.common_delete]: 'Delete',
  [KEY.common_missing]: 'Missing',
  [KEY.common_message]: 'Message',
  [KEY.common_sponsor]: 'Sponsors',
  [KEY.common_whatsup]: "what's up?",
  [KEY.common_english]: 'English',
  [KEY.common_contact]: 'Contact',
  [KEY.common_register]: 'Register',
  [KEY.common_lastname]: 'Last name',
  [KEY.common_password]: 'password',
  [KEY.common_overview]: 'Oversikt',
  [KEY.common_about_us]: 'About us',
  [KEY.common_previous]: 'Previous',
  [KEY.common_required]: 'Required',
  [KEY.common_festivals]: 'Festivals',
  [KEY.common_more_info]: 'More info',
  [KEY.common_firstname]: 'First name',
  [KEY.common_norwegian]: 'Norwegian',
  [KEY.common_volunteer]: 'Volunteer',
  [KEY.common_membership]: 'Membership',
  [KEY.common_restaurant]: 'Restaurant',
  [KEY.common_contact_us]: 'Contact us',
  [KEY.common_description]: 'Description',
  [KEY.common_information]: 'Information',
  [KEY.common_recruitment]: 'Recruitment',
  [KEY.common_reservations]: 'Reservations',
  [KEY.common_opening_hours]: 'Opening hours',
  [KEY.common_about_samfundet]: 'General',
  [KEY.common_long_description]: 'Long description',
  [KEY.common_short_description]: 'Short description',
  [KEY.common_back_to_samfundet]: 'Back to samfundet.no',
  [KEY.common_delete_successful]: 'Deletion was successful',
  [KEY.common_update_successful]: 'The update was successful',
  [KEY.common_see_in_django_admin]: 'See in django admin-panel',
  [KEY.common_creation_successful]: 'Successfully created',
  [KEY.common_something_went_wrong]: 'Something went wrong',

  // Price groups
  [KEY.common_ticket_type]: 'Ticket',
  [KEY.common_ticket_type_free]: 'Free',
  [KEY.common_ticket_type_billig]: 'Paid',
  [KEY.common_ticket_type_custom]: 'Custom',
  [KEY.common_ticket_type_included]: 'Included with entrance',
  [KEY.common_ticket_type_registration]: 'Registration',

  // ==================== //
  //        Others        //
  // ==================== //

  // LoginPage:
  [KEY.loginpage_register]: 'Create user',
  [KEY.loginpage_internal_login]: 'Log in as internal',
  [KEY.loginpage_email_placeholder]: 'Email or membership ID',
  [KEY.loginpage_forgotten_password]: 'Forgot password?',

  // GroupsPage:
  [KEY.groupspage_gangs_text]:
    'Samfundet consists of more than 20 groups (gjenger) with different responsibilities, including lights, theatre, IT, booking, music, marketing and lots more!',
  [KEY.groupspage_gangs_title]: 'The groups at Samfundet',

  // VenuePage:
  [KEY.venuepage_title]: 'Map and Venues',

  // GangsAdminPage:
  [KEY.admin_gangsadminpage_webpage]: 'Webpage',
  [KEY.admin_gangsadminpage_abbreviation]: 'Abbreviation',

  // SaksdokumentPage:
  [KEY.saksdokumentpage_publication_date]: 'Publication date',

  // Navbar:
  [KEY.navbar_photos]: 'Photos',
  [KEY.navbar_nybygg]: 'New building',
  [KEY.navbar_map]: 'Map and venues',

  // Recruitment:
  [KEY.recruitment_tags]: 'Tags',
  [KEY.recruitment_position]: 'Position',
  [KEY.recruitment_duration]: 'Duration',
  [KEY.recruitment_funksjonaer]: 'Functionary',
  [KEY.recruitment_organization]: 'Organization',
  [KEY.recruitment_visible_from]: 'Visible from',
  [KEY.recruitment_administrate]: 'Administrate recruitment',
  [KEY.actual_application_deadlin]: 'Actual deadline',
  [KEY.shown_application_deadline]: 'Displayed deadline',
  [KEY.recrutment_default_admission_letter]: 'Default admission letter',
  [KEY.reprioritization_deadline_for_groups]: 'Group reprioritization deadline',
  [KEY.reprioritization_deadline_for_applicant]: 'Reprioritization deadline',
  [KEY.recruitment_show_unprocessed_applicants]: 'Show unprocessed applicants',
  [KEY.recruitment_show_applicants_without_interview]: 'Show applicants without an interview',

  // Admin:
  [KEY.admin_organizer]: 'Organizer',
  [KEY.admin_saksdokument]: 'case document',
  [KEY.admin_images_title]: 'Image Archive',
  [KEY.admin_images_create]: 'New Image',
  [KEY.adminpage_gangs_title]: 'Groups administration',
  [KEY.adminpage_gangs_create]: 'Create group',
  [KEY.admin_opening_hours_hint]: 'Changes are saved automatically!',
  [KEY.admin_closed_period_title]: 'Scheduled periods when Samfundet is to be closed ',
  [KEY.admin_saksdokumenter_title]: 'Manage Documents',
  [KEY.admin_events_recently_edited]: 'Recently edited',
  [KEY.admin_information_manage_title]: 'Administrate pages',
  [KEY.admin_closed_period_new_period]: 'Add new closed period',
  [KEY.admin_closed_period_edit_period]: 'Edit closed period',
  [KEY.admin_information_confirm_delete]: 'Are you sure to delete this informationpage?',
  [KEY.admin_information_confirm_cancel]: 'Are you sure you want to exit without saving?',
  [KEY.admin_saksdokumenter_cannot_reupload]: 'It is not possible to change the uploaded file.',
  [KEY.eventsadminpage_successful_delete_toast]: 'Succsessfully deleted event.',

  // CommandMenu:
  [KEY.command_menu_label]: 'Global command menu',
  [KEY.command_menu_no_results]: 'No results',
  [KEY.command_menu_shortcut_home]: 'Homepage',
  [KEY.command_menu_shortcut_admin]: 'Admin-panel',
  [KEY.command_menu_shortcut_lyche]: 'Lyche',
  [KEY.command_menu_group_shortcuts]: 'Shortcuts',
  [KEY.command_menu_shortcut_events]: 'Events',
  [KEY.command_menu_input_placeholder]: 'Search..',
  [KEY.command_menu_shortcut_recruitment]: 'Recruitment',
  [KEY.command_menu_shortcut_control_panel]: 'Control panel',
  [KEY.command_menu_shortcut_about_samfundet]: 'About Samfundet',

  // Sulten / Lyche:
  [KEY.sulten_page_see_menu]: 'See our menu',
  [KEY.sulten_page_about_us]: 'About Lyche',
  [KEY.sulten_page_book_table]: 'Book table',
  [KEY.sulten_page_more_about_us]: 'More about us',

  // No category:
  [KEY.owner]: 'Owner',
  [KEY.end_time]: 'End time',
  [KEY.category]: 'Category',
  [KEY.event_type]: 'Event type',
  [KEY.start_time]: 'Start time',
  [KEY.last_updated]: 'Last updated',
  [KEY.form_confirm]: 'Are you sure you want do',
  [KEY.we_use_cookies]: 'We use cookies to give you the best experience on Samfundet.no. Read more about cookies',
  [KEY.control_panel_faq]: 'Help/questions',
  [KEY.control_panel_title]: 'Control panel',
  [KEY.information_page_short]: 'Page',
  [KEY.inputfile_choose_a_file]: 'Upload file...',
  [KEY.inputfile_no_file_selected]: 'No file selected',
  [KEY.notfoundpage_contact_prompt]: 'If you believe this is an error, please',
};
