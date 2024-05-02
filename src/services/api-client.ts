import axios, { AxiosRequestConfig } from "axios";

export interface FetchedData<T> {
  count: number;
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
}

export default ApiClient;
