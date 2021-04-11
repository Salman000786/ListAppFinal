import React ,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from "./MainStack"
import { connect } from 'react-redux';
import DrawerRoutes from './DrawerRoutes';
import { navigationRef } from './NavigationService';
const Stack = createStackNavigator();
function Routes(props){
  const{userData} =props
    return(
        <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>

        {!!userData.accessToken?<>{MainStack()}</>:<>{AuthStack()}</>}
      </Stack.Navigator>
      </NavigationContainer>
    )
}
const mapStateToProps=state=>{
  return {
      userData:state.auth.userData,
  }
}
export default connect(mapStateToProps)(Routes);