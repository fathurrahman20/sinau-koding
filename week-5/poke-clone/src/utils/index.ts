import { PokemonClient } from "pokenode-ts";

export const client = new PokemonClient({
  logs: true,
  cacheOptions: { ttl: 60 },
});

export const getAllPokemon = async (
  offset?: number | undefined,
  limit?: number | undefined
) => {
  const pokemons = await client.listPokemons(offset, limit);
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

// Helper function untuk memberikan warna pada Badge Tipe Pokemon
export const getTypeColorClass = (type: string): string => {
  switch (type) {
    case "grass":
      return "bg-green-500 hover:bg-green-600 text-white";
    case "fire":
      return "bg-red-500 hover:bg-red-600 text-white";
    case "water":
      return "bg-blue-500 hover:bg-blue-600 text-white";
    case "bug":
      return "bg-lime-500 hover:bg-lime-600 text-white";
    case "normal":
      return "bg-gray-400 hover:bg-gray-500 text-white";
    case "poison":
      return "bg-purple-500 hover:bg-purple-600 text-white";
    case "electric":
      return "bg-yellow-400 hover:bg-yellow-500 text-black";
    case "ground":
      return "bg-amber-700 hover:bg-amber-800 text-white";
    case "fairy":
      return "bg-pink-400 hover:bg-pink-500 text-white";
    case "fighting":
      return "bg-orange-800 hover:bg-orange-900 text-white";
    case "psychic":
      return "bg-pink-600 hover:bg-pink-700 text-white";
    case "rock":
      return "bg-stone-500 hover:bg-stone-600 text-white";
    case "ghost":
      return "bg-indigo-700 hover:bg-indigo-800 text-white";
    case "ice":
      return "bg-cyan-300 hover:bg-cyan-400 text-black";
    case "dragon":
      return "bg-indigo-500 hover:bg-indigo-600 text-white";
    case "dark":
      return "bg-gray-800 hover:bg-gray-900 text-white";
    case "steel":
      return "bg-slate-400 hover:bg-slate-500 text-white";
    case "flying":
      return "bg-sky-400 hover:bg-sky-500 text-white";
    default:
      return "bg-gray-500 hover:bg-gray-600 text-white";
  }
};
