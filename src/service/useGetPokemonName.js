import { useQuery } from "react-query";
import pokemonsKeys from ".";
import useAxios from "../hooks/useAxios";

export const useGetPokemon = (pokemonId) => {
  const axiosClient = useAxios();

  const cacheKey = [pokemonsKeys.lists, pokemonId];

  const query = useQuery({
    queryKey: cacheKey,
    staleTime: Infinity,
    queryFn: () =>
      axiosClient._get(`/v2/pokemon/${pokemonId}`).then((res) => res.data),
    enabled: !!pokemonId,
  });
  console.log(query);

  return { ...query, data: query.data };
};
