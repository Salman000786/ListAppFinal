import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import navigationStrings from '../constants/navigationStrings';
import imagePath from '../constants/imagePath';
import {connect} from 'react-redux';
import color from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import strings from '../constants/lang';
function DrawerContent(props) {
  const {navigation, themeColor} = props;
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.draweImageCon}>
              <Image
                source={imagePath.accProfile}
                style={styles.draweProfileImage}
              />
              <View style={styles.drawerProfileName}>
                <Title style={styles.title}>Mohd Salman</Title>
                <Caption style={styles.caption}>Salman@gmail.com</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label={strings.DRAWER_CHARTS_LABEL}
              onPress={() => {
                navigation.navigate(navigationStrings.HOME);
              }}
            />
            <DrawerItem
              label={strings.DRAWER_ZOOMIMAGE_LABEL}
              onPress={() => {
                navigation.navigate(navigationStrings.ZOOM_IMAGE);
              }}
            />
            <DrawerItem
              label={strings.DRAWER_QRCODE_LABEL}
              onPress={() => {
                navigation.navigate(navigationStrings.QR_CODE);
              }}
            />
            <DrawerItem
              label={strings.DRAWER_CHAT_LABEL}
              onPress={() => {
                navigation.navigate(navigationStrings.MESSAGE_SCREEN);
              }}
            />
            <DrawerItem
              label={strings.DRAWER_GOTOTAB_LABEL}
              onPress={() => {
                navigation.navigate(navigationStrings.TAB_ROUTES);
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
const mapStateToProps = state => {
  return {
    // themeColor: state.auth.themeColor,
    themeColor: state.main.themeColor,
  };
};
export default connect(mapStateToProps)(DrawerContent);
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    //   color:'#fff',
    fontFamily: fontFamily.bold,
  },
  caption: {
    fontSize: 14,
    //   color:'#fff',
    fontFamily: fontFamily.bold,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontFamily: fontFamily.bold,
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  draweImageCon: {flexDirection: 'row', marginTop: 15},
  drawerProfileName: {marginLeft: 10, flexDirection: 'column'},
  draweProfileImage: {width: 60, height: 60, borderRadius: 50},
});
