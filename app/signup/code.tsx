import { useRouter } from "expo-router";
import { StyleSheet, TextInput, View } from "react-native";

import { AppText } from "@/components/app-text";
import { SignupStepLayout } from "@/components/signup-step-layout";
import { Palette } from "@/constants/theme";

import { useSignup } from "./_layout";

export default function CodeScreen() {
  const router = useRouter();
  const { myCode, partnerCode, set } = useSignup();

  const active = partnerCode.trim().length > 0;

  return (
    <SignupStepLayout
      step={5}
      accent="pink"
      title="코드 입력"
      subtitle="연인을 초대하고 함께 시작해봐요!"
      buttonLabel="시작하기"
      buttonActive={active}
      onNext={() => {
        if (!active) return;
        router.replace("/(tabs)/home");
      }}
    >
      <View style={styles.card}>
        <View style={styles.row}>
          <AppText weight="bold" size={12} color={Palette.textBlack}>
            나의 코드
          </AppText>
          <View style={styles.field}>
            <AppText weight="bold" size={12} color="#4D5053">
              {myCode}
            </AppText>
          </View>
        </View>

        <View style={styles.row}>
          <AppText weight="bold" size={12} color={Palette.textBlack}>
            상대방 코드 입력
          </AppText>
          <TextInput
            value={partnerCode}
            onChangeText={(v) => set({ partnerCode: v })}
            style={styles.fieldInput}
            placeholderTextColor="#4D5053"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>
    </SignupStepLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: Palette.pink,
    borderRadius: 14,
    padding: 16,
    gap: 60,
  },
  row: {
    gap: 8,
  },
  field: {
    height: 40,
    borderRadius: 8,
    backgroundColor: Palette.inputBg,
    paddingHorizontal: 14,
    justifyContent: "center",
  },
  fieldInput: {
    height: 40,
    borderRadius: 8,
    backgroundColor: Palette.inputBg,
    paddingHorizontal: 14,
    fontFamily: "Pretendard-SemiBold",
    fontSize: 14,
    color: Palette.grayDark,
  },
});
