import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {IThumbnailData} from 'redux/store/youtube/types';
import {appPadding} from 'utils/constants';

export const Avatar = ({medium}: {medium: IThumbnailData}) => {
  return (
    <Image source={medium.url ? {uri: medium.url} : {}} style={styles.image} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    paddingRight: appPadding / 2,
    height: '100%',
    backgroundColor: '#000',
    borderRadius: 8,
  },
});
