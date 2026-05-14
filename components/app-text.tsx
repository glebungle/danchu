import { StyleSheet, Text, type TextProps } from 'react-native';

import { FontFamily, Palette } from '@/constants/theme';

export type AppTextWeight =
  | 'thin'
  | 'extraLight'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'
  | 'black';

export type AppTextProps = TextProps & {
  weight?: AppTextWeight;
  size?: number;
  color?: string;
};

export function AppText({
  style,
  weight = 'regular',
  size,
  color = Palette.textBlack,
  ...rest
}: AppTextProps) {
  return (
    <Text
      style={[
        styles.base,
        { fontFamily: FontFamily[weight], color },
        size != null && { fontSize: size },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    fontSize: 16,
    color: Palette.textBlack,
  },
});
