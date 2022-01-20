import {useAppDispatch} from 'hooks/redux';
import {NavigationProps} from 'navigation/model';
import React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {fetchVideoByCoordRequest} from 'redux/store/youtube/actions';
import {IVideoListParam} from 'redux/store/youtube/types';
const initialRegion = {
  latitude: 39.930273,
  longitude: 32.856041,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
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
