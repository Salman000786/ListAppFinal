import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Header from '../../Component/Header';
import {GiftedChat, Bubble, Send} from 'react-native-gifted-chat';
import colors from '../../styles/colors';
import {connect} from 'react-redux';
import imagePath from '../../constants/imagePath';
import actions from '../../redux/actions';
import socketServices from '../../utils/socketService';
import {SOCKET_STRINGS} from '../../constants/socketString';
class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }
  componentDidMount() {
    const {obj} = this.props.route.params;
    const {userData} = this.props;

    //===================This api use for get chat many to many=============================// 
    actions
      .getUserMessgeOneToOne(obj.commonConversationId)
      .then(res => {
        const messages = res.data.map((data, index) => {
          let message = {
            _id: data._id,
            text: data.text,
            createdAt: data.createdAt,
            user: {
              _id: data.senderId._id,
              name: data.senderId.firstName,
              avatar: obj.userInfo.profileImg[0].original,
            },
          };
          if (!!data.repliedToText) {
            message.replyText = data.repliedToText;
          }
          return message;
        });
        this.setState({messages});
      })
      .catch(err => {
        console.log(err, 'this is get user error');
      });
  }
  //===================This function use for send message=============================// 
  onSend(messages = []) {
    if (String(messages[0].text).trim().length < 1) {
      return;
    }
    const {_id, commonConversationId} = this.props.route.params.obj;
    const {userData} = this.props;
    // To send new message
    socketServices.emit(SOCKET_STRINGS.SEND_MESSAGE, {
      senderId: userData._id,
      recieverId: _id,
      commonConversationId,
      messageType: 'Text',
      text: messages[0].text,
    });
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  //===================This function use for change color of right side chat=============================// 
  renderBubble = props => {
    const {themeColor} = this.props;
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: !!themeColor ? themeColor : colors.themeColor,
          },
        }}
      />
    );
  };

  //===================This function use for change behaviour of send message button=============================// 
  renderSend = props => {
    const {themeColor} = this.props;
    return (
      <Send {...props}>
        <View>
          <Image
            source={imagePath.send}
            style={[
              styles.renderSend,
              {tintColor: !!themeColor ? themeColor : colors.themeColor},
            ]}
          />
        </View>
      </Send>
    );
  };

  //===================This function use for control scroll view of chat=============================// 
  scrollToBottomComponent = () => {
    const {themeColor} = this.props;
    return (
      <Image
        source={imagePath.downArrow}
        style={[
          styles.messageScroll,
          {tintColor: !!themeColor ? themeColor : colors.themeColor},
        ]}
      />
    );
  };
  //===================This function use for go back to previous screen=============================// 
  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  render() {
    const {messages} = this.state;
    const {obj} = this.props.route.params;
    const {themeColor, navigation} = this.props;
    return (
      <>
        <Header
          textData={obj.userInfo.fullName}
          onClickMenuIcon={this.goBack}
          isChatScreen={true}
          icChatPic={true}
        />

        <GiftedChat
          messages={messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: this.props.userData._id,
          }}
          renderBubble={this.renderBubble}
          alwaysShowSend
          renderSend={this.renderSend}
          scrollToBottom
          scrollToBottomComponent={this.scrollToBottomComponent}
        />
      </>
    );
  }
}

const mapStateToProps = ({auth, main}) => {
  return {
    themeColor: main.themeColor,
    userData: auth.userData,
  };
};
export default connect(mapStateToProps)(ChatScreen);
const styles = StyleSheet.create({
  renderSend: {
    width: 30,
    height: 30,
    marginHorizontal: 15,
    marginVertical: 7,
  },
  messageScroll: {
    width: 30,
    height: 30,
    marginHorizontal: 3,
    marginVertical: 3,
  },
});
