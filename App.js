import React, { Component } from 'react'
import { Text, StyleSheet, Alert,View } from 'react-native'
import Routes from './src/Navigation/Routes'
import FlashMessage from "react-native-flash-message";
import SplashScreen from 'react-native-splash-screen'
import { clearUserData, getUserData } from './src/utils/utils';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import types from './src/redux/types';
const { dispatch } = store;
import {getFCMToken} from './src/utils/pushNotification'
// import {navigate} from './src/Navigation/NavigationService';
// import navigationStrings from './src/constants/navigationStrings';
// import socketServices from './src/utils/socketService';
export default class App extends Component {
  componentDidMount() {
    
    getFCMToken()
    getUserData().then((userData) => {
      if (userData) {
        dispatch({
          type: types.OTP_VERIFY,
          payload: userData 
        })
      }

      SplashScreen.hide();
      
     
    })
  }

  render() {
    return (
      <Provider store={store }>
      <Routes/>
      <FlashMessage position="top" />
</Provider>
    )
  }
} 


const styles = StyleSheet.create({})
