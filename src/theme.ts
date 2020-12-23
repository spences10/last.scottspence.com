const fallbackFonts = {
  headingFallback: [
    'Georgia',
    'Cambria',
    '"Times New Roman"',
    'Times',
    'serif',
  ],
  bodyFallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ],
  monoFallback: [
    'Menlo',
    'Monaco',
    'Consolas',
    '"Liberation Mono"',
    '"Courier New"',
    'monospace',
  ],
}

export default {
  initialColorMode: 'dark',
  colors: {
    text: '#ffffffeb',
    background: 'rgb(26 32 44)',
    primary: '#07c',
    modes: {
      light: {
        text: 'rgb(26 32 44)',
        background: '#ffffffeb',
        primary: '#0cf',
      },
      purple: {
        text: '#ffffffeb',
        background: '#663399',
        primary: '#0cf',
      },
    },
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  fonts: {
    heading: [['Hepta Slab'], fallbackFonts.headingFallback].join(
      `,`
    ),
    body: [['Work Sans'], fallbackFonts.bodyFallback].join(`,`),
    mono: [['Victor Mono'], fallbackFonts.monoFallback].join(`,`),
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  sizes: { container: 640 },
  breakpoints: ['40em', '52em', '64em'],
  styles: {
    p: { fontFamily: 'body', wordBreak: 'break-word' },
    h1: { fontFamily: 'heading' },
    h2: { fontFamily: 'heading' },
    img: { maxWidth: '100%' },
    root: {
      '.highlight': { backgroundColor: 'primary' },
      body: {
        fontFamily: 'body',
        lineHeight: 'base',
        // marginLeft: 'calc(100vw - 100%)',
      },
    },
  },
}
