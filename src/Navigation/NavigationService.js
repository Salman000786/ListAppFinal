import {NavigationActions, StackActions} from '@react-navigation/native';
import React from 'react';
import navigationStrings from '../constants/navigationStrings';
export const navigationRef=React.createRef()
export const navigate=(routeName, params)=> {
	navigationRef.current?.navigate(routeName, params);
}
function goBack() {
	_navigator.dispatch(NavigationActions.back());
}
function resetNavigation(routeName = 'loginScreen') {
	const resetAction = StackActions.reset({
		index: 0,
		actions: [NavigationActions.navigate({routeName})],
	});
	_navigator.dispatch(resetAction);
}
export default {
	resetNavigation,
	goBack,
};
