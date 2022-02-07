import axios from "axios";

const BASE_URL = "https://api.chucknorris.io/jokes";

export const fetchRandomData = async () => {
  try {
    return await axios
      .get(`${BASE_URL}/random`)
      .then((response) => response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategories = async () => {
  try {
    return await axios
      .get(`${BASE_URL}/categories`)
      .then((response) => response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoryByQuery = async (query: string) => {
  try {
    return await axios
      .get(`${BASE_URL}/search?query=${query}`)
      .then((response) => response.data.result);
  } catch (error) {
    console.log(error);
  }
};
