import axios from "axios";
import { UNSPLASH_URL, UNSPLASH_API_KEY } from "../constants/constants";

export default axios.create({
  baseURL: UNSPLASH_URL,
  headers: {
    Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
  },
});
