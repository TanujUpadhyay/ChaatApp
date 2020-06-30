import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// my screens
import SigninScreen from "../screens/SigninScreen";
import AddGroupScreen from "../screens/AddGroupScreen";
import ChatScreen from "../screens/ChatScreen";
import GroupScreen from "../screens/GroupScreen";


const Stack = createStackNavigator()

const ChatFlow = ()=>{
    return(
        <NavigationContainer>

            <Stack.Navigator name="chat">
                <Stack.Screen 
                        name="SiginScreen" 
                        component={SigninScreen} 
                        options={{headerShown=false}} />

                <Stack.Screen 
                        name="Group Screen" 
                        component={GroupScreen} 
                        options={{title="Groups"}} />
                
                <Stack.Screen 
                        name="Add Group Screen" 
                        component={AddGroupScreen} 
                        options={{title="Add Group"}} />

                <Stack.Screen 
                        name="chat Screen" 
                        component={ChatScreen} 
                        options={{title="Chats"}} />
                
        
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const MainStackNavigator = ()=>{
    return(
        ChatFlow()
    )
}

export default MainStackNavigator