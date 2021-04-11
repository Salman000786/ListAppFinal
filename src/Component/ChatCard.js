// import { TestScheduler } from '@jest/core';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
function ChatCard(props) {
  const {data, sendToChatScreen} = props;
  return (
    <TouchableOpacity onPress={() => sendToChatScreen(data)}>
      <View style={styles.chatCardOuterView}>
        <View style={styles.chatCardInnerView}>
          <View style={styles.ChatCard}>
            <View style={styles.ChatCard}>
              <View style={styles.profileImage}>
                <Image
                  source={{uri: data.userInfo.profileImg[0].original}}
                  style={styles.listImage}
                />
              </View>
              <View style={styles.chatUserNameCon}>
                <View style={styles.chatUserName}>
                  <Text style={styles.fullName}>{data.userInfo.fullName}</Text>
                </View>
                <View style={styles.lastUserMessage}>
                  <Text style={styles.lastMessage}>
                    {data.lastMessage[0].text}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.listBottomLine}></View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  profileImage: {
    marginLeft: 10,
    marginVertical: 10,
  },
  ChatCard: {
    flexDirection: 'row',
  },
  listBottomLine: {
    width: '80%',
    height: 1,
    backgroundColor: colors.ListBottomColor,
    marginLeft: 'auto',
  },
  fullName: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
  },
  listImage: {width: 70, height: 70, borderRadius: 50, borderWidth: 1},
  lastMessage: {color: colors.greyTextColor},
  chatCardOuterView: {flexDirection: 'column'},
  chatCardInnerView: {position: 'relative'},
  chatUserNameCon: {marginLeft: 10, width: '55%'},
  chatUserName: {marginTop: 15},
  lastUserMessage: {marginTop: 7},
});

export default ChatCard;
