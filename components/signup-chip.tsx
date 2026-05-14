import { Pressable, StyleSheet } from "react-native";

import { Palette } from "@/constants/theme";

import { AppText } from "./app-text";

type Props = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export function SignupChip({ label, selected, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.chip,
        selected && styles.chipSelected,
        pressed && !selected && styles.pressed,
      ]}
    >
      <AppText
        weight={selected ? "semiBold" : "regular"}
        size={12}
        color={selected ? "#FFFFFF" : Palette.textBlack}
      >
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    flex: 1,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#75787B",
    alignItems: "center",
    justifyContent: "center",
  },
  chipSelected: {
    backgroundColor: "#1E1E1E",
    borderColor: "#1E1E1E",
  },
  pressed: {
    opacity: 0.7,
  },
});
