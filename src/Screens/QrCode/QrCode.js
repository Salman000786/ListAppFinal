import React, {Component} from 'react';
import {
  Text,
  View,
  AppRegistryStyleSheet,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Image,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Header from '../../Component/Header';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import * as Animatable from 'react-native-animatable';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../styles/fontFamily';
export default class QrCode extends Component {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
    this.setState({isScan: false});
  };
  constructor(props) {
    super(props);

    this.state = {
      isScan: false,
    };
  }
  onOpenDrawer = () => {
    const {navigation} = this.props;
    navigation.openDrawer();
  };
  _openScan = () => {
    const {isScan} = this.state;
    if (isScan) {
      this.setState({isScan: false});
    } else {
      this.setState({isScan: true});
    }
  };
  render() {
    const {isScan} = this.state;
    return (
      <View style={{flex: 1}}>
        <Header textData={'Qr Code'} onClickMenuIcon={this.onOpenDrawer} />
        <View style={{alignItems: 'center', marginVertical: 20}}>
          <QRCode value="https://www.google.com/" />
        </View>
        <TouchableOpacity
          onPress={() => this._openScan()}
          style={{
            position: 'absolute',
            bottom: 0,
          }}>
          <View style={{marginHorizontal:25}}>
            <View>
              <Image
                source={imagePath.scanner}
                style={{width: 50, height: 50, marginHorizontal: 150}}
              />
            </View>
            <Text
              style={styles.qrText1}>
              {!!isScan ? 'Close Scanner' : 'Open Scanner'}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={{}}>
          {this.state.isScan && (
            <QRCodeScanner
              onRead={this.onSuccess}
              flashMode={RNCamera.Constants.FlashMode.auto}
            />
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  qrText1:
  {
    fontSize: 20,
    fontFamily: fontFamily.bold,
    textAlign: 'center',
  }
});
