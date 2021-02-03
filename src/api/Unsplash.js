import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID BcFH673Etlx--mxdrFemwPerbbOgd91scp8_DVgtH4k",
  }
});
