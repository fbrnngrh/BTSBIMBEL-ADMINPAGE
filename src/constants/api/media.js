import axios from "configs/axios";

export const uploadImage = (image) => axios.post("/media", {image});