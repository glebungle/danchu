import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

import { AppText } from "@/components/app-text";
import { SignupChip } from "@/components/signup-chip";
import { SignupStepLayout } from "@/components/signup-step-layout";
import { Palette } from "@/constants/theme";

import { useSignup } from "./_layout";

const ACTIVITY_OPTIONS = [
  "운동/스포츠",
  "예술/창작",
  "문화생활",
  "게임/오락",
  "여행/탐험",
  "맛집/카페",
  "집콕/힐링",
  "학습/자기계발",
];

const DATE_OPTIONS = [
  "활동적인",
  "문화/감성",
  "미식/카페",
  "휴식/힐링",
  "체험/창작",
  "홈데이트",
  "여행/탐험",
];

export default function QuestionsScreen() {
  const router = useRouter();
  const { answers, setAnswer } = useSignup();

  const active = !!answers.activity && !!answers.date;

  return (
    <SignupStepLayout
      step={4}
      accent="blue"
      hideProgress
      title="질문에 답해주세요!"
      subtitle={
        "더 나은 서비스를 제공하기 위해,\n사용자님의 취향을 파악하는 질문을 몇가지 준비했어요."
      }
      buttonLabel="다음"
      buttonActive={active}
      onNext={() => {
        if (active) router.push("/signup/code");
      }}
    >
      <View style={styles.questionBlock}>
        <AppText weight="bold" size={14} color={Palette.blue}>
          평소 즐기는 활동은?
        </AppText>
        <View style={styles.chipGrid}>
          {ACTIVITY_OPTIONS.map((opt) => (
            <View key={opt} style={styles.chipCell}>
              <SignupChip
                label={opt}
                selected={answers.activity === opt}
                onPress={() => setAnswer("activity", opt)}
              />
            </View>
          ))}
        </View>
      </View>

      <View style={styles.questionBlock}>
        <AppText weight="bold" size={14} color={Palette.blue}>
          상대방과 가장 하고 싶은 데이트는?
        </AppText>
        <View style={styles.chipGrid}>
          {DATE_OPTIONS.map((opt) => (
            <View key={opt} style={styles.chipCell}>
              <SignupChip
                label={opt}
                selected={answers.date === opt}
                onPress={() => setAnswer("date", opt)}
              />
            </View>
          ))}
        </View>
      </View>
    </SignupStepLayout>
  );
}

const styles = StyleSheet.create({
  questionBlock: {
    gap: 12,
    marginBottom: 24,
  },
  chipGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -4,
  },
  chipCell: {
    width: "50%",
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
});
