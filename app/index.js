import { View, Text, Button } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function index() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/(auth)/login");
    }
  }, [user]);

  if (!user) {
    return null;
  }
  return (
    <View>
      <Text>Welcome, {user}!</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
  }