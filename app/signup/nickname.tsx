import { useRouter } from "expo-router";
import { useState } from "react";

import { SignupInput } from "@/components/signup-input";
import { SignupStepLayout } from "@/components/signup-step-layout";

import { useSignup } from "./_layout";

export default function NicknameScreen() {
  const router = useRouter();
  const { nickname, set } = useSignup();
  const [value, setValue] = useState(nickname);

  const active = value.trim().length > 0;

  return (
    <SignupStepLayout
      step={1}
      accent="blue"
      title="별명 입력"
      subtitle="연인과 부르는 애칭도 좋아요. 사용자님을 어떻게 부를까요?"
      buttonLabel="다음"
      buttonActive={active}
      onNext={() => {
        if (!active) return;
        set({ nickname: value.trim() });
        router.push("/signup/birthday");
      }}
    >
      <SignupInput
        label="별명"
        accent="blue"
        placeholder="이름을 입력해주세요"
        value={value}
        onChangeText={setValue}
        autoFocus
        returnKeyType="next"
      />
    </SignupStepLayout>
  );
}
