import { useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

import { Palette } from "@/constants/theme";

import { AppText } from "./app-text";

type Variant = "default" | "active" | "readonly";
type Accent = "blue" | "pink" | "none";

type Props = TextInputProps & {
  label: string;
  variant?: Variant;
  accent?: Accent;
  readOnly?: boolean;
};

function accentColorOf(accent: Accent) {
  if (accent === "blue") return Palette.blue;
  if (accent === "pink") return Palette.pink;
  return null;
}

export function SignupInput({
  label,
  variant = "default",
  accent = "blue",
  readOnly = false,
  style,
  ...rest
}: Props) {
  const [focused, setFocused] = useState(false);
  const accentColor = accentColorOf(accent);

  const isReadonly = readOnly || variant === "readonly";
  const isActive = !isReadonly && (variant === "active" || focused);
  const showAccent = isActive && accentColor !== null;

  return (
    <View
      style={[
        styles.container,
        showAccent && {
          borderColor: accentColor!,
        },
        isReadonly && styles.readonly,
      ]}
    >
      <AppText
        weight="bold"
        size={12}
        color={showAccent ? accentColor! : "#75787B"}
      >
        {label}
      </AppText>
      <TextInput
        {...rest}
        editable={!isReadonly && rest.editable !== false}
        onFocus={(e) => {
          setFocused(true);
          rest.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          rest.onBlur?.(e);
        }}
        placeholderTextColor={
          showAccent ? `${accentColor}80` : Palette.grayLight
        }
        style={[styles.input, style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 64,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Palette.gray,
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: "center",
    gap: 4,
  },
  readonly: {
    backgroundColor: "transparent",
    borderColor: Palette.grayDark,
  },
  input: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 15,
    padding: 0,
    margin: 0,
    color: Palette.grayDark,
  },
});
