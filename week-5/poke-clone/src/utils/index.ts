import { PokemonClient } from "pokenode-ts";

export const client = new PokemonClient({
  logs: true,
  cacheOptions: { ttl: 60 },
});

export const getAllPokemon = async () => {
  const pokemons = await client.listPokemons();
  return pokemons;
};

// get pokemon by name
export const getPokemonByName = async (name: string) => {
  const pokemon = await client.getPokemonByName(name);
  return pokemon;
};

export const formatPokemonId = (id: number) =>
  `#${String(id).padStart(3, "0")}`;

export const typeColors: { [key: string]: string } = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-400",
  grass: "bg-green-500",
  ice: "bg-cyan-300",
  fighting: "bg-orange-700",
  poison: "bg-purple-600",
  ground: "bg-yellow-600",
  flying: "bg-indigo-400",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-yellow-700",
  ghost: "bg-indigo-700",
  dragon: "bg-indigo-800",
  dark: "bg-gray-700",
  steel: "bg-gray-500",
  fairy: "bg-pink-300",
};
