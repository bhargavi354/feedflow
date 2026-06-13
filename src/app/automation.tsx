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

  useEffect(() => {
    const saved = localStorage.getItem("interests");

    if (saved) {
      setInterests(JSON.parse(saved));
    }
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

      <View style={styles.card}>
        <Text style={styles.label}>
          Status: {active ? "Active ✅" : "Paused ⏸️"}
        </Text>

        <Text style={styles.label}>
          Actions Completed: {actions}
        </Text>

        <Text style={styles.label}>
          Last Activity: {active ? "Running..." : "Stopped"}
        </Text>

        <Text style={styles.label}>
          Personalization Progress: {progress}%
        </Text>
      </View>

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

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Recent Actions
        </Text>

        <Text style={styles.item}>
          ✓ Liked content based on interests
        </Text>

        <Text style={styles.item}>
          ✓ Followed relevant pages
        </Text>

        <Text style={styles.item}>
          ✓ Reduced unwanted content
        </Text>

        <Text style={styles.item}>
          ✓ Improved recommendation score
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
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
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});