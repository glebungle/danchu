import { Image } from "expo-image";
import { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Palette } from "@/constants/theme";

import { AppText } from "./app-text";
import { SignupButton } from "./signup-button";

type Props = {
  step: number;
  totalSteps?: number;
  accent: "blue" | "pink";
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonActive: boolean;
  onNext: () => void;
  onSkip?: () => void;
  hideProgress?: boolean;
  children: ReactNode;
};

export function SignupStepLayout({
  step,
  totalSteps = 5,
  accent,
  title,
  subtitle,
  buttonLabel,
  buttonActive,
  onNext,
  onSkip,
  hideProgress = false,
  children,
}: Props) {
  const accentColor = accent === "blue" ? Palette.blue : Palette.pink;
  const progress = step / totalSteps;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.flex}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            {!hideProgress && (
              <View style={styles.progressRow}>
                <Image
                  source={require("@/assets/images/Heart.png")}
                  style={styles.heart}
                  tintColor={accentColor}
                  contentFit="contain"
                />
                <View style={styles.progressTrack}>
                  <View
                    style={[
                      styles.progressFill,
                      {
                        width: `${progress * 100}%`,
                        backgroundColor: accentColor,
                      },
                    ]}
                  />
                </View>
              </View>
            )}

            <AppText
              weight="bold"
              size={20}
              color={accentColor}
              style={styles.title}
            >
              {title}
            </AppText>
            <AppText
              weight="medium"
              size={12}
              color="#4D5053"
              style={styles.subtitle}
            >
              {subtitle}
            </AppText>

            <View style={styles.body}>{children}</View>
          </ScrollView>

          <View style={styles.footer}>
            {onSkip && (
              <Pressable onPress={onSkip} hitSlop={12} style={styles.skip}>
                <AppText weight="regular" size={13} color={Palette.grayDark}>
                  건너뛰기
                </AppText>
              </Pressable>
            )}
            <SignupButton
              label={buttonLabel}
              active={buttonActive}
              onPress={onNext}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.signupBg,
  },
  heart: {
    width: 26,
    height: 26,
  },
  safeArea: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
    marginTop: "10%",
  },
  progressTrack: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: Palette.gray,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 2,
  },
  title: {
    marginTop: 4,
  },
  subtitle: {
    marginTop: 6,
  },
  body: {
    marginTop: 28,
    gap: 12,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 16,
    paddingTop: 8,
    alignItems: "stretch",
    gap: 12,
  },
  skip: {
    alignSelf: "center",
    paddingVertical: 4,
  },
});
