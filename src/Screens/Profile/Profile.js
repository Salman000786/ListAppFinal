import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Image,
  FlatList,
} from 'react-native';
import actions from '../../redux/actions';
import ButtonWithLoader from '../../Component/ButtonWithLoader';
import Header from '../../Component/Header';
import strings from '../../constants/lang/index';
import ColorsModal from '../../Component/ColorsModal';
import imagePath from '../../constants/imagePath';
import color from '../../styles/colors';
import {connect} from 'react-redux';
import colors from '../../styles/colors';
import profileStyle from './profileStyle';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuModalVisible: false,
      selected: '',
      colors: [
        {
          id: 0,
          name: 'LightBlue',
          colorId: colors.LightBlue,
        },
        {
          id: 1,
          name: 'Alien Green',
          colorId: colors.Alien_Green,
        },
        {
          id: 2,
          name: 'Deep Peach',
          colorId: colors.Deep_Peach,
        },
        {
          id: 3,
          name: 'Fire Red',
          colorId: colors.Fire_Red,
        },
        {
          id: 4,
          name: 'Crimson',
          colorId: colors.Crimson,
        },
        {
          id: 5,
          name: 'Iridium',
          colorId: colors.Iridium,
        },
        {
          id: 6,
          name: 'Royal Blue',
          colorId: colors.Royal_Blue,
        },
        {
          id: 7,
          name: 'Cyan or Aqua',
          colorId: colors.Cyan_or_Aqua,
        },
      ],
      followers: 151,
    };
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }
  _onSelect = id => {
    this.setState({selected: id});
  };

  _openModal = () => {
    this.setState({isMenuModalVisible: true});
  };

  _closeModal = () => {
    this.setState({isMenuModalVisible: false});
  };
  onOpenDrawer = () => {
    const {navigation} = this.props;
    navigation.openDrawer();
  };
  render() {
    const {isMenuModalVisible, followers, colors, selected} = this.state;
    const {themeColor} = this.props;
    return (
      <View style={{flex: 1}}>
        <Header
          textData={strings.PROFILE}
          onClickMenuIcon={this.onOpenDrawer}
        />
        <View
          style={[
            profileStyle.profileBg,
            {backgroundColor: !!themeColor ? themeColor : color.themeColor},
          ]}>
          <View style={profileStyle.profileImg}>
            <Image
              source={imagePath.accProfile}
              style={profileStyle.accProfile}
            />
          </View>
          <View style={profileStyle.followers}>
            <View>
              <Text style={profileStyle.followersText}>{strings.PHOTOS}</Text>
              <Text
                style={[
                  profileStyle.followersContent,
                  {color: !!themeColor ? themeColor : color.themeColor},
                ]}>
                111
              </Text>
            </View>
            <View>
              <Text style={profileStyle.followersText}>
                {strings.FOLLOWERS}
              </Text>
              <Text
                style={[
                  profileStyle.followersContent,
                  {color: !!themeColor ? themeColor : color.themeColor},
                ]}>
                {followers}
              </Text>
            </View>
            <View>
              <Text style={profileStyle.followersText}>
                {strings.FOLLOWING}
              </Text>
              <Text
                style={[
                  profileStyle.followersContent,
                  {color: !!themeColor ? themeColor : color.themeColor},
                ]}>
                291
              </Text>
            </View>
          </View>
        </View>
        <View style={profileStyle.socilaMainCon}>
          <View style={profileStyle.socialCon}>
            <Image
              source={imagePath.email1}
              style={[
                profileStyle.profileDetailsIcons,
                {tintColor: !!themeColor ? themeColor : color.themeColor},
              ]}
            />
            <Text style={profileStyle.socialText}>Salmangaur48@gmail.com</Text>
          </View>
          <View style={profileStyle.socialCon}>
            <Image
              source={imagePath.mobile}
              style={[
                profileStyle.profileDetailsIcons,
                {tintColor: !!themeColor ? themeColor : color.themeColor},
              ]}
            />
            <Text style={profileStyle.socialText}>+918791731089</Text>
          </View>
          <View style={profileStyle.socialCon}>
            <Image
              source={imagePath.addUser}
              style={[
                profileStyle.profileDetailsIcons,
                {tintColor: !!themeColor ? themeColor : color.themeColor},
              ]}
            />
            <Text style={profileStyle.socialText}>{strings.ADD_GROUP}</Text>
          </View>
          <View style={profileStyle.socialCon}>
            <Image
              source={imagePath.message}
              style={[
                profileStyle.profileDetailsIcons,
                {tintColor: !!themeColor ? themeColor : color.themeColor},
              ]}
            />
            <Text style={profileStyle.socialText}>
              {strings.SHOW_ALL_COMMENTS}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 25,
          }}>
          <View style={profileStyle.changeTheme}>
            <ButtonWithLoader
              buttonText={strings.CHANGE_THEME}
              onButtonCLick={() => this._openModal()}
            />
          </View>
          <View style={profileStyle.followerMe}>
            <ButtonWithLoader buttonText={strings.FOLLOW_ME} />
          </View>
        </View>
        <View style={profileStyle.logout}>
          <ButtonWithLoader
            buttonText={strings.LOG_OUT}
            onButtonCLick={() => actions.onLogout()}
          />
        </View>
        <Modal
          transparent
          onRequestClose={() => this._closeModal()}
          visible={isMenuModalVisible}>
          <View style={{flex: 1, backgroundColor: color.modalColorRgba}}>
            <View style={profileStyle.innerModal}>
              <FlatList
                data={colors}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <ColorsModal
                    data={item}
                    onSelect={this._onSelect}
                    selected={selected}
                  />
                )}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    themeColor: state.main.themeColor,
  };
};
export default connect(mapStateToProps)(Profile);
const styles = StyleSheet.create({
  // profileDetailsIcons: {width: 30, height: 30},
  // followerMe: {
  //   width: '40%',
  // },
  // changeTheme: {
  //   width: '40%',
  // },
  // innerModal: {
  //   borderWidth: 1,
  //   flex: 1,
  //   marginVertical: '50%',
  //   backgroundColor: colors.whiteColor,
  // },
  // followers: {
  //   height: 100,
  //   width: 300,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   backgroundColor: colors.whiteColor,
  //   paddingVertical: moderateScale(25),
  //   position: 'absolute',
  //   bottom: -50,
  //   left: 48,
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,

  //   elevation: 2,
  //   borderRadius: 10,
  // },
  // followersText: {
  //   fontFamily: fontFamily.bold,
  //   color: colors.greyTextColor,
  // },
  // profileImg: {
  //   borderRadius: 60,
  //   marginHorizontal: moderateScale(130),
  // },
  // socialCon: {
  //   flexDirection: 'row',
  //   marginVertical: moderateScale(10),
  // },
  // socilaMainCon: {
  //   marginTop: 70,
  //   paddingHorizontal: moderateScale(70),
  // },
  // socialText: {
  //   marginHorizontal: moderateScale(10),
  //   fontFamily: fontFamily.bold,
  //   color: colors.greyTextColor,
  //   fontSize: 15,
  //   marginVertical: moderateScale(5),
  // },
  // logout: {
  //   marginVertical: moderateScale(20),
  // },
  // profileBg: {
  //   height: 200,
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,

  //   elevation: 2,
  //   position: 'relative',
  // },
  // accProfile: {
  //   width: 120,
  //   height: 120,
  //   borderRadius: 60,
  //   marginVertical: 10,
  // },
  // followersContent: {
  //   textAlign: 'center',
  //   fontFamily: fontFamily.bold,
  //   fontSize: 17,
  //   marginVertical: 4,
  // },
});
