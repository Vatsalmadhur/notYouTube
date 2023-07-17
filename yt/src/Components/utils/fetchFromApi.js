// const axios = require('axios');
import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

async function fetchFromApi(url) {
  const options = {
    params: {
      part: "snippet",
      videoId: "M7FIvfx5J10",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  try {
    const { data } = await axios.request(`${BASE_URL}/${url}`, options);
    return { data };
    // console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
export default fetchFromApi;
