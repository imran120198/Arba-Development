const initState = {
  isLoggen: false,
  user: {},
  product: JSON.parse(localStorage.getItem("allProducts")) || [],
  cartProducts: JSON.parse(localStorage.getItem("cart")) || [],
  categories: [],
};

export const reducer = (state = initState, action) => {
  if (action.type == "loggedIn") {
    state = { ...state, isLoggedIn: true, user: action.payload };
  }
  if (action.type === "addProducts") {
    state = { ...state, products: action.payload };
    localStorage.setItem("allProducts", JSON.stringify(action.payload));
  }
  if (action.type === "addToCart") {
    state = { ...state, cartProducts: action.payload };
    localStorage.setItem("cart", JSON.stringify(action.payload));
  }
  if (action.type === "logout") {
    state = {
      ...state,
      isLoggedIn: false,
      user: {},
      products: [],
      cartProducts: [],
    };
  }
  if (action.type === "addCategory") {
    state = { ...state, categories: action.payload };
  }
  return state;
};
