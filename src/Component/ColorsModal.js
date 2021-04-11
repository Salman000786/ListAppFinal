import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {ceil} from 'react-native-reanimated';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import Loader from './Loader';
import actions from '../redux/actions';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';

export default function ColorsModal({data, onSelect, selected}) {
  const selecteid = id => {
    onSelect(id);
    actions.changeThemeColor(data.colorId);
  };
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => selecteid(data.id)}>
        <View style={[styles.colorModalInnerView,{backgroundColor: data.colorId}]}>
          <Text style={styles.dataText}>{data.name}</Text>
          {selected === data.id && (
            <Image source={imagePath.tick} style={styles.tick} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dataText: {
    marginLeft: 20,
    marginTop: 'auto',
    marginBottom: 'auto',
    color: colors.whiteColor,
  },
  tick: {
    marginLeft: 10,
    width: 30,
    height: 30,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  colorModalInnerView: {
    marginVertical: 5,
    marginHorizontal: 5,
    height: moderateScaleVertical(95),
    borderRadius: 10,
    flexDirection: 'row',
  },
});
