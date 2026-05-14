import { Platform } from 'react-native';

const tintColorLight = '#9DB9EF';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#4D5053',
    background: '#fff',
    tint: tintColorLight,
    icon: '#75787B',
    tabIconDefault: '#CECECE',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const Palette = {
  blue: '#9DB9EF',
  pink: '#FFD6E8',
  textBlack: '#4D5053',
  gray: '#DDDDDD',
  grayDark: '#75787B',
  grayLight: '#CECECE',
  buttonInactive: '#D9DFEA',
  inputBg: '#EAEAEA',
  gradientStart: '#FFD6E8',
  gradientEnd: '#D6E4FF',
};

export const FontFamily = {
  thin: 'Pretendard-Thin',
  extraLight: 'Pretendard-ExtraLight',
  light: 'Pretendard-Light',
  regular: 'Pretendard-Regular',
  medium: 'Pretendard-Medium',
  semiBold: 'Pretendard-SemiBold',
  bold: 'Pretendard-Bold',
  extraBold: 'Pretendard-ExtraBold',
  black: 'Pretendard-Black',
};

export const Fonts = Platform.select({
  ios: {
    sans: 'Pretendard-Regular',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'Pretendard-Regular',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
