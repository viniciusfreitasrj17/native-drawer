import React from "react";
import { View, Text, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import styles from "./styles";

const CustomDrawer: React.FC<any> = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.userArea}>
        <Image source={require("../../assets/user.png")} style={styles.user} />

        <Text style={styles.nome}>Marcos Vinícius</Text>
        <Text style={styles.email}>viniciusfreitasrj17@gmail.com</Text>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Help" onPress={() => {}} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
