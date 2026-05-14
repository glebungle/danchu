import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppText } from "@/components/app-text";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/splash.png")}
        style={StyleSheet.absoluteFill}
        contentFit="cover"
      />
      <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
        <View style={styles.bottomArea}>
          <Pressable
            style={({ pressed }) => [
              styles.kakaoButton,
              pressed && styles.pressed,
            ]}
            onPress={() => {
              // TODO: hook up Kakao login
            }}
          >
            <Image
              source={require("@/assets/images/kakao.png")}
              style={styles.kakaoImage}
              contentFit="contain"
            />
          </Pressable>
          <Pressable onPress={() => router.push("/onboarding")} hitSlop={12}>
            <AppText
              weight="medium"
              size={13}
              color="#606060"
              style={styles.signupText}
            >
              회원가입
            </AppText>
          </Pressable>
        </View>
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
    justifyContent: "flex-end",
  },
  bottomArea: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    alignItems: "center",
    gap: 12,
  },
  kakaoButton: {
    width: "100%",
    height: 52,
  },
  kakaoImage: {
    width: "100%",
    height: "100%",
  },
  pressed: {
    opacity: 0.85,
  },
  signupText: {
    textDecorationLine: "underline",
    marginTop: 4,
  },
});
