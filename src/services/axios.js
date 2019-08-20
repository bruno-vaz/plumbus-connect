import axios from "axios"

const axiosInstance = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/${process.env.API_URL}`
});

export default axiosInstance