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
    const response = await axiosClient.get<T>(this.endPoint + "/" + id);

    return response.data;
  }

  async getTrailor(id: number) {
    const response = await axiosClient.get<FetchedData<T>>(
      this.endPoint + "/" + id + "/" + "movies"
    );

    return response.data;
  }

  async getScreenShoot(id: number) {
    const response = await axiosClient.get<FetchedData<T>>(
      this.endPoint + "/" + id + "/" + "screenshots"
    );

    return response.data;
  }
}

export default ApiClient;
