import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Button} from 'react-native-elements';
import HeaderText from './HeaderText';
import Colors from '../constants/Colors';
import RegularText from './RegularText';

const ProductItem = ({item, toDetail, toCart}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.hideCorner}>
          <Image style={styles.prodImage} source={{uri: item.imageURL}} />
        </View>
        <View style={styles.prodHeader}>
          <HeaderText>{item.title}</HeaderText>
          <RegularText>${item.price}</RegularText>
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="View Details"
              titleStyle={{fontFamily: 'balsamiq-regular'}}
              buttonStyle={{backgroundColor: Colors.accent}}
              onPress={toDetail}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add to Cart"
              onPress={toCart}
              titleStyle={{fontFamily: 'balsamiq-regular'}}
              buttonStyle={{backgroundColor: Colors.accent}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: 350,
    height: 260,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  prodImage: {
    width: '100%',
    height: 150,
  },
  hideCorner: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  prodHeader: {
    alignItems: 'center',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    height: 40,
  },
});
