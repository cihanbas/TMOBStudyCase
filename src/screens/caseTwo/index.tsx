import {useAppDispatch} from 'hooks/redux';
import {NavigationProps} from 'navigation/model';
import React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {fetchVideoByCoordRequest} from 'redux/store/youtube/actions';
import {IVideoListParam} from 'redux/store/youtube/types';
import {initialRegion} from 'utils/constants';

export const QTwoThree: React.FC<NavigationProps> = ({
  navigation,
}: NavigationProps) => {
  const dispatch = useAppDispatch();
  const pressMap = (location: IVideoListParam) => {
    const payload: IVideoListParam = {
      latitude: location.latitude,
      longitude: location.longitude,
    };
    dispatch(fetchVideoByCoordRequest(payload));
    navigation.navigate('VideoList');
  };
  return (
    <MapView
      initialRegion={initialRegion}
      onPress={event => pressMap(event.nativeEvent.coordinate)}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
