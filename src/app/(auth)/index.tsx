import { Button } from "@/components/Button";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Image source={{ uri: user?.imageUrl }} style={styles.image} />
      <Text style={styles.text}>Hello, {user?.fullName}</Text>
      <Button icon="exit" title="Sign Out" onPress={() => signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    height: 92,
    width: 92,
    borderRadius: 12,
  },
});
