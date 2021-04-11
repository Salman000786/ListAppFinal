import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import ChatCard from '../../Component/ChatCard';
import Header from '../../Component/Header';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
export default class MessageScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiData:[]
    };
  }
  sendToChatScreen = obj => {
    const {navigation} = this.props;
    navigation.navigate(navigationStrings.CHAT_SCREEN, {obj});
  };
  onOpenDrawer = () => {
    const {navigation} = this.props;
    navigation.openDrawer();

    // alert()
  };
  componentDidMount() {
      let {apiData}=this.state
    actions
      .chatApi()
      .then(res => {
          this.setState({
            apiData:[...apiData,...res.data]})
      }) 
      .catch(err => {
        
        console.log(err, 'this is error');
      });

  }
  render() {
    const {data,apiData} = this.state;
    return (
      <View>
        <Header textData={strings.MESSAGE} onClickMenuIcon={this.onOpenDrawer} />
        <FlatList
          data={apiData}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item._id}
          ItemSeparatorComponent={() => <View style={{marginVertical: 5}} />}
          renderItem={({item}) => (
            <ChatCard data={item} sendToChatScreen={this.sendToChatScreen} />
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  profileImage: {
    marginLeft: 10,
    marginVertical: 10,
  },
  ChatCard: {
    flexDirection: 'row',
  },
  unselect: {
  },
});
