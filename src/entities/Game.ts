import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

interface Game {
  id: number;
  background_image: string;
  name: string;
  description_raw: string;
  slug: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  publishers: Publisher[];
  metacritic: number;
  rating_top: number;
}

export default Game;
