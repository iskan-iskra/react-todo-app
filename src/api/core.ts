import { BASE_URL } from "@/consts";
import axios from "axios";

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export default httpClient;
