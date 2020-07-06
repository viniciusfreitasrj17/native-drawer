import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./src/pages/Home";
import Contato from "./src/pages/Contato";
import CustomDrawer from "./src/components/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={CustomDrawer}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Contato" component={Contato} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
