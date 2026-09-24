import { Link, useRouter } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SocialButton } from "@/components/SocialButton";
import { VerificationModal } from "@/components/VerificationModal";
import { images } from "@/constants/images";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [verifying, setVerifying] = useState(false);

  const canSubmit = email.trim().length > 0 && password.length > 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-6">
          {/* Back */}
          <Pressable
            className="mt-4 h-10 w-10 justify-center"
            onPress={() => router.back()}
            hitSlop={12}
          >
            <View className="ml-2 h-3 w-3 rotate-45 border-b-2 border-l-2 border-text-primary" />
          </Pressable>

          {/* Heading */}
          <Text className="h1 mt-6 text-[30px] leading-[38px]">
            Create your account
          </Text>
          <Text className="body-lg mt-2 text-text-secondary">
            Start your language journey today ✨
          </Text>

          {/* Mascot */}
          <View className="items-center">
            <Image
              source={images.mascotAuth}
              className="-mb-10 -mt-8 h-[240px] w-[240px]"
              resizeMode="contain"
            />
          </View>

          {/* Fields */}
          <View className="auth-field">
            <Text className="auth-field__label">Email</Text>
            <TextInput
              className="auth-field__input"
              value={email}
              onChangeText={setEmail}
              placeholder="alex@gmail.com"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
          </View>

          <View className="auth-field mt-4">
            <Text className="auth-field__label">Password</Text>
            <TextInput
              className="auth-field__input pr-10"
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              placeholderTextColor="#9CA3AF"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <Pressable
              className="absolute right-5 top-0 h-full justify-center"
              onPress={() => setShowPassword((value) => !value)}
              hitSlop={10}
            >
              <SymbolView
                name={showPassword ? "eye.slash" : "eye"}
                size={24}
                tintColor="#6B7280"
                fallback={<Text className="text-[20px]">👁</Text>}
              />
            </Pressable>
          </View>

          {/* Main button */}
          <Pressable
            className={`btn-primary mt-5 h-[60px] active:opacity-90 ${canSubmit ? "" : "btn-primary--disabled"}`}
            disabled={!canSubmit}
            onPress={() => setVerifying(true)}
          >
            <Text className="btn-primary__label">Sign Up</Text>
          </Pressable>

          {/* Divider */}
          <View className="my-5 flex-row items-center gap-4">
            <View className="h-px flex-1 bg-border" />
            <Text className="body-sm">or continue with</Text>
            <View className="h-px flex-1 bg-border" />
          </View>

          <View className="gap-3">
            <SocialButton provider="google" />
            <SocialButton provider="facebook" />
          </View>

          <View className="min-h-8 flex-1" />

          {/* Footer */}
          <Text className="body-md mb-4 mt-6 text-center text-text-secondary">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-medium text-primary-deep">
              Log in
            </Link>
          </Text>
        </View>
      </ScrollView>

      <VerificationModal
        visible={verifying}
        email={email}
        onClose={() => setVerifying(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: { flexGrow: 1 },
});
