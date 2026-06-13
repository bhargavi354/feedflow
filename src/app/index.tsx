import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🚀</Text>

      <Text style={styles.title}>FeedFlow</Text>

      <Text style={styles.subtitle}>
        Personalize your Instagram experience with AI-powered automation.
      </Text>

      <View style={styles.card}>
        <Text style={styles.item}>✅ Connect Instagram</Text>
        <Text style={styles.item}>🎯 Choose Interests</Text>
        <Text style={styles.item}>⚡ Activate Personalization</Text>
        <Text style={styles.item}>📈 Improve Feed Relevance</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/preferences")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    fontSize: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 30,
  },
  card: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
  },
  item: {
    fontSize: 18,
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});