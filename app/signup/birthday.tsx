import { useRouter } from "expo-router";
import { useState } from "react";

import { formatDateInput, isFullDate } from "@/components/format-date";
import { SignupInput } from "@/components/signup-input";
import { SignupStepLayout } from "@/components/signup-step-layout";

import { useSignup } from "./_layout";

export default function BirthdayScreen() {
  const router = useRouter();
  const { birthday, nickname, set } = useSignup();
  const [value, setValue] = useState(birthday);

  const active = isFullDate(value);

  const goNext = () => {
    set({ birthday: value.trim() });
    router.push("/signup/anniversary");
  };

  return (
    <SignupStepLayout
      step={2}
      accent="pink"
      title="생일 입력"
      subtitle="생년월일을 입력해주세요. 생일은 나중에 변경할 수 있어요!"
      buttonLabel="다음"
      buttonActive={active}
      onNext={() => {
        if (active) goNext();
      }}
      onSkip={() => {
        set({ birthday: "" });
        router.push("/signup/anniversary");
      }}
    >
      <SignupInput
        label="생년월일"
        accent="pink"
        variant="active"
        placeholder="0000. 00. 00."
        value={value}
        onChangeText={(t) => setValue(formatDateInput(t))}
        keyboardType="number-pad"
        maxLength={12}
        autoFocus
      />
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
