import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
export default StyleSheet.create({
  privecyPolicyTextCon: {alignItems: 'center', marginVertical: 250},
  loginProfileImageTextCon: {marginVertical: 25, marginRight: 80},
  container: {
    height: '84%',
    backgroundColor: colors.whiteColor,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 40,
  },
  input: {
    marginHorizontal: 20,
  },
  withEmailText: {
      ...commonStyles.mediumFont16,
    marginHorizontal: 20,
    marginVertical: 7,
    color: colors.whiteColor,
  },
  socialIcon: {
    width: 30,
    height: 30,
    marginVertical: 6,
    marginHorizontal: 10,
  },

  socialText: {
    ...commonStyles.mediumFont16,
    marginHorizontal: 6,
    marginVertical: 8,
    color: colors.whiteColor,
  },
  loginView: {height: '20%'},
  loginInnerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  loginFileAvtar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.whiteColor,
    marginVertical: 20,
  },
  welcomeText: {
    // ...commonStyles.mediumFont16,
    fontSize: 20,
    fontFamily: fontFamily.bold,
    color: colors.whiteColor,
  },
  loginToContinueText: {
    ...commonStyles.mediumFont16,
    fontSize: 18,
    marginVertical: 8,
    color: colors.whiteColor,
  },
  emailCon: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 8,
    height: 45,
  },
  emailImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginHorizontal: 10,
    marginVertical: 3,
  },
  socialCon: {
    flexDirection: 'row',
    marginHorizontal: 40,
    justifyContent: 'space-around',
  },
  socialBtn: {
    flexDirection: 'row',
    width: 150,
    borderRadius: 8,
    height: 45,
    marginHorizontal: 10,
  },
});
