import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import navigationStrings from '../constants/navigationStrings';
import {navigate} from '../Navigation/NavigationService';
const getToken = async () => {
  try {
    const token = await firebase.messaging().getToken();
    console.log("this is FCM Token ",token)
    
    if (token) return token;
  } catch (error) {
    console.log(error);
  }
};
const getFCMToken = async () => {
  try {
    const authorized = await firebase.messaging().hasPermission();
    const fcmToken = await getToken();
    
   console.log(fcmToken,'token')
    if (authorized) return fcmToken;
    await firebase.messaging().requestPermission();
    navigate(navigationStrings.HOME,'salak')
    return fcmToken;
  } catch (error) {
    console.log(error,'error');
  }
};

export { getFCMToken };