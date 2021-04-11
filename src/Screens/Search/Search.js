import React, {Component} from 'react';
import {Text, View, FlatList, ScrollView,StyleSheet} from 'react-native';
import Header from '../../Component/Header';
import TextInputComponent from '../../Component/TextInputComponent';
import {SEARCH} from '../../config/urls';
import actions from '../../redux/actions';
import {apiGet} from '../../utils/utils';
import InfiniteListCard from '../../Component/InfiniteListCard';
import helperFunction from '../../utils/helperFunction';
import Loader from '../../Component/Loader';
import ButtonWithLoader from '../../Component/ButtonWithLoader';
import strings from '../../constants/lang';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      userArray: [],
      location:[],
      isvalid:false
    };
  }
 _onSearch=(value)=>{
    const {searchText,location, userArray} = this.state;
    this.setState({searchText: value,isvalid:true});
    
    if (this.chech){
      clearTimeout(this.chech);
    }
    this.chech = setTimeout(() => {
      actions
        .search(searchText,location)
        .then(res => {
          this.setState({userArray: res.data,isvalid:false});
          console.log(res);
        }).catch((err)=>this.setState({userArray: [],isvalid:false})),
       
  getCurrentLocation().then(res=>{
    this.setState({location:res})
 })
    }, 600);
   
  };
  onOpenDrawer=()=>{   
    const{navigation}=this.props;
    navigation.openDrawer();
}
_searchUserNearMe=()=>
{
  const{location}=this.state
  this.setState({isvalid:true})
  actions
        .searchNearMe(location)
        .then(res => {
          this.setState({userArray: res.data,isvalid:false});
          console.log(res);
        }).catch((err)=>this.setState({userArray: [],isvalid:false})),
       
  getCurrentLocation().then(res=>{
    this.setState({location:res})
 })
}
  render() {
    const {userArray,isvalid} = this.state;
    return (
      <View>
        <Header textData={strings.SEARCH} onClickMenuIcon={this.onOpenDrawer}/>
        <View style={{marginVertical: 10}}>
          <View>
          <TextInputComponent
            isShowBorder={true}
            onChangeText={this._onSearch}
            placeholder={strings.PLACEHOLDER_SEARCH_HERE}
          />
          <View style={styles.loaderView}>
          <Loader isvalid={isvalid}LodingColor={true} size={'small'}/>
          </View>
          </View>
        </View>
        <View style={{marginTop:-8,marginBottom:10}}>
          <ButtonWithLoader buttonText={strings.GET_NEAR_BY_ME} onButtonCLick={()=>this._searchUserNearMe()}/>
        </View>
        <FlatList
          data={userArray}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={item => item._id}
          ItemSeparatorComponent={() => <View style={{marginVertical: 5}} />}
          renderItem={({item}) => <InfiniteListCard data={item} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loaderView:
  {position:'absolute',right:40,top:25}
})
