export const getPokemonActualName = async (pokemonId) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const data = await response.json();
    console.log(data);
    return data.name;
  } catch (error) {
    console.error(error);
    return null;
  }
};
