import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Shop/Home';
import ProductDetails from '../screens/Shop/ProductDetails';
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';
import Cart from '../screens/Shop/Cart';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const IoniconsHeaderButton = (props) => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color="white"
    {...props}
  />
);

const Stack = createStackNavigator();

export default ShopNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.accent,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontFamily: 'balsamiq-regular',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
              <Item
                title="search"
                iconName="cart-outline"
                onPress={() => navigation.navigate('Cart')}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({route}) => ({title: route.params.itemTitle})}
      />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};
