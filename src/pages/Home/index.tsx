import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

export default Home;
