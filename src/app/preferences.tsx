import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function PreferencesScreen() {
  const [selected, setSelected] = useState<string[]>([]);
  const [blocked, setBlocked] = useState<string[]>([]);

  const interests = [
    "Artificial Intelligence",
    "Technology",
    "Startups",
    "Finance",
    "Fitness",
    "Education",
    "Travel",
  ];

  const reduceTopics = [
    "Politics",
    "Celebrity Gossip",
    "Memes",
    "Cricket",
    "Movies",
  ];

  useEffect(() => {
    loadPreferences();
  }, []);

  const loadPreferences = () => {
    const savedInterests =
      localStorage.getItem("interests");

    const savedBlocked =
      localStorage.getItem("blockedTopics");

    if (savedInterests) {
      setSelected(JSON.parse(savedInterests));
    }

    if (savedBlocked) {
      setBlocked(JSON.parse(savedBlocked));
    }
  };

  const toggleInterest = (item: string) => {
    if (selected.includes(item)) {
      setSelected(
        selected.filter((i) => i !== item)
      );
    } else {
      setSelected([...selected, item]);
    }
  };

  const toggleBlockedTopic = (item: string) => {
    if (blocked.includes(item)) {
      setBlocked(
        blocked.filter((i) => i !== item)
      );
    } else {
      setBlocked([...blocked, item]);
    }
  };

  const savePreferences = () => {
    localStorage.setItem(
      "interests",
      JSON.stringify(selected)
    );

    localStorage.setItem(
      "blockedTopics",
      JSON.stringify(blocked)
    );

    console.log("Saved Interests:", selected);
    console.log("Blocked Topics:", blocked);

    router.push("/analytics");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Choose Your Interests
      </Text>

      <Text style={styles.sectionTitle}>
        📈 See More Of
      </Text>

      {interests.map((item) => (
        <TouchableOpacity
          key={item}
          style={[
            styles.tag,
            selected.includes(item) &&
              styles.selectedTag,
          ]}
          onPress={() => toggleInterest(item)}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>
        📉 See Less Of
      </Text>

      {reduceTopics.map((item) => (
        <TouchableOpacity
          key={item}
          style={[
            styles.tag,
            blocked.includes(item) &&
              styles.blockedTag,
          ]}
          onPress={() =>
            toggleBlockedTopic(item)
          }
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.button}
        onPress={savePreferences}
      >
        <Text style={styles.buttonText}>
          Save Preferences
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },

  tag: {
    backgroundColor: "#E0F2FE",
    padding: 15,
    borderRadius: 10,
    marginVertical: 6,
  },

  selectedTag: {
    backgroundColor: "#60A5FA",
  },

  blockedTag: {
    backgroundColor: "#FCA5A5",
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 30,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});