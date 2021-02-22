import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import HeaderText from '../../components/HeaderText';
import RegularText from '../../components/RegularText';
import {useDispatch} from 'react-redux';
import * as ActionFunction from '../../store/actions/cart';

const ProductDetails = ({route, navigation}) => {
  const {itemId} = route.params;
  const product = useSelector((state) => state.products.allProducts).find(
    (product) => product.id === itemId
  );
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.screen}>
      {/* <View style={styles.screen}> */}
      <Image style={styles.prodImage} source={{uri: product.imageURL}} />
      <HeaderText>${product.price}</HeaderText>
      <View style={styles.descriptionText}>
        <RegularText>{product.description}</RegularText>
      </View>
      <Button
        title="Add to cart"
        onPress={() => dispatch(ActionFunction.addToCart(product))}
      />
      {/* </View> */}
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  prodImage: {
    width: '100%',
    height: 250,
  },
  descriptionText: {
    marginHorizontal: '5%',
    flex: 1,
  },
});
