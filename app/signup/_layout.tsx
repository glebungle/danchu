import { Stack } from "expo-router";
import { createContext, useContext, useMemo, useState } from "react";

import { Palette } from "@/constants/theme";

type Answers = { activity?: string; date?: string };

type SignupData = {
  nickname: string;
  birthday: string;
  anniversary: string;
  answers: Answers;
  partnerCode: string;
};

type SignupContextValue = SignupData & {
  set: (patch: Partial<SignupData>) => void;
  setAnswer: (key: keyof Answers, value: string) => void;
  myCode: string;
};

const SignupContext = createContext<SignupContextValue | null>(null);

export function useSignup() {
  const ctx = useContext(SignupContext);
  if (!ctx) {
    throw new Error("useSignup must be used inside SignupProvider");
  }
  return ctx;
}

export default function SignupLayout() {
  const [data, setData] = useState<SignupData>({
    nickname: "",
    birthday: "",
    anniversary: "",
    answers: {},
    partnerCode: "",
  });

  const value = useMemo<SignupContextValue>(
    () => ({
      ...data,
      myCode: "3vneiry8234dlojf",
      set: (patch) => setData((prev) => ({ ...prev, ...patch })),
      setAnswer: (key, val) =>
        setData((prev) => ({
          ...prev,
          answers: { ...prev.answers, [key]: val },
        })),
    }),
    [data],
  );

  return (
    <SignupContext.Provider value={value}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Palette.signupBg },
        }}
      />
    </SignupContext.Provider>
  );
}
