import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../Component/Header';
import strings from '../../constants/lang';
import {
  AreaChart,
  StackedAreaChart,
  LineChart,
  PieChart,
  YAxis,
  BarChart,
  Grid,
} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import ImageZoom from 'react-native-image-pan-zoom';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {connect} from 'react-redux';
import colors from '../../styles/colors';
import AreaChartComponent from '../../Component/AreaChartComponent';
import imagePath from '../../constants/imagePath';
import StackedAreaChartComponent from '../../Component/StackedAreaChartComponent';
import PieChartComponent from '../../Component/PieChartComponent';
import RazorpayCheckout from 'react-native-razorpay';
// import { color } from 'react-native-reanimated'

GoogleSignin.configure();
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AreaChartData: [
        50,
        10,
        40,
        95,
        -4,
        -24,
        85,
        91,
        35,
        53,
        -53,
        24,
        50,
        -20,
        -80,
      ],
    };
  }
  onOpenDrawer = () => {
    const {navigation} = this.props;
    navigation.openDrawer();
  };
  makePayment = () => {
    const {themeColor} = this.props;
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_TRGWrHniq0aAm5', // Your api key
      amount: '5000',
      name: 'foo',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software',
      },
      theme: {color: !!themeColor ? themeColor : colors.themeColor},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  render() {
    const {themeColor} = this.props;

    const {AreaChartData} = this.state;
    return (
      <ScrollView>
        <View>
          <Header textData={strings.HOME} onClickMenuIcon={this.onOpenDrawer} />
          <View style={styles.chartsCon}>
            <AreaChartComponent AreaChartData={AreaChartData} />
            <StackedAreaChartComponent />
            <PieChartComponent />
          </View>

          <TouchableOpacity
            onPress={() => this.makePayment()}
            style={{
              alignItems: 'center',
              marginVertical: 20,
              backgroundColor: !!themeColor ? themeColor : colors.themeColor,
              padding: 10,
            }}>
            <Text>Pay Your Payment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    // themeColor: state.auth.themeColor,
    themeColor: state.main.themeColor,
  };
  
};
export default connect(mapStateToProps)(Home);
const styles = StyleSheet.create({
  chartsCon:
  {marginHorizontal: 5}
});
