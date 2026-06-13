import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const [interestCount, setInterestCount] = useState(0);

  useEffect(() => {
    loadProfileData();
  }, []);

  const loadProfileData = async () => {
    try {
      const savedInterests =
        await AsyncStorage.getItem("interests");

      if (savedInterests) {
        const interests = JSON.parse(savedInterests);
        setInterestCount(interests.length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    alert("Logged Out Successfully");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Profile & Settings
      </Text>

      <View style={styles.card}>
        <Text style={styles.item}>
          👤 Username: Greg
        </Text>

        <Text style={styles.item}>
          📸 Instagram: Connected
        </Text>

        <Text style={styles.item}>
          ❤️ Selected Interests: {interestCount}
        </Text>

        <Text style={styles.item}>
          🤖 Automation: Active
        </Text>

        <Text style={styles.item}>
          🔒 Privacy: Enabled
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>
          Logout
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

  item: {
    fontSize: 18,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#DC2626",
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