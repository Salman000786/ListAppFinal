import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import colors from '../styles/colors';

function TextInputComponent(props) {
  const {
    themeColor,
    placeholder,
    isShowBorder,
    onChangeText,
    secureTextEntry,
    onfocus,
    value,
    keyboardType,
  } = props;
  return (
    <TextInput
      style={[
        styles.textInputComponent,
        {borderBottomColor: !!themeColor ? themeColor : colors.themeColor},
        {borderBottomWidth: !!isShowBorder ? 1 : 2},
        {borderWidth: !!isShowBorder ? 1 : 0},
        {borderColor: !!themeColor ? themeColor : colors.themeColor},
      ]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      keyboardType={keyboardType}></TextInput>
  );
}
const mapStateToProps = state => {
  return {
    // themeColor: state.auth.themeColor,
    themeColor: state.main.themeColor,
  };
};
export default connect(mapStateToProps)(TextInputComponent);
const styles = StyleSheet.create({
  textInputComponent: {
    marginHorizontal: 10,
    paddingLeft: 20,
    fontSize: 18,
    backgroundColor: colors.textInputBg,
    borderRadius: 10,
  },
});
