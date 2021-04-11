import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import TextInputComponent from '../../Component/TextInputComponent';
import ButtonWithLoader from '../../Component/ButtonWithLoader';
import {showMessage, hideMessage} from 'react-native-flash-message';
import validations from '../../utils/validations';
import actions from '../../redux/actions';
import imagePath from '../../constants/imagePath';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import colors from '../../styles/colors';
import Header from '../../Component/Header';
import LineView from '../../Component/LineView';
import strings from '../../constants/lang';
import fontFamily from '../../styles/fontFamily';
import loginStyle from './loginStyle';
// import strings from '../../constants/lang/index';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',

      isvalid: '',
    };
  }

  setNumber = text => {
    this.setState({
      phoneNumber: text,
    });
  };

  isValidate = () => {
    const {phoneNumber} = this.state;

    let errorMessage = validations({phoneNumber: phoneNumber});
    // alert()
    this.setState({
      isvalid: true,
    });
    if (errorMessage) {
      this.setState({isvalid: false});
      showMessage({
        message: errorMessage,
        icon: 'warning',
        type: 'danger',
      });
      return false;
    }

    return true;
  };

  checkData = () => {
    const {phoneNumber} = this.state;

    if (this.isValidate()) {
      actions
        .loginWithOTP({
          contactDetails: {
            phoneNo: phoneNumber,
            countryCode: '+91',
            countryCodeISO: 'IN',
          },
        })
        .then(response => {
          this.setState({isvalid: false});
          this.props.navigation.navigate('Verification', {
            userId: response.data.userId,
            phoneNumber: phoneNumber,
          });
          showMessage({
            type: 'success',
            message: 'OTP sent successfully ',
          });
        })
        .catch(error => {
          this.setState({isvalid: false}),
            showMessage({
              type: 'danger',
              message: 'Login failed ',
            });

          console.log(error);
        });
    }
  };

  render() {
    const {themeColor} = this.props;
    const {isvalid} = this.state;
    return (
      <KeyboardAwareScrollView>
        <View style={{flex: 1}}>
          {/* <Header textData={'LOGIN'} isLoginPage={true}/> */}
          <View
            style={[
              loginStyle.loginView,
              {backgroundColor: !!themeColor ? themeColor : colors.themeColor},
            ]}>
            <View style={loginStyle.loginInnerView}>
              <Image source={imagePath.avtar} style={loginStyle.loginFileAvtar} />
              <View style={loginStyle.loginProfileImageTextCon}>
                <Text style={loginStyle.welcomeText}>{strings.WELCOME_BACK}</Text>
                <Text style={loginStyle.loginToContinueText}>
                  {strings.LOGIN_TO_CONTINUE}
                </Text>
              </View>
            </View>
          </View>
          <View style={loginStyle.container}>
            <View style={loginStyle.input}>
              <TextInputComponent
                placeholder={strings.ENTER_PHONE_NUMBER}
                keyboardType={'numeric'}
                onChangeText={this.setNumber}
              />
            </View>
            <View style={{marginHorizontal: 30}}>
              <ButtonWithLoader
                buttonText={strings.SEND_OTP}
                onButtonCLick={() => this.checkData()}
                isvalid={isvalid}
              />
            </View>
            <View style={{marginVertical: 10}}>
              <LineView />
            </View>
            <TouchableOpacity style={[loginStyle.emailCon,{backgroundColor: !!themeColor ? themeColor : colors.themeColor}]}>
              <Image
                source={imagePath.email}
                style={[loginStyle.emailImage,{tintColor: colors.whiteColor}]}
              />
              <Text style={loginStyle.withEmailText}>{strings.LOGIN_WITH_EMAIL}</Text>
            </TouchableOpacity>
            <View
              style={loginStyle.socialCon}>
              <TouchableOpacity
                style={[loginStyle.socialBtn,{backgroundColor: !!themeColor
                  ? themeColor
                  : colors.themeColor}]}>
                <Image source={imagePath.facebook} style={loginStyle.socialIcon} />
                <Text style={loginStyle.socialText}>{strings.FACEBOOK_NAME}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[loginStyle.socialBtn,{backgroundColor: !!themeColor
                  ? themeColor
                  : colors.themeColor}]}>
                <Image source={imagePath.google} style={loginStyle.socialIcon} />
                <Text style={loginStyle.socialText}>{strings.GOOGLE}</Text>
              </TouchableOpacity>
            </View>

            <View style={loginStyle.privecyPolicyTextCon}>
              <Text style={loginStyle.policy}>{strings.BY_CONTINUE_YOU_AGREE_TO_OUR}</Text>
              <Text style={loginStyle.policy}>
                {strings.POLICY}
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    themeColor: state.main.themeColor,
  };
};

export default connect(mapStateToProps)(Login);

// const styles = StyleSheet.create({
//   privecyPolicyTextCon:
//   {alignItems: 'center', marginVertical: 250},
//   loginProfileImageTextCon:
//   {marginVertical: 25, marginRight: 80},
//   container: {
//     height: '84%',
//     backgroundColor: colors.whiteColor,
//     marginTop: -20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     paddingVertical: 40,
//   },
//   input: {
//     marginHorizontal: 20,
//   },
//   withEmailText: {
//     marginHorizontal: 20,
//     marginVertical: 7,
//     fontSize: 17,
//     color: colors.whiteColor,
//   },
//   socialIcon: {
//     width: 30,
//     height: 30,
//     marginVertical: 6,
//     marginHorizontal: 10,
//   },

//   socialText: {
//     marginHorizontal: 6,
//     marginVertical: 8,
//     fontSize: 17,
//     color: colors.whiteColor,
//   },
//   loginView: {height: '20%'},
//   // loginInnerView: {
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between',
//   //   paddingHorizontal: 20,
//   //   marginTop:30
//   // },
//   loginFileAvtar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: colors.whiteColor,
//     marginVertical: 20,
//   },
//   welcomeText: {
//     fontSize: 20,
//     fontFamily:fontFamily.bold,
//     color: colors.whiteColor,
//   },
//   loginToContinueText: {
//     fontSize: 18,
//     marginVertical: 8,
//     color: colors.whiteColor,
//   },
//   emailCon:
//   {
//     flexDirection: 'row',
//     marginHorizontal: 40,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     paddingVertical: 2,
//     borderRadius: 8,
//     height: 45,
//   },emailImage:
//   {
//     width: 35,
//     height: 35,
//     resizeMode: 'contain',
//     marginHorizontal: 10,
//     marginVertical: 3,
//   },
//   socialCon:
//   {
//     flexDirection: 'row',
//     marginHorizontal: 40,
//     justifyContent: 'space-around',
//   },
//   socialBtn:
//   {
//     flexDirection: 'row',
//     width: 150,
//     borderRadius: 8,
//     height: 45,
//     marginHorizontal: 10,
//   }
// });
