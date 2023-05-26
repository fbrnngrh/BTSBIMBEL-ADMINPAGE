import axios from "configs/axios";

export default {
    all: (options = { params: {} }) => axios.get(`/orders`, options),
    detail: (id) => axios.get(`/orders/${id}`),
    getAllPayment: (options = { params: {} }) => axios.get(`/orders/logs`, options),
  };
  

// export const getAllData = (options = {params: {}}) => axios.get("/orders/all", options);
// export const getAllPayment = (options = {params: {}}) => axios.get("/orders/logs", options);