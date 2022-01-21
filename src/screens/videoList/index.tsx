import {Header} from 'components/Header';
import {Item} from 'components/VideoItem';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import _ from 'lodash';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {fetchVideoByCoordRequest} from 'redux/store/youtube/actions';
import {
  IItem,
  IVideoListParam,
  VideoListState,
} from 'redux/store/youtube/types';
import {appPadding, colors, VideoItemHeight} from 'utils/constants';

export const VideoListScreen: React.FC = () => {
  const DATA: VideoListState = useAppSelector(state => state.youtube);
  const [items, setitems] = useState<IItem[]>([]);
  const [count, setCount] = useState(0);

  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();

  const keyExtractor = useCallback((item: IItem) => `${item.id.videoId}`, []);
  const renderItem = useCallback(({item}) => <Item item={item} />, []);
  const getItemLayout = useCallback(
    (data, index) => ({
      length: VideoItemHeight,
      offset: VideoItemHeight * index,
      index,
    }),
    [],
  );

  const getMoreVideo = () => {
    if (!_.isEmpty(DATA.coordinate)) {
      const payload: IVideoListParam = {
        ...DATA.coordinate!,
      };
      dispatch(fetchVideoByCoordRequest(payload));
    }
  };
  useEffect(() => {
    if (DATA.data) {
      changeData();
    }
  }, [DATA]);

  const changeData = () => {
    //! Bir onceki listede gelen itemlar tekrar gelebiliyor
    //! ve key'ler ayni oldugu zaman performans kaybi olusuyor
    //! bunu onlemek icin sayfa bazli gelen pageToken ile id'ler birlestirildi
    if (DATA.data) {
      const newItems = DATA.data?.items.map(item => {
        item.id.videoId = item.id.videoId + DATA.data?.nextPageToken;
        return item;
      });
      if (newItems) {
        setitems([...items, ...newItems]);
        setCount(count ? count + 10 : 10);
      }
    }
  };
  return (
    <View style={[styles.container, {paddingBottom: insets.bottom}]}>
      <Header title={`LIST count  ${count}`} />
      <FlatList
        data={items || []}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        getItemLayout={getItemLayout}
        // removeClippedSubviews={true}
        keyExtractor={keyExtractor}
        onEndReached={getMoreVideo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: appPadding,
  },
});
