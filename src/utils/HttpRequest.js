import axios from "axios";

const HttpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

// custom method get
export const get = async (path, options = {}) => {
    const response = await HttpRequest.get(path, options);
    return response.data
}

export default HttpRequest;