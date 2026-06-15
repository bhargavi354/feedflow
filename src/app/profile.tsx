import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const [interests, setInterests] = useState<string[]>([]);
  const [blockedTopics, setBlockedTopics] = useState<string[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const savedInterests =
        await AsyncStorage.getItem("interests");

      const savedBlocked =
        await AsyncStorage.getItem("blockedTopics");

      if (savedInterests) {
        setInterests(JSON.parse(savedInterests));
      }

      if (savedBlocked) {
        setBlockedTopics(JSON.parse(savedBlocked));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Profile & Settings
      </Text>

      <View style={styles.card}>
        <Text style={styles.item}>
          👤 Username: Greg
        </Text>

        <Text style={styles.item}>
          📷 Instagram: Connected ✅
        </Text>

        <Text style={styles.item}>
          ❤️ Selected Interests: {interests.length}
        </Text>

        <Text style={styles.item}>
          🚫 Reduced Topics: {blockedTopics.length}
        </Text>

        <Text style={styles.item}>
          🤖 Automation: Active
        </Text>

        <Text style={styles.item}>
          🔒 Privacy: Enabled
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Selected Interests
        </Text>

        {interests.length > 0 ? (
          interests.map((item, index) => (
            <Text
              key={index}
              style={styles.listItem}
            >
              • {item}
            </Text>
          ))
        ) : (
          <Text>No interests selected</Text>
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Reduced Topics
        </Text>

        {blockedTopics.length > 0 ? (
          blockedTopics.map((item, index) => (
            <Text
              key={index}
              style={styles.listItem}
            >
              • {item}
            </Text>
          ))
        ) : (
          <Text>No blocked topics selected</Text>
        )}
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>
          Logout
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#F3F4F6",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  item: {
    fontSize: 18,
    marginBottom: 10,
  },

  listItem: {
    fontSize: 16,
    marginBottom: 8,
  },

  logoutButton: {
    backgroundColor: "#DC2626",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  logoutText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});