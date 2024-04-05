import axios from "axios";

const url = "https://arba-backend-op50.onrender.com/";

export const updateImage = async (file) => {
  return await axios.post(`${url}/upload/profile`, file);
};

export const signup = async (user) => {
  return await axios.post(`${url}/user/signup`, user);
};

export const logIn = async (user) => {
  return await axios.post(`${url}/user/login`, user);
};

export const getAllProducts = async () => {
  return await axios.get(`${url}/product/getall`);
};

export const getSearchedProduts = async (data) => {
  return await axios.get(
    `${url}/product/getall?title=${data.title}&price=${data.sort}`
  );
};

export const getCategories = async () => {
  return await axios.get(`${url}/category/get`);
};

export const getSearchedCategory = async (name) => {
  return await axios.get(`${url}/category?name=${name}`);
};

export const addOneCategory = async (data) => {
  return await axios.post(`${url}/category/add`, data);
};

export const addProduct = async (data) => {
  return await axios.post(`${url}/product/add`, data);
};

export const deleteOneProduct = async (id) => {
  return await axios.delete(`${url}/product/delete/${id}`);
};

export const deleteOneCategory = async (id) => {
  return await axios.delete(`${url}/category/delete/${id}`);
};

export const getOneProduct = async (id) => {
  return await axios.get(`${url}/product/get/${id}`);
};

export const updateProduct = async (data, id) => {
  return await axios.patch(`${url}/product/update/${id}`, data);
};

export const updateCategory = async (data, id) => {
  return await axios.patch(`${url}/category/update/${id}`, data);
};

export const updateUserData = async (data, id) => {
  return await axios.patch(`${url}/user/update/${id}`, data);
};

export const updateNewPassword = async (data, id) => {
  return await axios.patch(`${url}/user/changepassword/${id}`, data);
};
