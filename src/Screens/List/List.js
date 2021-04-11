import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList, RefreshControl} from 'react-native';
import actions from '../../redux/actions';
import InfiniteListCard from '../../Component/InfiniteListCard';
import Header from '../../Component/Header';
import strings from '../../constants/lang';
import Loader from '../../Component/Loader';
import {connect} from 'react-redux';
import TextInputComponent from '../../Component/TextInputComponent';
import socketServices from '../../utils/socketService';
import colors from '../../styles/colors';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userArray: [],
      incressSkip: 0,
      isvalid: false,
      isRefreshing: false,
      isNoMoreData: false,
      searchText: '',
    };
  }

  componentDidMount() {
    socketServices.initializeSocket(this.props.userData.accessToken)
    this.hitApi();
  }
  hitApi = (onEndReachCall = false) => {
    const {userArray, incressSkip, isRefreshing, isNoMoreData} = this.state;
    let Skip = onEndReachCall ? userArray.length : 0;
    actions
      .UserData({
        searchType: 'LEADERBOARD',
        limit: '5',
        skip: Skip,
      })
      .then(res => {
        let updatedState = {};
        if (res.data.length > 0) {
          let profilesData = onEndReachCall
            ? [...userArray, ...res.data]
            : res.data;
          updatedState = {
            userArray: profilesData,
          };
        } else {
          updatedState = {
            isListEnd: true,
            isvalid: true,
            isNoMoreData: true,
          };
        }
        this.setState({
          ...updatedState,
          isvalid: false,
          isRefreshing: false,
        });
      })
      .catch(err => {
        this.setState({isvalid: false});
      });
  };
  footerLoader = () => {
    const {isvalid} = this.state;
    const {themeColor} = this.props;
    return (
      <View style={{height: 50}}>
        <Loader
          isvalid={isvalid}
          LodingColor={!!themeColor ? themeColor : colors.themeColor}
        />
      </View>
    );
  };
  _handleRefresh = () => {
    this.setState({isRefreshing: true});
    this.hitApi();
    // alert("_handleRefresh")
  };
  onEndReached = () => {
    const {isvalid, isNoMoreData} = this.state;
    console.log('onEndReached Before');
    if (isvalid || isNoMoreData) {
      return;
    }
    console.log('onEndReached');
    this.setState({isvalid: true});
    this.hitApi(true);
  };
  onOpenDrawer=()=>{
       
    const{navigation}=this.props;
    navigation.openDrawer();
    // alert()
}
  render() {
    const {userArray, isRefreshing} = this.state;
    console.log(this.state.searchText);

    return (
      <View style={{flex: 1}}>
        <Header textData={strings.INFINITE_LIST} onClickMenuIcon={this.onOpenDrawer} />
        <FlatList
          data={userArray}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          keyExtractor={item => item._id}
          ItemSeparatorComponent={() => <View style={{marginVertical: 5}} />}
          renderItem={({item}) => <InfiniteListCard data={item} />}
          onEndReached={this.onEndReached}
          ListFooterComponent={() => this.footerLoader()}
          onEndReachedThreshold={0.09}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={this._handleRefresh}
            />
          }
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    themeColor: state.main.themeColor,
    userData:state.auth.userData,
  };
};
export default connect(mapStateToProps)(List);
const styles = StyleSheet.create({});
