export const tokens = {
  color: {
    // ── Brand ─────────────────────────────────────────────────────────────
    primary:       '#2C1E16', // gaucho-dark
    primaryLight:  '#4A3525', // gaucho-brown
    primaryDark:   '#1A120D',
    accent:        '#C19A6B', // gaucho-accent
    accentLight:   '#D4B591',
    accentDark:    '#A88154',
    leather:       '#8B5A2B', // gaucho-leather
    light:         '#F4EFEA', // gaucho-light

    // ── Semánticos ──────────────────────────────────────────────────────────
    success:       '#2E7D32',
    error:         '#D32F2F',
    warning:       '#ED6C02',
    info:          '#0288D1',

    // ── Neutros ────────────────────────────────────────────────────────────
    neutral: {
      0:   '#FFFFFF',
      50:  '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },

    // ── Superficie y fondo ────────────────────────────────────────────────────
    background:    '#F4EFEA',
    surface:       '#FFFFFF',
    overlay:       'rgba(0, 0, 0, 0.4)',
    border:        'rgba(193, 154, 107, 0.4)', // accent with opacity

    // ── Texto ─────────────────────────────────────────────────────────────────
    text:          '#2C1E16',
    textSecondary: '#4A3525',
    textTertiary:  '#616161',
    textInverse:   '#FFFFFF',
  },

  typography: {
    fontFamily: {
      title: "'Rye', serif",
      sans: "'Inter', sans-serif",
    },
    size: {
      xxs:   '0.625rem',
      xs:    '0.6875rem',
      sm:    '0.8125rem',
      base:  '1rem',
      lg:    '1.125rem',
      xl:    '1.25rem',
      '2xl': '1.5rem',
      '2xlMinus2': '1.375rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
    weight: {
      regular:   '400',
      medium:    '500',
      semibold:  '600',
      bold:      '700',
      extrabold: '800',
    },
    lineHeight: {
      tight:  1.2,
      snug:   1.375,
      normal: 1.5,
    },
  },

  radius: {
    sm:    '6px',
    md:    '10px',
    lg:    '14px',
    xl:    '20px',
    '2xl': '28px',
    full:  '9999px',
  },

  spacing: {
    1:  '0.25rem',
    2:  '0.5rem',
    3:  '0.75rem',
    4:  '1rem',
    5:  '1.25rem',
    6:  '1.5rem',
    8:  '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
  },

  layout: {
    screenPaddingH:  '1.25rem',
    maxContentWidth: '80rem',
    headerHeight:    '72px',
  },

  breakpoints: {
    xs:  '340px',
    sm:  '480px',
    md:  '768px',
    lg:  '1024px',
    xl:  '1280px',
  },
} as const;

export type Tokens = typeof tokens;
