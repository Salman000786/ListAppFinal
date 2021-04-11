import React, { Component } from 'react'
import { Text, View,Dimensions,Image, } from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom';
import Header from '../../Component/Header';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';

export default class ZoomImage extends Component {
    onOpenDrawer=()=>{ 
        const{navigation}=this.props;
        navigation.openDrawer();
    }
    render() {
        return (
            <View>
                <Header textData={strings.ZOME_IMAGE} onClickMenuIcon={this.onOpenDrawer}/>
                <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={200}
                       imageHeight={200}
                       pinchToZoom={true}
                       >
                <Image style={{width:200, height:200}}
                       source={imagePath.accProfile}/>
            </ImageZoom>
               
            </View>
        )
    }
}
