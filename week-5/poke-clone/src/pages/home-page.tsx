import { PokemonClient } from "pokenode-ts";
import { useEffect, useState } from "react";

export default function HomePage() {
  const client = new PokemonClient({ logs: true, cacheOptions: { ttl: 60 } });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [pokemon, setPokemon] = useState<any>();

  // const getPokemon = async () => {
  //     const pokemon = await client.getPokemonByName('pikachu');
  //     console.log(pokemon);
  // }

  const getAllPokemon = async () => {
    const pokemons = await client.listPokemons();
    console.log(`Pokemon: ${JSON.stringify(pokemons)}`);
    setPokemon(pokemons);
  };

  useEffect(() => {
    // getPokemon();
    getAllPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
