import axios from "configs/axios";

export default {
    getAllData: (options = {params: {}}) => axios.get("/lessons", options),
    getData: (id) => axios.get(`/lessons/${id}`),
    create: (payload) => axios.post("/lessons", payload),
    update: (id, payload) => axios.put(`/lessons/${id}`, payload),
    destroy: (id) => axios.delete(`/lessons/${id}`),
}


// export const getAllData = () => axios.get("/lessons");

// export const getData = (id) => axios.get(`/lessons/${id}`);

// export const create = (payload) => axios.post("/lessons", payload);

// export const update = (id, payload) => axios.put(`/lessons/${id}`, payload);

// export const destroy = (id) => axios.delete(`/lessons/${id}`);