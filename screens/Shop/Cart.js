import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../../constants/Colors';
import HeaderText from '../../components/HeaderText';
import RegularText from '../../components/RegularText';
import {useSelector} from 'react-redux';

const Cart = () => {
  const sumTotal = useSelector((state) => state.cart.sumTotal);
  const cartItemList = [];
  const cartItem = useSelector((state) => {
    for (const key in state.cart.items) {
      cartItemList.push({
        prodId: key,
        prodQuantity: state.cart.items[key].quantity,
        prodPrice: state.cart.items[key].price,
        prodTitle: state.cart.items[key].title,
        prodSum: state.cart.items[key].sum,
      });
    }
    return cartItemList;
  });

  return (
    <View style={styles.screen}>
      <View style={{height: '90%'}}>
        {/* <Text>{JSON.stringify(cartItemList)}</Text> */}
        <FlatList
          data={cartItemList}
          renderItem={({item}) => (
            <View>
              <Text>{item.prodQuantity}</Text>
              <Text>{item.prodTitle}</Text>
              <Text>{item.prodSum}</Text>
            </View>
          )}
          keyExtractor={(item, index) => 'key' + index}
        />
      </View>
      <View style={styles.shadowContainer}>
        <View style={styles.sumContainer}>
          <View style={styles.sumTitle}>
            <View style={{width: '40%'}}>
              <RegularText>Total amount:</RegularText>
            </View>
            <HeaderText>${sumTotal.toFixed(2)}</HeaderText>
          </View>
          <View>
            <Button
              title="Order now"
              titleStyle={{fontFamily: 'balsamiq-regular'}}
              buttonStyle={{backgroundColor: Colors.accent}}
              disabled={sumTotal <= 0}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'flex-end',
    marginBottom: 36,
  },
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    padding: 10,
    margin: 15,
  },
  sumContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sumTitle: {
    flexDirection: 'row',
    width: '65%',
    alignItems: 'center',
  },
});
