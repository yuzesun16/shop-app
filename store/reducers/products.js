import PRODUCTS from '../../data/dummy-data';

const initialState = {
  allProducts: PRODUCTS,
  //   ownProduct: PRODUCTS.filter((product) => product.ownerId === 'u1'),
  //   otherProducts: PRODUCTS.filter((product) => product.ownerId !== 'u1'),
};

export default (state = initialState, {type, payload}) => {
  // switch (type) {
  //   case typeName:
  //     return {...state, ...payload};

  // default:
  return state;
  // }
};
