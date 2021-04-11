import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import {moderateScale,moderateScaleVertical} from '../../styles/responsiveSize';
export default StyleSheet.create({
  profileDetailsIcons: {width: 30, height: 30},
  followerMe: {
    width: '40%',
  },
  changeTheme: {
    width: '40%',
  },
  innerModal: {
    borderWidth: 1,
    flex: 1,
    marginVertical: '50%',
    backgroundColor: colors.whiteColor,
  },
  followers: {
    height: 100,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.whiteColor,
    paddingVertical: moderateScale(25),
    position: 'absolute',
    bottom: -50,
    left: 48,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
    borderRadius: 10,
  },
  followersText: {
    fontFamily: fontFamily.bold,
    color: colors.greyTextColor,
  },
  profileImg: {
    borderRadius: 60,
    marginHorizontal: moderateScale(130),
  },
  socialCon: {
    flexDirection: 'row',
    marginVertical: moderateScale(10),
  },
  socilaMainCon: {
    marginTop: 70,
    paddingHorizontal: moderateScale(70),
  },
  socialText: {
    marginHorizontal: moderateScale(10),
    fontFamily: fontFamily.bold,
    color: colors.greyTextColor,
    fontSize: 15,
    marginVertical: moderateScale(5),
  },
  logout: {
    marginVertical: moderateScale(20),
  },
  profileBg: {
    height: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
    position: 'relative',
  },
  accProfile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 10,
  },
  followersContent: {
    textAlign: 'center',
    fontFamily: fontFamily.bold,
    fontSize: 17,
    marginVertical: 4,
  },
});
