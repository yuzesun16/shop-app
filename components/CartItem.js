import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CartItem = ({cartItem}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.quantity}>
        <Text>{cartItem.prodQuantity}</Text>
      </View>
      <View style={styles.title}>
        <Text>{cartItem.prodTitle}</Text>
      </View>
      <View>
        <Text>${cartItem.prodSum.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  quantity: {
    marginHorizontal: 5,
  },
  title: {
    marginHorizontal: 5,
  },
});
