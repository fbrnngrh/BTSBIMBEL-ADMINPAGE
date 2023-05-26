import axios from "configs/axios";


export default {
    getAllData: (options = {params: {}}) => axios.get("/chapters", options),
    getData: (id) => axios.get(`/chapters/${id}`),
    create: (payload) => axios.post("/chapters", payload),
    update: (id, payload) => axios.put(`/chapters/${id}`, payload),
    destroy: (id) => axios.delete(`/chapters/${id}`),
}

// export const getAllData = () => axios.get("/chapters");

// export const getData = (options= {params: "course_id"}) => axios.get("/chapters", options);

// export const getDetail = (id) => axios.get(`/chapters/${id}`);

// export const create = (payload) => axios.post("/chapters", payload);

// export const update = (id, payload) => axios.put(`/chapters/${id}`, payload);

// export const destroy = (id) => axios.delete(`/chapters/${id}`);
