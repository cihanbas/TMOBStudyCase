import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {IItem} from 'redux/store/youtube/types';
import {VideoItemHeight} from 'utils/constants';
import {ListItem} from './listItem';
import {Avatar} from './Thumbnail';

const Item = memo(({item}: {item: IItem}) => {
  return (
    <View style={styles.container}>
      <Avatar medium={item.snippet?.thumbnails?.default} />
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
});
