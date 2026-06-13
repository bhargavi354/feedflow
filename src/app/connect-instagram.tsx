import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ConnectInstagramScreen() {
  const [connected, setConnected] = useState(false);
  const [lastSync, setLastSync] = useState("Never");

  const connectInstagram = () => {
    setConnected(true);

    const now = new Date().toLocaleString();
    setLastSync(now);

    console.log("Instagram Connected");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Instagram Connection
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Status: {connected ? "Connected ✅" : "Disconnected ❌"}
        </Text>

        <Text style={styles.label}>
          Last Sync: {lastSync}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={connectInstagram}
      >
        <Text style={styles.buttonText}>
          {connected
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

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});