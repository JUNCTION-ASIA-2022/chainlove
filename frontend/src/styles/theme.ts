export type ColorType = {
  black: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  white: string;
  background: string;
};

const color: ColorType = {
  black: '#000',
  gray2: '#989898',
  gray1: '#353942',
  gray3: '#BBBBBB',
  gray4: '#EEEEEE',
  white: '#fff',
  background: '#f5f5f5',
};

export const font = {
  size: {
    xSmall: '12px',
    small: '14px',
    medium: '16px',
    large: '20px',
  },

  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },

  lineHeight: {
    xSmall: '16px',
    small: '18px',
    medium: '24px',
    large: '22px',
  },

  family: "'Noto Sans', sans-serif",
};

export type FontType = typeof font;

// export type ThemeType = {};

export const theme = {
  color,
  font,
};
