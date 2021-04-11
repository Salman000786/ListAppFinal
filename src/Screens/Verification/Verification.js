import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

import Header from '../../Component/Header';
import actions from '../../redux/actions';
import {showMessage, hideMessage} from 'react-native-flash-message';
import OTPTextView from 'react-native-otp-textinput';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import ButtonWithLoader from '../../Component/ButtonWithLoader';
import Loader from '../../Component/Loader';
import {connect} from 'react-redux';
import fontFamily from '../../styles/fontFamily';
import navigationStrings from '../../constants/navigationStrings';
import verificationStyle from './verificationStyle';
class VerificationScreen extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }
  state = {
    inputText: '',
    isvalid1: false,
    isvalid: false,
    count: 0,
    isCounter: false,
  };

  OnHitApi = () => {
    // alert()
    const {userId} = this.props.route.params;
    const {otpInput} = this.state;

    this.setState({
      isvalid: true,
    });

    actions
      .OTPVerify({userId, otp: otpInput, deviceToken: '123'})
      .then(response => {
        console.log(response, '   verify');
        this.setState({isvalid: false});
        showMessage({
          type: 'success',
          message: 'OTP verified ',
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
  };
  ResendOtp = () => {
    const {phoneNumber} = this.props.route.params;

    if (phoneNumber) {
      this.setState({isvalid1: true});
      actions
        .loginWithOTP({
          contactDetails: {
            phoneNo: phoneNumber,
            countryCode: '+91',
            countryCodeISO: 'IN',
          },
        })
        .then(response => {
          this.setState({isvalid1: false, isCounter: true});
          this.props.navigation.navigate(navigationStrings.VERIFICATION, {
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
  componentDidMount() {
    const {count} = this.state;
    this.setState({isCounter: true});
    let timeleft = 20;
    setInterval(() => {
      if (timeleft > 0) {
        this.setState({count: (timeleft -= 1)});
      } else if (timeleft === 0) {
        this.setState({isCounter: false});
      }
    }, 1000);
  }
  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };
  render() {
    let {isvalid, isvalid1, count, isCounter} = this.state;
    const {themeColor} = this.props;
    const {phoneNumber} = this.props.route.params;

    return (
      <View>
        <Header
          textData={strings.ENTER_VERIFICATION_CODE}
          onClickMenuIcon={this.goBack}
          isChatScreen={true}
        />
        <View style={{alignItems: 'center'}}>
          <Text style={verificationStyle.verifyOtpText}>
            {strings.WE_HAVE_SEND_CODE}
          </Text>
          <Text style={verificationStyle.number}>+91 {phoneNumber}</Text>
          <View style={verificationStyle.container}>
            <Text style={verificationStyle.instructions}>
            </Text>
            <OTPTextView
              ref={e => (this.input1 = e)}
              containerStyle={verificationStyle.textInputContainer}
              handleTextChange={text => this.setState({otpInput: text})}
              inputCount={5}
              keyboardType="numeric"
            />
            <View style={verificationStyle.buttonWrapper}>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontFamily:fontFamily.ragular}}>
              {strings.RECEIW_CODE}
            </Text>
            <TouchableOpacity onPress={() => this.ResendOtp()}>
              {
                <Text
                  style={[verificationStyle.resendCode,{color:!!themeColor?themeColor:colors.themeColor}]}>
                  {strings.RESEND_CODE}
                </Text>
              }
            </TouchableOpacity>
          </View>
        </View>
        <ButtonWithLoader
          buttonText={strings.VERIFY_OTP}
          onButtonCLick={() => this.OnHitApi()}
          isvalid={isvalid}
        />
        <Loader
          isvalid={isvalid1}
          LodingColor={!!themeColor ? themeColor : colors.themeColor}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    themeColor: state.main.themeColor,
  };
};

export default connect(mapStateToProps)(VerificationScreen);

// const styles = StyleSheet.create({
//   sentCode: {
//     textAlign: 'center',
//     fontSize: 20,
//   },
//   phone: {
//     textAlign: 'center',
//     fontSize: 18,
//     marginVertical: 5,
//   },
//   footer1: {
//     textAlign: 'center',
//     marginVertical: 50,
//   },
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 5,
//   },

//   textInputContainer: {
//     marginBottom: 20,
//   },
//   roundedTextInput: {
//     borderRadius: 10,
//     borderWidth: 1.5,
//   },
//   verifyOtpText: {
//     fontSize: 17,
//     fontFamily: fontFamily.ragular,
//     marginVertical: 10,
//   },
//   number: {
//     fontFamily: fontFamily.bold,
//     fontSize: 18,
//   },
//   otpInput: {
//     borderWidth: 1,
//     width: 45,
//     height: 45,
//     textAlign: 'center',
//     marginHorizontal: 8,
//     borderRadius: 5,
//   },

//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 5,
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     fontSize: 22,
//     // fontWeight: '500',
//     textAlign: 'center',
//     color: colors.darkGreyColor,
//     marginBottom: 20,
//   },
//   textInputContainer: {
//     marginBottom: 20,
//   },
//   roundedTextInput: {
//     borderRadius: 10,
//     borderWidth: 4,
//   },
//   buttonWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//     width: '60%',
//   },
//   textInput: {
//     height: 40,
//     width: '80%',
//     borderColor: '#000',
//     borderWidth: 1,
//     padding: 10,
//     fontSize: 16,
//     letterSpacing: 5,
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   buttonStyle: {
//     marginHorizontal: 20,
//   },
//   resendCode:
//   {
//     // color: '#2490c9',
//     fontFamily:fontFamily.bold,
//     marginHorizontal: 5,
//   }
// });
