import { formatPokemonId, getTypeColorClass } from "@/utils";
import type { Pokemon } from "pokenode-ts";
import { Badge } from "../ui/badge";

interface DetailTypeProps {
  pokemon: Pokemon;
}
export default function DetailType({ pokemon }: DetailTypeProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <img
        src={
          pokemon.sprites.other?.["official-artwork"].front_default ||
          (pokemon.sprites.front_default as string)
        }
        alt={pokemon.name}
        className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-lg"
      />
      <div className="text-center">
        <p className="text-muted-foreground text-lg">
          {formatPokemonId(pokemon.id)}
        </p>
        <h1 className="text-4xl font-bold capitalize">{pokemon.name}</h1>
      </div>
      <div className="flex gap-2">
        {pokemon.types.map(({ type }) => (
          <Badge
            key={type.name}
            className={`text-lg ${getTypeColorClass(type.name)}`}>
            {type.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
