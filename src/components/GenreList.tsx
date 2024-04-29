import useGenre from "@/hooks/useGenre";

export interface Genre {
  id: number;
  name: string;
}

export const GenreList = () => {
  const { data } = useGenre();
  return (
    <>
      {data.map((genre) => {
        return <li key={genre.id}>{genre.name}</li>;
      })}
    </>
  );
};
