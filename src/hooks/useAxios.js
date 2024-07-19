import axios from "axios";

const useAxios = () => {
  const baseURL = "https://pokeapi.co/api";

  const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {},
  });

  const _get = (url, config = {}) => {
    return axiosClient.get(url, config);
  };

  return { _get };
};
export default useAxios;
