import _ from 'lodash';
import {CheckEqual} from './model';
import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {applicationData, expectedFormValues} from './constants';
import {appPadding, colors} from 'utils/constants';
import {normalize} from './helper';

export const QOne: React.FC = () => {
  const [isEqualCheck, setisEqualCheck] = useState(CheckEqual.notChecked);
  const isEqual = () => {
    const value = _.isEqual(normalize(applicationData), expectedFormValues);
    setisEqualCheck(value ? CheckEqual.equal : CheckEqual.notEqual);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{isEqualCheck}</Text>
      <Button title="Check equality" onPress={isEqual} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: appPadding,
  },
  text: {
    color: colors.primary,
    textAlign: 'center',
    padding: appPadding,
    fontSize: 24,
  },
});
