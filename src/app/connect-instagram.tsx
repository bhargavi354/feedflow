import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ConnectInstagramScreen() {
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastSync, setLastSync] = useState("Never");

  const connectInstagram = () => {
    setLoading(true);

    setTimeout(() => {
      setConnected(true);

      const now = new Date().toLocaleString();
      setLastSync(now);

      setLoading(false);
      router.push("/preferences");

      console.log("Instagram Connected");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Instagram Connection
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Status:{" "}
          {loading
            ? "Connection In Progress ⏳"
            : connected
            ? "Connected ✅"
            : "Disconnected ❌"}
        </Text>

        <Text style={styles.label}>
          Last Sync: {lastSync}
        </Text>

        <Text style={styles.label}>
          Connection Health:{" "}
          {connected ? "Good 🟢" : "Not Connected 🔴"}
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          connected && styles.connectedButton,
        ]}
        onPress={connectInstagram}
        disabled={loading || connected}
      >
        <Text style={styles.buttonText}>
          {loading
            ? "Connecting..."
            : connected
            ? "Instagram Connected"
            : "Connect Instagram"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#F3F4F6",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },

  label: {
    fontSize: 18,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
  },

  connectedButton: {
    backgroundColor: "#16A34A",
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});