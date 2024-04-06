import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import AllProduct from "../Components/AllProducts";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import Profile from "../Pages/Profile";
import Cart from "../Components/Cart";
import { Navbar } from "../Components/Navbar";

const AllRoutes = () => {
  const { isLoggedIn, user } = useSelector((state) => state);

  // console.log(user)
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getData(token));
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<AllProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
