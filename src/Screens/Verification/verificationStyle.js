import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'
export default StyleSheet.create({
    sentCode: {
        textAlign: 'center',
        fontSize: 20,
      },
      phone: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 5,
      },
      footer1: {
        textAlign: 'center',
        marginVertical: 50,
      },
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
      },
    
      textInputContainer: {
        marginBottom: 20,
      },
      roundedTextInput: {
        borderRadius: 10,
        borderWidth: 1.5,
      },
      verifyOtpText: {
        fontSize: 17,
        fontFamily: fontFamily.ragular,
        marginVertical: 10,
      },
      number: {
        fontFamily: fontFamily.bold,
        fontSize: 18,
      },
      otpInput: {
        borderWidth: 1,
        width: 45,
        height: 45,
        textAlign: 'center',
        marginHorizontal: 8,
        borderRadius: 5,
      },
    
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        fontSize: 22,
        // fontWeight: '500',
        textAlign: 'center',
        color: colors.darkGreyColor,
        marginBottom: 20,
      },
      textInputContainer: {
        marginBottom: 20,
      },
      roundedTextInput: {
        borderRadius: 10,
        borderWidth: 4,
      },
      buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        width: '60%',
      },
      textInput: {
        height: 40,
        width: '80%',
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        letterSpacing: 5,
        marginBottom: 10,
        textAlign: 'center',
      },
      buttonStyle: {
        marginHorizontal: 20,
      },
      resendCode:
      {
        // color: '#2490c9',
        fontFamily:fontFamily.bold,
        marginHorizontal: 5,
      }
})