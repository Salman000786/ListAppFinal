import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {color} from 'react-native-reanimated';
import {connect} from 'react-redux';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
function Header({
  textData,
  onBack,
  themeColor,
  onClickMenuIcon,
  icChatPic,
  isChatScreen,
}) {
  return (
    <View style={[styles.headerMainView,{backgroundColor: !!themeColor ? themeColor : colors.themeColor,}]}>
      <TouchableOpacity onPress={() => onClickMenuIcon()}>
        {!!isChatScreen ? (
          <Image source={imagePath.backIcon} style={styles.backIcon} />
        ) : (
          <Image source={imagePath.menu} style={styles.backIcon} />
        )}
      </TouchableOpacity>
      <Text style={styles.textData}>{textData}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  backIcon: {
    width: 30,
    height: 30,
    tintColor: colors.whiteColor,
    marginVertical: moderateScaleVertical(8),
    marginHorizontal: moderateScaleVertical(15),
  },
  textData: {
    marginVertical: 8,
    fontSize: 23,
    color: colors.whiteColor,
  },
  headerMainView: {
    flexDirection: 'row',
    marginBottom: 2,
    height: 50,
  },
});
const mapStateToProps = state => {
  return {
    // themeColor: state.auth.themeColor,
    themeColor: state.main.themeColor,
  };
};
export default connect(mapStateToProps)(Header);
