/**
 * These constants are set as className on body to style the theme.
 * Write styles in global.scss with these names.
 */
export const THEME = {
  DARK: 'theme-dark',
  LIGHT: 'theme-light',
} as const;

/** Class added to body when mobile navigation is open. */
export const MOBILE_NAVIGATION_OPEN = 'mobile-navigation-open';

/**
 *  Class name for the mirror effect.
 * An equivalent should be found in global.scss.
 */
export const MIRROR_CLASS = 'mirror-dimension';

/**
 *  Class name for the cursor trail effect.
 * An equivalent should be found in global.scss.
 */
export const CURSOR_TRAIL_CLASS = 'trail';

export type ThemeKey = keyof typeof THEME;
export type ThemeValue = (typeof THEME)[ThemeKey];

export const XCSRFTOKEN = 'X-CSRFToken';

/**
 * The name/key of a valid data attribute in html to store the current theme value.
 * An equivalent should be found in global.scss.
 */
export const THEME_KEY = 'data-theme'; // Valid html tag attribute.

export const SUPPORT_EMAIL = 'mg-web@samfundet.no';

/**
 * Screen sizes, breakpoint (bp).
 * These values are also in _constants.scss
 */
export const largeDesktopBpLower = 1201;
export const desktopBpUpper = 1200;
export const desktopBpLower = 993;
export const tabletBpUpper = 992;
export const tabletBpLower = 769;
export const mobileBpUpper = 768;

export const BACKEND_DOMAIN = import.meta.env.VITE_BACKEND_DOMAIN;
export const CYPRESS_BACKEND_DOMAIN = import.meta.env.VITE_CYPRESS_BACKEND_DOMAIN;

/**
 * Venues
 */
export const VENUE = {
  LYCHE: 'lyche',
} as const;

export const SECOND_MILLIS = 1000;
export const MINUTE_MILLIS = 60 * SECOND_MILLIS;
export const HOUR_MILLIS = 60 * MINUTE_MILLIS;
export const DAY_MILLIS = 24 * HOUR_MILLIS;
