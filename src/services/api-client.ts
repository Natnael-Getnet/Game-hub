import axios, { AxiosRequestConfig } from "axios";

export interface FetchedData<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1e33ceb05bd444aeae00a4503c39a647",
  },
});

class ApiClient<T> {
  constructor(public endPoint: string) {}

  async getAll(requestConfig?: AxiosRequestConfig) {
    const response = await axiosClient.get<FetchedData<T>>(this.endPoint, {
      ...requestConfig,
    });
    return response.data;
  }

  async get(id: number | string) {
    return axiosClient.get<T>(this.endPoint + "/" + id).then((res) => res.data);
  }
}

export default ApiClient;
