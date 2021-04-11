import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
import {Home,SearchPosts,ZoomImage,QrCode,MessageScreen,ChatScreen} from '../Screens/index'
import TabRoutes from './TabRoutes';
import DrawerContent from '../Component/DrawerContent';
import colors from '../styles/colors';
const Drawer=createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator drawerContentOptions={{ activeTintColor: colors.whiteColor }} drawerContent={props=><DrawerContent {...props}/>} >
          <Drawer.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} />
          <Drawer.Screen name={navigationStrings.HOME} component={Home}/>
          <Drawer.Screen name={navigationStrings.ZOOM_IMAGE} component={ZoomImage}/>
          <Drawer.Screen name={navigationStrings.QR_CODE} component={QrCode}/>
          <Drawer.Screen name={navigationStrings.MESSAGE_SCREEN} component={MessageScreen}/>
        </Drawer.Navigator>
    );
  }
