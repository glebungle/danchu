import { useRouter } from "expo-router";
import { useState } from "react";

import { formatDateInput, isFullDate } from "@/components/format-date";
import { SignupInput } from "@/components/signup-input";
import { SignupStepLayout } from "@/components/signup-step-layout";

import { useSignup } from "./_layout";

export default function AnniversaryScreen() {
  const router = useRouter();
  const { anniversary, birthday, nickname, set } = useSignup();
  const [value, setValue] = useState(anniversary);

  const active = isFullDate(value);

  return (
    <SignupStepLayout
      step={3}
      accent="blue"
      title="기념일 입력"
      subtitle="우리의 사랑이 시작된 날! 기념일을 입력해주세요."
      buttonLabel="다음"
      buttonActive={active}
      onNext={() => {
        if (!active) return;
        set({ anniversary: value.trim() });
        router.push("/signup/questions");
      }}
    >
      <SignupInput
        label="기념일"
        accent="blue"
        variant="active"
        placeholder="0000. 00. 00."
        value={value}
        onChangeText={(t) => setValue(formatDateInput(t))}
        keyboardType="number-pad"
        maxLength={12}
        autoFocus
      />
      {birthday.length > 0 && (
        <SignupInput
          label="생년월일"
          value={birthday}
          variant="readonly"
        />
      )}
      {nickname.length > 0 && (
        <SignupInput
          label="이름"
          value={nickname}
          variant="readonly"
        />
      )}
    </SignupStepLayout>
  );
}
