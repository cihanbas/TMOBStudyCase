import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {IItem} from 'redux/store/youtube/types';
import {appPadding, VideoItemHeight} from 'utils/constants';
import {ListItem} from './listItem';

const Item = memo(({item}: {item: IItem}) => {
  const thumbnail = item.snippet?.thumbnails?.default?.url;
  return (
    <View style={styles.container}>
      <Image source={thumbnail ? {uri: thumbnail} : {}} style={styles.image} />
      <ListItem snippet={item.snippet} />
    </View>
  );
});

export {Item};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    height: VideoItemHeight,
    width: '100%',
    marginBottom: 8,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    paddingRight: appPadding / 2,
    height: '100%',
    backgroundColor: '#000',
    borderRadius: 8,
  },
});
