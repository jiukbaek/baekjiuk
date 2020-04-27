import axios from "axios";

const API_KEY = "XbtvaMS3c36Yn6hbPpp2efadkXFUrZ";
const API_URL = "https://stackme.co.kr/api/me";

export const getProjects = () => {
  return callApi(`${API_URL}/project`);
};

export const getProject = (id) => {
  return callApi(`${API_URL}/project/${id}`);
};

const callApi = async (url) => {
  try {
    return await axios.get(url, { headers: { api_key: API_KEY } });
  } catch (e) {
    return false;
  }
};
