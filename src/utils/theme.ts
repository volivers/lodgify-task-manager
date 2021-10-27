const palette = {
  primary: '#00B797',
  light: '#EEEEEE',
  white: '#FFFFFF',
  black: '#000000',
  success: '#2EE6A5',
  error: '#FE6077',
  info: '#FDBB42',
  body: '#333333',
};

const typography = {
  body: 'Source Sans Pro',
};

const boxShadows = {
  default: {
    xs: '0 0 1px 0 rgba(0, 0, 0, 0.3)',
    s: '0 0 2px 0 rgba(0, 0, 0, 0.3)',
    m: '0 0 4px 0 rgba(0, 0, 0, 0.3)',
    l: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
    xl: '0 0 40px 0 rgba(0, 0, 0, 0.3)',
  },
  hover: {
    xs: '-2px 2px 4px 0 rgba(0, 0, 0, 0.3)',
    s: '-4px 4px 7px 0 rgba(0, 0, 0, 0.3)',
    m: '-7px 7px 10px 0 rgba(0, 0, 0, 0.3)',
    l: '-12px 12px 18px 0 rgba(0, 0, 0, 0.3)',
    xl: '-15px 15px 26px 0 rgba(0, 0, 0, 0.2)',
  },
};

const theme = {
  palette,
  typography,
  boxShadows,
};

export type paletteType = typeof palette;
export type typographyType = typeof typography;
export type boxShadowsType = typeof boxShadows;

export default theme;