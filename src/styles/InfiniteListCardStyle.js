import {StyleSheet} from 'react-native';
import colors from './colors';
import commonStyles from './commonStyles';
import fontFamily from './fontFamily';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
// import colors from '../../styles/colors';
// import commonStyles from '../../styles/commonStyles';
// import fontFamily from '../../styles/fontFamily';
export default StyleSheet.create({

    mainContainer: {
        // flex: 1,
        height: 400,
        // borderRadius: 1,
        borderWidth: 0.1,
        shadowColor: colors.darkGreyColor,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
    
        elevation: 1,
        marginHorizontal: moderateScaleVertical(10),
        paddingVertical: moderateScaleVertical(10),
      },
      profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
      },
      nameContainer: {
        marginVertical: moderateScaleVertical(10),
        marginLeft: '30%',
        marginRight: '18%',
      },
      name: {
        marginTop: 2,
        fontFamily:fontFamily.bold,
        color: colors.name,
        fontSize: 15,
      },
      profileName: {
        borderWidth: 1,
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(5),
        borderRadius: 50,
      },
      locationImage:
      {
        
          width: 30,
          height: 30,
          // ,
        
      },city:
      {
       
          fontFamily: fontFamily.bold,
          marginVertical: 6,
          marginHorizontal: 5,
          color:colors.greyTextColor,
       
      },
      boi:
      {
        fontFamily: fontFamily.bold,
        color:colors.greyTextColor,
        textAlign: 'center',
      },
      line:
      {
        width: 100,
        height: 1,
        marginHorizontal: moderateScale(135),
        
        marginVertical: 5,
      },
      ViewProfile:
      {
        position: 'absolute',
        bottom: 10,
        left: 120,
        
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(20),
        borderRadius: 50,
        shadowColor:colors.darkGreyColor,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 2,
      },
      availableView:
      {
        borderWidth: 1,
        height: 35,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 50,
        shadowColor:colors.darkGreyColor ,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 2,
      },numberPlusTwo:
      {
        borderWidth: 1,
        
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(5),
        borderRadius: 50,
        shadowColor: colors.darkGreyColor,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 2,
      },
      numberPlusTwoText:
      {fontFamily:fontFamily.semiBold, color:colors.whiteColor},
      desktopText:
      {fontFamily: fontFamily.semiBold, color:colors.darkGreyColor},
      desktopView:
      {
        borderWidth: 1,
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(5),
        borderRadius: 50,
        
      },
      iosText:
      {fontFamily: fontFamily.semiBold, color:colors.darkGreyColor},
      iosView:
      {
        borderWidth: 1,
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(5),
        borderRadius: 50,
      },
      androidText:
      {fontFamily: fontFamily.semiBold, color:colors.darkGreyColor},
      androidView:
      {
        borderWidth: 1,
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(5),
        borderRadius: 50,
       
      },
      availableText:
      {fontFamily:fontFamily.bold, color:colors.whiteColor},
      emailText:
      {fontFamily: fontFamily.semiBold, color:colors.darkGreyColor,},
      profileText:
      {fontFamily: fontFamily.semiBold, color:colors.darkGreyColor},
      locationCon:
      {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
      },locationImageView:
      {marginVertical: 8, flexDirection: 'row'}
})