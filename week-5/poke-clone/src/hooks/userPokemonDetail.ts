import { useState, useEffect } from "react";
import { getPokemonByName } from "@/utils";
import type { Pokemon } from "pokenode-ts";

export function usePokemonDetail(name: string | undefined) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!name) {
      setIsLoading(false);
      return;
    }

    const fetchPokemonDetail = async () => {
      try {
        setIsLoading(true);
        setError(null);
        setPokemon(null);

        const data = await getPokemonByName(name);
        setPokemon(data);
      } catch (err) {
        console.error("Failed to fetch pokemon detail:", err);
        setError(`Pokemon dengan nama "${name}" tidak ditemukan.`);
        setPokemon(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [name]);

  return { pokemon, isLoading, error };
}
