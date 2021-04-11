import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import TabRoutes from "./TabRoutes";
import navigationStrings from "../constants/navigationStrings";
import DrawerRoutes from "./DrawerRoutes";
import { ChatScreen } from "../Screens";
const Stack=createStackNavigator();
export default function(){
  return(
    <>
    <Stack.Screen
      name={navigationStrings.TAB_ROUTES}
      options={{ headerShown: false }}
      component={DrawerRoutes}
    />   
    <Stack.Screen
     name={navigationStrings.CHAT_SCREEN}
     options={{ headerShown: false }}
     component={ChatScreen}>
      </Stack.Screen>   
      </>
  )
}