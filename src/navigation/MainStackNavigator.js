import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// my screens
import SigninScreen from "../screens/SigninScreen";
import AddGroupScreen from "../screens/AddGroupScreen";
import ChatScreen from "../screens/ChatScreen";
import GroupScreen from "../screens/GroupScreen";
import Color from "../util/Colors";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();

const ChatFlow = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Color.theme,
          },
          headerTintColor: Color.white,
        }}
      >
        <Stack.Screen
          name="SiginScreen"
          component={SigninScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Group Screen"
          component={GroupScreen}
          options={{ title: "Groups" }}
        />

        <Stack.Screen
          name="Add Group Screen"
          component={AddGroupScreen}
          options={{ title: "Add Group" }}
        />

        <Stack.Screen
          name="chat Screen"
          component={ChatScreen}
          options={{ title: "Chats" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainStackNavigator = () => {
  return ChatFlow();
};

export default MainStackNavigator;
