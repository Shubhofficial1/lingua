import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

const CODE_LENGTH = 6;

type VerificationModalProps = {
  visible: boolean;
  email: string;
  onClose: () => void;
};

export function VerificationModal({
  visible,
  email,
  onClose,
}: VerificationModalProps) {
  const router = useRouter();
  const inputRef = useRef<TextInput>(null);
  const [code, setCode] = useState("");
  const keyboardOpen = useRef(false);

  useEffect(() => {
    const show = Keyboard.addListener("keyboardDidShow", () => {
      keyboardOpen.current = true;
    });
    const hide = Keyboard.addListener("keyboardDidHide", () => {
      keyboardOpen.current = false;
    });
    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  const handleChange = (text: string) => {
    const digits = text.replace(/\D/g, "").slice(0, CODE_LENGTH);
    setCode(digits);

    // Last digit entered -> go to home
    if (digits.length === CODE_LENGTH) {
      setCode("");
      onClose();
      router.replace("/");
    }
  };

  // Only reopen when hidden. After the back button the input keeps focus, so blur first
  const showKeyboard = () => {
    if (keyboardOpen.current) return;

    inputRef.current?.blur();
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleClose = () => {
    setCode("");
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
      onShow={() => setTimeout(() => inputRef.current?.focus(), 100)}
    >
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(13, 19, 43, 0.5)",
        }}
      >
        <Pressable style={{ flex: 1 }} onPress={handleClose} />

        <View
          className="items-center rounded-t-[32px] bg-white px-7 pb-8 pt-8"
          style={{ backgroundColor: "#ffffff" }}
        >
          <Text className="text-[40px]">📩</Text>
          <Text className="h2 mt-3 text-center">Check your email</Text>
          <Text className="body-md mt-2 text-center text-text-secondary">
            We sent a verification email{email ? ` to ${email}` : ""}. Enter
            the 6-digit code to continue.
          </Text>

          {/* Only filled boxes and the next empty one reopen the keyboard */}
          <View className="mt-6 flex-row gap-2">
            {Array.from({ length: CODE_LENGTH }).map((_, index) => (
              <Pressable
                key={index}
                className={`otp-box ${index === code.length ? "otp-box--active" : ""}`}
                disabled={index > code.length}
                onPress={showKeyboard}
              >
                <Text className="otp-box__digit">{code[index] ?? ""}</Text>
              </Pressable>
            ))}
          </View>

          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleChange}
            keyboardType="number-pad"
            maxLength={CODE_LENGTH}
            caretHidden
            style={{ position: "absolute", opacity: 0, height: 1, width: 1 }}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
