import {useAppDispatch} from 'hooks/redux';
import {NavigationProps} from 'navigation/model';
import React, {useEffect} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {Modalize} from 'react-native-modalize';
import {fetchVideoByCoordRequest} from 'redux/store/youtube/actions';
import {IVideoListParam} from 'redux/store/youtube/types';

export const QTwoThree: React.FC<NavigationProps> = ({
  navigation,
}: NavigationProps) => {
  const modalizeRef = React.createRef<Modalize>();

  const dispatch = useAppDispatch();
  useEffect(() => {
    // dispatch(fetchPostRequest());
  }, [dispatch]);
  const getData = () => {
    const payload: IVideoListParam = {
      latitude: 39.930273,
      longitude: 32.856041,
    };
    dispatch(fetchVideoByCoordRequest(payload));
  };
  const pressMap = (location: IVideoListParam) => {
    modalizeRef?.current?.open();
    const payload: IVideoListParam = {
      latitude: location.latitude,
      longitude: location.longitude,
    };
    dispatch(fetchVideoByCoordRequest(payload));
    navigation.navigate('VideoList');
  };
  return (
    <View style={styles.container}>
      <Button title="GET DATA" onPress={getData} />
      <MapView
        initialRegion={{
          latitude: 39.930273,
          longitude: 32.856041,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={event => pressMap(event.nativeEvent.coordinate)}
        style={{flex: 1}}
      />
      {/* <VideoListModal ref={modalizeRef} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
