import { useState, useEffect } from "react";
import { getAllPokemon } from "@/utils";
import type { NamedAPIResourceList } from "pokenode-ts";

const PAGE_SIZE = 20;

export function usePokemonData(currentPage: number) {
  const [data, setData] = useState<NamedAPIResourceList>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      setError(null);
      const offset = (currentPage - 1) * PAGE_SIZE;

      try {
        const result = await getAllPokemon(PAGE_SIZE, offset);
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Terjadi kesalahan yang tidak diketahui.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemons();
  }, [currentPage]);

  const totalPages = data?.count ? Math.ceil(data.count / PAGE_SIZE) : 0;

  return { data, isLoading, error, totalPages };
}
