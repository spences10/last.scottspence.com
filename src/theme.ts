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
    background: '#1a202c',
    primary: '#07c',
    secondary: '',
    muted: '',
    highlight: '',
    modes: {
      light: {
        text: '#1a202c',
        background: '#ffffffeb',
        primary: '#0cf',
        secondary: '',
        muted: '',
        highlight: '',
      },
      purple: {
        text: '#ffffffeb',
        background: '#663399',
        primary: '#0cf',
        secondary: '',
        muted: '',
        highlight: '',
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
    body: 400,
    heading: 700,
    bold: 700,
    light: 200,
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
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    lg: '0.5rem',
    full: '9999px',
  },
  borderWidth: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  boxShadow: {
    default:
      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md:
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none',
  },
  sizes: { container: [340, 540, 640] },
  breakpoints: ['40em', '52em', '64em'],
  styles: {
    a: {
      textDecoration: 'underline',
      color: 'inherit',
      ':visited': {
        color: 'inherit',
      },
      ':hover': {
        transition: 'opacity 300ms',
        opacity: '0.5',
      },
    },
    h1: {
      fontFamily: 'heading',
      fontSize: '4xl',
      lineHeight: 'tall',
    },
    h2: { fontFamily: 'heading', fontSize: '3xl', my: 3 },
    img: { maxWidth: '100%' },
    inlineCode: {
      fontFamily: 'mono',
      fontSize: 'inherit',
      backgroundColor: 'gray',
      borderRadius: 'sm',
      padding: '0 3px',
    },
    li: { fontFamily: 'body', fontSize: 'xl' },
    postsUl: {
      padding: 0,
    },
    postsLi: {
      borderRadius: 'lg',
      boxShadow: 'lg',
      my: 4,
      padding: 2,
      '::marker': {
        content: `''`,
      },
      a: {
        color: 'text',
        textDecoration: 'none',
        ':hover': { textDecoration: 'underline' },
        ':active': {
          color: 'primary',
        },
      },
      h2: { marginTop: 0 },
      p: { fontFamily: 'body' },
    },
    ul: { fontFamily: 'body', fontSize: 'xl', padding: '0 25px' },
    p: {
      fontFamily: 'body',
      fontSize: 'xl',
      lineHeight: 'tall',
      letterSpacing: 'wide',
    },
    pre: {
      fontFamily: 'mono',
      fontSize: 'xl',
      overflow: 'auto',
      margin: '3rem -3rem',
      '.line-number-style': {
        display: 'inline-block',
        width: '2em',
        userSelect: 'none',
        opacity: 0.3,
        textAlign: 'center',
        position: 'relative',
      },
      '.highlight-line': {
        backgroundColor: 'rgb(2, 55, 81)',
        borderLeft: '4px solid rgb(2, 155, 206)',
        '.line-number-style': {
          width: 'calc(2em - 4px)',
          opacity: 0.5,
          left: '-2px',
        },
      },
      scrollbarColor: 'primary #639',
      '::-webkit-scrollbar': { width: '15px' },
      '::-webkit-scrollbar-track': {
        background: '#639',
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: 'primary',
        borderRadius: '14px',
        border: '2px solid #639',
      },
    },
    hideLink: {
      a: { float: 'left', marginLeft: '-25px' },
      svg: {
        visibility: 'hidden',
        height: '35px',
        width: '20px',
        fill: 'text',
      },
      ':hover': {
        svg: { visibility: 'visible', height: '35px', width: '20px' },
      },
    },
    root: {
      '.highlight': { backgroundColor: 'primary' },
      // marginLeft: 'calc(100vw - 100%)',
      scrollbarColor: 'primary #639',
      '::-webkit-scrollbar': { width: '15px' },
      '::-webkit-scrollbar-track': {
        background: '#639',
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: 'primary',
        borderRadius: '14px',
        border: '3px solid #639',
      },
      body: {
        fontFamily: 'body',
        lineHeight: 'base',
        wordBreak: 'break-word',
      },
    },
  },
}
