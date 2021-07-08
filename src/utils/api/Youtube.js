import axios from "axios";
import { YOUTUBE_URL, YOUTUBE_API_KEY } from "../constants/constants";

export default axios.create({
  baseURL: YOUTUBE_URL,
  params: {
    part: "snippet",
    maxResults: 5,
    key: YOUTUBE_API_KEY,
  },
});
