import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderText = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.children}</Text>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 15,
    // fontWeight: 'bold',
    fontFamily: 'balsamiq-bold',
  },
  headerContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
});
