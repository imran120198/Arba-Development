import axios from "axios";

const url = `https://arba-backend-op50.onrender.com/user/login`

export const getData = (token) => {
  return function (dispatch, getState) {
    axios
      .get(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response.data.data)
        dispatch({
          type: "loggedIn",
          payload: response.data.data,
        });
      })
      .catch((err) =>
        dispatch({
          type: "loggedInFail",
          payload: err.message,
        })
      );
  };
};

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
