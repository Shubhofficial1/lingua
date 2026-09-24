import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-6 bg-white">
      <Text className="h1">Hello World</Text>
      <Link href="/onboarding" className="h4 text-primary-deep!">
        Open onboarding screen
      </Link>
    </View>
  );
}
