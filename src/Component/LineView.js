import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import strings from '../constants/lang';
import colors from '../styles/colors';
function LineView(props) {
  let {themeColor} = props;

  return (
    <View
      style={styles.LineViewOuterCon}>
      <View
        style={[styles.LineViewInnerCon,{backgroundColor: !!themeColor ? themeColor : colors.themeColor,}]}></View>
      <Text style={{color: !!themeColor ? themeColor : colors.themeColor}}>
      {strings.OR}
      </Text>
      <View
        style={[styles.LineViewInnerCon,{backgroundColor: !!themeColor ? themeColor : colors.themeColor,}]}></View>
    </View>
  );
}
const mapStateToProps = state => {
  return {
    // themeColor: state.auth.themeColor,
    themeColor: state.main.themeColor,
  };
};

export default connect(mapStateToProps)(LineView);
const styles = StyleSheet.create({
  firstLine: {
    width: 130,
    height: 0.5,
    marginVertical: 10,
  },LineViewOuterCon:
  {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 30,
  },LineViewInnerCon:
  {
    width: 130,
    height: 0.5,
    marginVertical: 10,
  }
});
