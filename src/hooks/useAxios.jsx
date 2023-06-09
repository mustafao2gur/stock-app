import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosPublic = axios.create({
    baseURL: "https://12151.fullstack.clarusway.com/",
  });

  const axiosWithToken = axios.create({
    baseURL: "https://12151.fullstack.clarusway.com/",
    headers: { Authorization: `Token ${token}` },
  });

  return { axiosWithToken, axiosPublic };
};

export default useAxios;
//?axios işlemlerini kolaylaştırmak için axios sayfasında kopyaladık bir kalıp oluşturma mantığı gibi düşünülebilir