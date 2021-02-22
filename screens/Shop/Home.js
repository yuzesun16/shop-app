import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import * as ActionFunction from '../../store/actions/cart';

const Home = ({navigation}) => {
  const allProducts = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    return (
      <ProductItem
        item={item}
        toDetail={() => {
          navigation.navigate('ProductDetails', {
            itemId: item.id,
            itemTitle: item.title,
          });
        }}
        toCart={() => dispatch(ActionFunction.addToCart(item))}
      />
    );
  };

  return <FlatList data={allProducts} renderItem={renderItem} />;
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
