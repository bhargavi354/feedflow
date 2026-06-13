import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function AnalyticsScreen() {
  const [interests, setInterests] = useState<string[]>([]);
  const [blockedTopics, setBlockedTopics] = useState<string[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const savedInterests =
      localStorage.getItem("interests");

    const savedBlocked =
      localStorage.getItem("blockedTopics");

    console.log(
      "ANALYTICS READ:",
      savedInterests
    );

    if (savedInterests) {
      setInterests(JSON.parse(savedInterests));
    }

    if (savedBlocked) {
      setBlockedTopics(JSON.parse(savedBlocked));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Analytics</Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Automation Active: ✅
        </Text>

        <Text style={styles.label}>
          Selected Interests: {interests.length}
        </Text>

        <Text style={styles.label}>
          Actions Completed: 12
        </Text>

        <Text style={styles.label}>
          Personalization Progress: 45%
        </Text>

        <Text style={styles.subTitle}>
          Top Interests
        </Text>

        {interests.length > 0 ? (
          interests.map((item, index) => (
            <Text
              key={index}
              style={styles.interest}
            >
              • {item}
            </Text>
          ))
        ) : (
          <Text style={styles.emptyText}>
            No interests found
          </Text>
        )}

        <Text style={styles.subTitle}>
          Reduced Content
        </Text>

        {blockedTopics.length > 0 ? (
          blockedTopics.map((item, index) => (
            <Text
              key={index}
              style={styles.interest}
            >
              • {item}
            </Text>
          ))
        ) : (
          <Text style={styles.emptyText}>
            No blocked topics
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  },

  label: {
    fontSize: 18,
    marginBottom: 10,
  },

  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },

  interest: {
    fontSize: 16,
    marginBottom: 6,
  },

  emptyText: {
    fontSize: 16,
    color: "gray",
  },
});