import { Image } from "expo-image";
import { useEffect } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppText } from "@/components/app-text";
import { Palette } from "@/constants/theme";

const SLIDE_DURATION = 700;
const FADE_DURATION = 900;
const STEP_DELAY = 1600;
const LINE_GAP = 700;
const RECT_AFTER_INTRO = 850;
const FIRST_DELAY = 250;

function useFadeSlide(delay: number) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withDelay(
      delay,
      withTiming(1, {
        duration: SLIDE_DURATION,
        easing: Easing.out(Easing.cubic),
      }),
    );
  }, [delay, progress]);

  return useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateX: (1 - progress.value) * -28 }],
  }));
}

function useFadeIn(delay: number) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withDelay(
      delay,
      withTiming(1, {
        duration: FADE_DURATION,
        easing: Easing.out(Easing.cubic),
      }),
    );
  }, [delay, progress]);

  return useAnimatedStyle(() => ({
    opacity: progress.value,
  }));
}

export default function OnboardingScreen() {
  const introDelay = FIRST_DELAY;
  const rectDelay = FIRST_DELAY + RECT_AFTER_INTRO;
  const prompt1Delay = FIRST_DELAY + STEP_DELAY;
  const prompt2Delay = prompt1Delay + LINE_GAP;
  const buttonDelay = prompt2Delay + STEP_DELAY;

  const introStyle = useFadeSlide(introDelay);
  const rectStyle = useFadeIn(rectDelay);
  const prompt1Style = useFadeSlide(prompt1Delay);
  const prompt2Style = useFadeSlide(prompt2Delay);
  const buttonStyle = useFadeIn(buttonDelay);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        <View style={styles.content}>
          <View>
            <AppText weight="bold" size={28} style={styles.greeting}>
              안녕하세요!
            </AppText>
            <AppText weight="bold" size={14} style={styles.greetingSub}>
              DANCHU와 함께하게 되신 것을 환영합니다!
            </AppText>
          </View>

          <Animated.View style={[styles.block, introStyle]}>
            <AppText weight="bold" size={12}>
              DANCHU는 -
            </AppText>
            <View style={styles.highlightRow}>
              <View style={styles.highlightWrap}>
                <Animated.View style={[StyleSheet.absoluteFill, rectStyle]}>
                  <Image
                    source={require("@/assets/images/Rectangle.png")}
                    style={StyleSheet.absoluteFill}
                    contentFit="fill"
                  />
                </Animated.View>
                <AppText weight="bold" size={12} style={styles.highlightText}>
                  온오프라인 통합 몰입형 커플 아카이빙 플랫폼
                </AppText>
              </View>
              <AppText weight="bold" size={12}>
                입니다.
              </AppText>
            </View>
          </Animated.View>

          <Animated.View style={[styles.block, prompt1Style]}>
            <AppText weight="bold" size={12}>
              DANCHU가 처음이신가요?
            </AppText>
          </Animated.View>

          <Animated.View style={[styles.promptLine, prompt2Style]}>
            <AppText weight="bold" size={12}>
              그렇다면 DANCHU에 대해 더 알려드릴게요!
            </AppText>
          </Animated.View>
        </View>

        <Animated.View style={[styles.buttonWrap, buttonStyle]}>
          <Pressable
            onPress={() => {
              // TODO: navigate to tutorial
            }}
            style={({ pressed }) => [
              styles.tutoButton,
              pressed && styles.pressed,
            ]}
          >
            <Image
              source={require("@/assets/images/tutobtn.png")}
              style={styles.tutoImage}
              contentFit="contain"
            />
          </Pressable>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 40,
  },
  greeting: {
    marginBottom: 8,
  },
  greetingSub: {
    color: Palette.textBlack,
  },
  block: {
    marginTop: 56,
  },
  highlightRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 6,
  },
  highlightWrap: {
    marginLeft: -6,
    paddingHorizontal: 6,
    paddingVertical: 3,
    overflow: "hidden",
  },
  highlightText: {},
  promptLine: {
    marginTop: 4,
  },
  buttonWrap: {
    paddingHorizontal: 28,
    paddingBottom: 32,
  },
  tutoButton: {
    width: "100%",
    height: 64,
  },
  tutoImage: {
    width: "100%",
    height: "100%",
  },
  pressed: {
    opacity: 0.85,
  },
});
