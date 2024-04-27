import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Game {
    id: number;
    name: string;
  }
  
  interface FetchedGamesData {
    count: number;
    results: Game[];
  }

const useGame = ()=>{
    
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState([""]);
    
    useEffect(() => {
        const controller = new AbortController();
      
        apiClient
        .get<FetchedGamesData>("/games", {signal: controller.signal})
        .then((response) => {
          setGames(response.data.results);
        })
        .catch((error) => {
            if (error instanceof CanceledError) return;
          setError(error.message);
        });

        return () => {
          controller.abort();
        };

    }, []);

  
  return {games, error};
};

export default useGame;