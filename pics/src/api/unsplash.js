import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID OMMjTK_xQ0N-IAqCr91d7OUsZRswQtenRkm0hEU5WaY",
  },
});
