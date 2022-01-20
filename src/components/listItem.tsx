import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ISnippet} from 'redux/store/youtube/types';
import {normalize} from 'utils/constants';

const ListItem = ({snippet}: {snippet: ISnippet}) => {
  const {
    title = 'no title',
    description = 'no description',
    publishedAt,
  }: ISnippet = snippet;
  return (
    <View style={styles.listItem}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
      <Text style={styles.date} numberOfLines={1}>
        {moment(publishedAt || new Date()).format('DD/MM/YY HH:mm')}
      </Text>
    </View>
  );
};
export {ListItem};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '400',
    fontSize: normalize(14),
  },
  description: {
    fontWeight: '200',
    fontSize: normalize(12),
    color: 'black',
  },
  date: {
    fontWeight: '200',
    fontSize: normalize(10),
  },
});
