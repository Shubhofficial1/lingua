import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";

type SpeechBubbleProps = {
  label: string;
  bgClass: string;
  textClass: string;
  positionClass: string;
  tailClass: string;
};

function SpeechBubble({
  label,
  bgClass,
  textClass,
  positionClass,
  tailClass,
}: SpeechBubbleProps) {
  return (
    <View className={`bubble ${bgClass} ${positionClass}`}>
      <Text className={`bubble__text ${textClass}`}>{label}</Text>
      <View className={`bubble__tail ${bgClass} ${tailClass}`} />
    </View>
  );
}

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="flex-1 px-7">
        {/* Logo */}
        <View className="mt-1 flex-row items-center justify-center">
          <Image
            source={images.mascotLogo}
            className="-my-4 h-20 w-20"
            resizeMode="contain"
          />
          <Text className="font-semibold text-[32px] tracking-tight text-text-primary">
            Lingua
          </Text>
        </View>

        {/* Heading */}
        <Text className="h1 mt-10 text-[34px] leading-[48px]">
          Your AI language{"\n"}
          <Text className="text-primary-deep">teacher</Text>.
        </Text>
        <Text className="body-lg mt-4 leading-[30px] text-text-secondary">
          Real conversations, personalized lessons, anytime, anywhere.
        </Text>

        {/* Illustration */}
        <View className="mt-6 h-[400px] items-center">
          <Image
            source={images.mascotWelcome}
            className="absolute top-3 h-[420px] w-[420px]"
            resizeMode="contain"
          />
          <SpeechBubble
            label="Hello!"
            bgClass="bg-bubble-blue"
            textClass="text-text-primary"
            positionClass="left-0 top-6 -rotate-6"
            tailClass="right-4"
          />
          <SpeechBubble
            label="¡Hola!"
            bgClass="bg-bubble-purple"
            textClass="text-bubble-purple-text"
            positionClass="right-6 top-0 rotate-6"
            tailClass="left-4"
          />
          <SpeechBubble
            label="你好!"
            bgClass="bg-bubble-red"
            textClass="text-bubble-red-text"
            positionClass="-right-2 top-24 rotate-6"
            tailClass="left-4"
          />
        </View>

        <View className="flex-1" />

        {/* Get Started */}
        <Pressable
          className="btn-primary mb-4 px-6 active:opacity-90"
          onPress={() => router.push("/sign-up")}
        >
          <Text className="btn-primary__label flex-1 text-center">
            Get Started
          </Text>
          <View className="h-3 w-3 rotate-45 border-r-2 border-t-2 border-white" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
