module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false,
  theme: {
    colors: {
      primary: '#FFAB00',
      secondary: '#006BA1',
      radioBorder: 'rgba(0, 107, 161, 0.3)',
      primaryText: '#0C141C',
      black: '#000',
      white: '#FFF',
      gray: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#EEEEEE',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#9E9E9E',
        DEFAULT: '#9E9E9E',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
      },
      red: '#EC0000',
    },
    spacing: {
      xs: '32rem',
      sm: '48rem',
      md: '64rem',
      lg: '80rem',
      xl: '96rem',
      '2xl': '112rem',
      '3xl': '128rem',
      '4xl': '144rem',
      '5xl': '160rem',
      px: '1px',
      0: '0',
      0.5: '0.05rem',
      1: '0.1rem',
      1.5: '0.15rem',
      2: '0.2rem',
      2.5: '0.25rem',
      3: '0.3rem',
      3.5: '0.35rem',
      4: '0.4rem',
      5: '0.5rem',
      6: '0.6rem',
      7: '0.7rem',
      8: '0.8rem',
      9: '0.9rem',
      10: '1.0rem',
      12: '1.2rem',
      14: '1.4rem',
      16: '1.6rem',
      20: '2rem',
      24: '2.4rem',
      28: '2.8rem',
      32: '3.2rem',
      36: '3.6rem',
      40: '4rem',
      44: '4.4rem',
      48: '4.8rem',
      52: '5.2rem',
      56: '5.6rem',
      60: '6rem',
      64: '6.4rem',
      68: '6.8rem',
      72: '7.2rem',
      76: '7.6rem',
      80: '8rem',
      84: '8.4rem',
      88: '8.8rem',
      92: '9.2rem',
      96: '9.6rem',
      128: '12.8rem',
      136: '13.6rem',
      150: '15rem',
      160: '16rem',
      192: '19.2rem',
      200: '20rem',
      208: '20.8rem',
      216: '21.6rem',
      224: '22.4rem',
      256: '25.6rem',
      288: '28.8rem',
      320: '32rem',
      360: '36rem',
      384: '38.4rem',
      400: '40rem',
      440: '44rem',
      480: '48rem',
      500: '50rem',
      512: '51.2rem',
      640: '64rem',
      707: '70.7rem',
      720: '72rem',
    },
    fontSize: {
      xs: ['1.2rem', { lineHeight: '1.6rem' }],
      sm: ['1.4rem', { lineHeight: '2rem' }],
      base: ['1.6rem', { lineHeight: '2.4rem' }],
      lg: ['1.8rem', { lineHeight: '2.8em' }],
      xl: ['2rem', { lineHeight: '2.8rem' }],
      '2xl': ['2.4rem', { lineHeight: '3.2rem' }],
      '3xl': ['3rem', { lineHeight: '3.6rem' }],
      '4xl': ['3.6rem', { lineHeight: '4rem' }],
      '5xl': ['4.8rem', { lineHeight: '1' }],
      '6xl': ['6rem', { lineHeight: '1' }],
      '7xl': ['7.2rem', { lineHeight: '1' }],
      '8xl': ['9.6rem', { lineHeight: '1' }],
      '9xl': ['12.8rem', { lineHeight: '1' }],
      10: ['1rem'],
      11: ['1.1rem'],
      12: ['1.2rem'],
      13: ['1.3rem'],
      14: ['1.4rem'],
      15: ['1.5rem'],
      16: ['1.6rem'],
      17: ['1.7rem'],
      18: ['1.8rem'],
      19: ['1.9rem'],
      20: ['2rem'],
      24: ['2.4rem'],
      28: ['2.8rem'],
      32: ['3.2rem'],
      36: ['3.6rem'],
      40: ['4rem'],
      44: ['4.4rem'],
      48: ['4.8rem'],
      52: ['5.2rem'],
      56: ['5.6rem'],
      60: ['6rem'],
      64: ['6.4rem'],
      68: ['6.8rem'],
      72: ['7.2rem'],
      96: ['9.6rem'],
      128: ['12.8rem'],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
      100: '100',
      200: '200',
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '1.2rem',
      4: '1.6rem',
      5: '2rem',
      6: '2.4rem',
      7: '2.8rem',
      8: '3.2rem',
      9: '3.6rem',
      10: '4rem',
      12: '4.8rem',
      15: '6rem',
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
    },
    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      '11/20': '55%',
      '7/20': '35%',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
    }),
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      '11/20': '55%',
      '7/5': '120%',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
    }),
    maxWidth: (theme) => ({
      ...theme('spacing'),
      1024: '1024px',
      1150: '1150px',
      1200: '1200px',
      1300: '1300px',
      1500: '1500px',
      1550: '1550px',
      1600: '1600px',
    }),
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      95: '0.95',
      100: '1',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    boxShadow: {
      button: '0 0 4px 2px rgba(0, 0, 0, 0.16)',
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [
  ],
};