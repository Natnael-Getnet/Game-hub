import axios from "axios";

export interface FetchedData<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1e33ceb05bd444aeae00a4503c39a647",
  },
});
