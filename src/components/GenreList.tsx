import useGenre from "@/hooks/useGenre";

export const GenreList = () => {
  const { genres } = useGenre();
  return (
    <>
      <h1>Genre</h1>
      {genres.map((genre) => {
        return <li key={genre.id}>{genre.name}</li>;
      })}
    </>
  );
};
