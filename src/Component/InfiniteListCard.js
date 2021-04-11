import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {connect} from 'react-redux';
import imagePath from '../constants/imagePath';
import strings from '../constants/lang';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import InfiniteListCardStyle from '../styles/InfiniteListCardStyle';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
function InfiniteListCard({data, themeColor}) {
  return (
    // <ScrollView>
    <View style={InfiniteListCardStyle.mainContainer}>
      <View>
        <View>
          <View
            style={InfiniteListCardStyle.locationCon}>
            <View style={InfiniteListCardStyle.locationImageView}>
              <Image
                source={imagePath.location}
                style={[InfiniteListCardStyle.locationImage,{tintColor:!!themeColor ? themeColor : colors.themeColor}]}
                // style={{}}
              />
              <Text
                style={InfiniteListCardStyle.city}>
                {data.addressDetails.city}
              </Text>
            </View>
            <View
              style={[InfiniteListCardStyle.availableView,{ backgroundColor: !!themeColor ? themeColor : colors.themeColor},{borderColor: !!themeColor ? themeColor : colors.themeColor,}]}>
              <Text style={InfiniteListCardStyle.availableText}>
                {strings.AVAILABLE}
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: moderateScale(130)}}>
          <Image
            source={{uri: data.profileImg[1].original}}
            style={InfiniteListCardStyle.profileImage}
          />
        </View>
        <View style={InfiniteListCardStyle.nameContainer}>
          <Text style={InfiniteListCardStyle.name}>Name : {data.fullName}</Text>
          <Text style={InfiniteListCardStyle.emailText} numberOfLines={1}>
            Email : {data.email}
          </Text>
          <Text style={InfiniteListCardStyle.profileText}>
            Profile : Software Developer
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View
            style={[InfiniteListCardStyle.androidView,{ borderColor: !!themeColor ? themeColor : colors.themeColor,}]}>
            <Text style={InfiniteListCardStyle.androidText}>Android</Text>
          </View>
          <View
            style={[InfiniteListCardStyle.iosView,{ borderColor: !!themeColor ? themeColor : colors.themeColor,}]}>
            <Text style={InfiniteListCardStyle.iosText}>IOS</Text>
          </View>
          <View
            style={[InfiniteListCardStyle.desktopView,{borderColor: !!themeColor ? themeColor : colors.themeColor,}]}>
            <Text style={InfiniteListCardStyle.desktopText}>Desktop</Text>
          </View>
          <View
            style={[InfiniteListCardStyle.numberPlusTwo,,{borderColor: !!themeColor ? themeColor : colors.themeColor,},{backgroundColor: !!themeColor ? themeColor : colors.themeColor,}]}>
            <Text style={InfiniteListCardStyle.numberPlusTwoText}>
              +2
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginHorizontal: moderateScaleVertical(30),
            marginVertical: moderateScale(10),
          }}>
          <Text
            numberOfLines={1}
            style={InfiniteListCardStyle.bio}>
            Description: {data.bio}
          </Text>
        </View>
        <View
          style={[InfiniteListCardStyle.line,{backgroundColor: !!themeColor ? themeColor : colors.themeColor,}]}></View>
      </View>
      <View
        style={[InfiniteListCardStyle.ViewProfile,{backgroundColor: !!themeColor ? themeColor : colors.themeColor,}]}>
        <TouchableOpacity>
          <Text style={{fontFamily:fontFamily.semiBold, color:colors.whiteColor}}>
            {strings.VIWE_PROFILE}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
   
  );
}
const mapStateToProps = state => {
  return {
    // themeColor: state.auth.themeColor,
    themeColor: state.main.themeColor,
  };
};
export default connect(mapStateToProps)(InfiniteListCard);
// const styles = StyleSheet.create({
//   mainContainer: {
//     // flex: 1,
//     height: 400,
//     // borderRadius: 1,
//     borderWidth: 0.1,
//     shadowColor: colors.darkGreyColor,
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.18,
//     shadowRadius: 1.0,

//     elevation: 1,
//     marginHorizontal: moderateScaleVertical(10),
//     paddingVertical: moderateScaleVertical(10),
//   },
//   profileImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//   },
//   nameContainer: {
//     marginVertical: moderateScaleVertical(10),
//     marginLeft: '30%',
//     marginRight: '18%',
//   },
//   name: {
//     marginTop: 2,
//     fontFamily:fontFamily.bold,
//     color: colors.name,
//     fontSize: 15,
//   },
//   profileName: {
//     borderWidth: 1,
//     paddingHorizontal: moderateScale(15),
//     paddingVertical: moderateScale(5),
//     borderRadius: 50,
//   },
//   locationImage:
//   {
    
//       width: 30,
//       height: 30,
//       // ,
    
//   },city:
//   {
   
//       fontFamily: fontFamily.bold,
//       marginVertical: 6,
//       marginHorizontal: 5,
//       color:colors.greyTextColor,
   
//   },
//   boi:
//   {
//     fontFamily: fontFamily.bold,
//     color:colors.greyTextColor,
//     textAlign: 'center',
//   },
//   line:
//   {
//     width: 100,
//     height: 1,
//     marginHorizontal: moderateScale(135),
    
//     marginVertical: 5,
//   },
//   ViewProfile:
//   {
//     position: 'absolute',
//     bottom: 10,
//     left: 120,
    
//     paddingVertical: moderateScale(10),
//     paddingHorizontal: moderateScale(20),
//     borderRadius: 50,
//     shadowColor:colors.darkGreyColor,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,

//     elevation: 2,
//   },
//   availableView:
//   {
//     borderWidth: 1,
//     height: 35,
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     borderRadius: 50,
//     shadowColor:colors.darkGreyColor ,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,

//     elevation: 2,
//   },numberPlusTwo:
//   {
//     borderWidth: 1,
    
//     paddingHorizontal: moderateScale(15),
//     paddingVertical: moderateScale(5),
//     borderRadius: 50,
//     shadowColor: colors.darkGreyColor,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,

//     elevation: 2,
//   },
//   numberPlusTwoText:
//   {fontFamily:fontFamily.semiBold, color:colors.whiteColor},
//   desktopText:
//   {fontFamily: fontFamily.semiBold, color:colors.darkGreyColor},
//   desktopView:
//   {
//     borderWidth: 1,
//     paddingHorizontal: moderateScale(15),
//     paddingVertical: moderateScale(5),
//     borderRadius: 50,
    
//   },
//   iosText:
//   {fontFamily: fontFamily.semiBold, color:colors.darkGreyColor},
//   iosView:
//   {
//     borderWidth: 1,
//     paddingHorizontal: moderateScale(15),
//     paddingVertical: moderateScale(5),
//     borderRadius: 50,
//   },
//   androidText:
//   {fontFamily: fontFamily.semiBold, color:colors.darkGreyColor},
//   androidView:
//   {
//     borderWidth: 1,
//     paddingHorizontal: moderateScale(15),
//     paddingVertical: moderateScale(5),
//     borderRadius: 50,
   
//   },
//   availableText:
//   {fontFamily:fontFamily.bold, color:colors.whiteColor},
//   emailText:
//   {fontFamily: fontFamily.semiBold, color:colors.darkGreyColor,},
//   profileText:
//   {fontFamily: fontFamily.semiBold, color:colors.darkGreyColor},
//   locationCon:
//   {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginHorizontal: 10,
//   },locationImageView:
//   {marginVertical: 8, flexDirection: 'row'}
// });
