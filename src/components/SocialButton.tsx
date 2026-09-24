import { Pressable, Text, View } from "react-native";

type Provider = "google" | "facebook";

type SocialButtonProps = {
  provider: Provider;
  onPress?: () => void;
};

const LABELS: Record<Provider, string> = {
  google: "Continue with Google",
  facebook: "Continue with Facebook",
};

function ProviderIcon({ provider }: { provider: Provider }) {
  if (provider === "google") {
    return (
      <Text className="font-bold text-[26px]" style={{ color: "#4285F4" }}>
        G
      </Text>
    );
  }

  return (
    <View className="h-8 w-8 items-center justify-center rounded-full bg-[#1877F2]">
      <Text className="font-bold text-[20px] leading-[26px] text-white">f</Text>
    </View>
  );
}

export function SocialButton({ provider, onPress }: SocialButtonProps) {
  return (
    <Pressable className="social-btn active:opacity-80" onPress={onPress}>
      <View className="social-btn__icon">
        <ProviderIcon provider={provider} />
      </View>
      <Text className="social-btn__label">{LABELS[provider]}</Text>
    </Pressable>
  );
}
