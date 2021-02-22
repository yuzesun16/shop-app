import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const RegularText = (props) => {
  return (
    <View styles={styles.headerContainer}>
      <Text style={styles.headerText}>{props.children}</Text>
    </View>
  );
};

export default RegularText;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 15,
    // fontWeight: 'bold',
    fontFamily: 'balsamiq-regular',
  },
  headerContainer: {
    marginVertical: 10,
  },
});
