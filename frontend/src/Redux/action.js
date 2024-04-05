export const addCategory = (data) => {
  return function (dispatch, getstate) {
    dispatch({
      type: "addCategory",
      payload: data,
    });
  };
};

export const addToCart = (products) => {
  return function (dispatch, getstate) {
    dispatch({
      type: "addToCart",
      payload: products,
    });
  };
};

export const logout = () => {
  return function (dispatch, getstate) {
    dispatch({
      type: "logout",
      payload: "nothing",
    });
  };
};

export const addProductstoStore = (products) => {
  return function (dispatch, getstate) {
    for (var i = 0; i < products.length; i++) {
      if (!products[i].quantity) products[i].quantity = 0;
    }
    dispatch({
      type: "addProducts",
      payload: products,
    });
  };
};
