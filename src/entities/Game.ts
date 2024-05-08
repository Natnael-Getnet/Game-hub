import { Platform } from "./Platform";

export interface Game {
  id: number;
  background_image: string;
  name: string;
  description_raw: string;
  slug: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
