import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, View } from "react-native";

import { Palette } from "@/constants/theme";

import { AppText } from "./app-text";

type Props = {
  label: string;
  active: boolean;
  onPress?: () => void;
};

export function SignupButton({ label, active, onPress }: Props) {
  if (!active) {
    return (
      <View style={[styles.button, styles.inactive]}>
        <AppText weight="semiBold" size={16} color="#FFFFFF">
          {label}
        </AppText>
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      <LinearGradient
        colors={[Palette.gradientStart, Palette.gradientEnd]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.button}
      >
        <AppText weight="semiBold" size={16} color="#FFFFFF">
          {label}
        </AppText>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  inactive: {
    backgroundColor: Palette.buttonInactive,
  },
  pressed: {
    opacity: 0.85,
  },
});
