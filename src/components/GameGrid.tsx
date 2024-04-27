import useGame from "@/hooks/useGames";

export const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <ul>
      {error && <h1>{error}</h1>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};
