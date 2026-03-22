import axios from "axios";

const API_KEY = "mNH5v9pP2_fXiR8f_HTQJlfelN7Ip1nAj2acdNrZvPw";

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
});

const fetchImages = async (query, page = 1) => {
  const { data } = await instance.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });

  return data;
};
export default fetchImages;   