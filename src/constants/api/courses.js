import axios from "configs/axios";

export default {
    getAllData: (options = {params: {status: "published"}}) => axios.get("/courses", options).then((res) => res.data),
    getData:  (id) => axios.get(`/courses/${id}`).then((res) => res.data),

    create: (payload) => axios.post("/courses", payload),
    update: (id, payload) => axios.put(`/courses/${id}`, payload),
    destroy: (id) => axios.delete(`/courses/${id}`),
}

// export const getAllData = (options = {params: {status: "published"}}) => axios.get("/courses", options).then((res) => res.data);

// export const getDetail = (id) => axios.get(`/courses/${id}`).then((res) => res.data);

// export const create = (payload) => axios.post("/courses", payload);

// export const update = (id, payload) => axios.put(`/courses/${id}`, payload);

// export const destroy = (id) => axios.delete(`/courses/${id}`);