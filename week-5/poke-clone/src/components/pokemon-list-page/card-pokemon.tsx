import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatPokemonId, getPokemonByName, typeColors } from "@/utils";
import type { Pokemon } from "pokenode-ts";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Skeleton } from "../ui/skeleton";
import { Badge } from "../ui/badge";

interface CardPokemonProps {
  name: string;
}

export default function CardPokemon({ name }: CardPokemonProps) {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        setIsLoading(true);
        const data = await getPokemonByName(name);
        setPokemon(data);
      } catch (error) {
        console.error("Failed to fetch pokemon detail:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemonDetail();
  }, [name]);

  const imageUrl = pokemon?.sprites?.front_default as string;

  if (isLoading) {
    return <Skeleton className="h-48 w-full rounded-lg" />;
  }

  if (!pokemon) {
    return null;
  }

  return (
    <Link
      to={`/pokemon/${name}`}
      className="outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg">
      <Card className="hover:border-primary/80 hover:shadow-lg transition-all duration-300 group">
        <CardHeader className="p-0 flex items-center justify-center">
          <div className="aspect-square w-full p-4 bg-muted/50 rounded-t-lg">
            <img
              src={imageUrl}
              alt={pokemon.name}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-muted-foreground">
              {formatPokemonId(pokemon.id)}
            </p>
            <p className="text-lg">EXP: {pokemon.base_experience}</p>
          </div>
          <h3 className="text-2xl font-bold capitalize truncate">
            {pokemon.name}
          </h3>
          <div className="flex gap-2 mt-2">
            {pokemon.types.map(({ type }) => (
              <Badge
                key={type.name}
                className={`${
                  typeColors[type.name] || "bg-gray-500"
                } text-white border-none capitalize p-2 rounded-2xl tracking-wide text-lg`}>
                {type.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
