import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AutomationScreen() {
  const [active, setActive] = useState(false);
  const [actions, setActions] = useState(0);
  const [progress, setProgress] = useState(0);

  const [interests, setInterests] = useState<string[]>([]);
  const [blockedTopics, setBlockedTopics] = useState<string[]>([]);

  const loadPreferences = async () => {
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

  useEffect(() => {
    loadPreferences();
  }, []);

  useEffect(() => {
    let interval: any;

    if (active) {
      interval = setInterval(() => {
        setActions((prev) => prev + 1);

        setProgress((prev) => {
          if (prev >= 100) return 100;
          return prev + 5;
        });
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [active]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Automation Dashboard
      </Text>

      {/* Status */}
      <View style={styles.card}>
        <Text style={styles.label}>
          Status: {active ? "Active ✅" : "Paused ⏸️"}
        </Text>

        <Text style={styles.label}>
          Actions Completed: {actions}
        </Text>

        <Text style={styles.label}>
          Last Activity:{" "}
          {active
            ? new Date().toLocaleTimeString()
            : "Stopped"}
        </Text>

        <Text style={styles.label}>
          Personalization Progress: {progress}%
        </Text>
      </View>

      {/* Selected Interests */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Selected Interests ({interests.length})
        </Text>

        {interests.length > 0 ? (
          interests.map((item, index) => (
            <Text key={index} style={styles.item}>
              • {item}
            </Text>
          ))
        ) : (
          <Text style={styles.item}>
            No interests selected
          </Text>
        )}
      </View>

      {/* Reduced Topics */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Reduced Topics ({blockedTopics.length})
        </Text>

        {blockedTopics.length > 0 ? (
          blockedTopics.map((item, index) => (
            <Text key={index} style={styles.item}>
              • {item}
            </Text>
          ))
        ) : (
          <Text style={styles.item}>
            No blocked topics selected
          </Text>
        )}
      </View>

      {/* Strategy */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Automation Strategy
        </Text>

        <Text style={styles.item}>
          • Prioritizes content matching selected interests
        </Text>

        <Text style={styles.item}>
          • Reduces exposure to blocked topics
        </Text>

        <Text style={styles.item}>
          • Reinforces engagement signals
        </Text>

        <Text style={styles.item}>
          • Tracks personalization progress
        </Text>

        <Text style={styles.item}>
          • Runs continuously while active
        </Text>
      </View>

      {/* Activity Log */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Automation Activity Log
        </Text>

        <Text style={styles.item}>
          ✓ User preferences loaded
        </Text>

        <Text style={styles.item}>
          ✓ Content personalization ready
        </Text>

        <Text style={styles.item}>
          ✓ Interest signals prepared
        </Text>

        <Text style={styles.item}>
          ✓ Blocked topics identified
        </Text>

        <Text style={styles.item}>
          ✓ Feed optimization running
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={[
          styles.button,
          active && styles.activeButton,
        ]}
        onPress={() => setActive(!active)}
      >
        <Text style={styles.buttonText}>
          {active
            ? "Pause Automation"
            : "Start Automation"}
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

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  item: {
    fontSize: 16,
    marginBottom: 8,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  activeButton: {
    backgroundColor: "#16A34A",
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});