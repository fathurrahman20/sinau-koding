// src/pages/DetailPage.tsx

import { Skeleton } from "@/components/ui/skeleton";
import { formatPokemonId, getPokemonByName, getTypeColorClass } from "@/utils";
import type { Pokemon } from "pokenode-ts";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function DetailPage() {
  const params = useParams();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!params.name) {
      navigate("/");
      return;
    }

    const fetchPokemonDetail = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getPokemonByName(params.name as string);
        setPokemon(data);
      } catch (error) {
        console.error("Failed to fetch pokemon detail:", error);
        setError(`Pokemon dengan nama "${params.name}" tidak ditemukan.`);
        setPokemon(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [params.name, navigate]);

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-4xl p-4">
        <Skeleton className="h-10 w-32 mb-6" />
        <Skeleton className="h-[500px] w-full rounded-lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto max-w-4xl p-4 flex flex-col items-center gap-4">
        <Alert variant="destructive" className="w-full">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <Button onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-4 w-4 text-lg" /> Kembali
        </Button>
      </div>
    );
  }

  if (!pokemon) {
    return null;
  }

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <Button
        variant="outline"
        onClick={() => navigate(-1)}
        className="mb-6 cursor-pointer">
        <ArrowLeft className="mr-2 h-4 w-4 text-lg" /> Kembali ke Daftar
      </Button>

      <Card>
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Kolom Kiri: Gambar, Nama, Tipe */}
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

          {/* Kolom Kanan: Detail & Statistik */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Details</h2>
              <Separator />
              <div className="grid grid-cols-2 gap-4 mt-4 text-center">
                <div>
                  <p className="font-semibold text-lg">
                    {pokemon.height / 10} m
                  </p>
                  <p className="text-lg text-muted-foreground">Height</p>
                </div>
                <div>
                  <p className="font-semibold text-lg">
                    {pokemon.weight / 10} kg
                  </p>
                  <p className="text-lg text-muted-foreground">Weight</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Abilities</h3>
              <div className="flex flex-wrap gap-2">
                {pokemon.abilities.map(({ ability }) => (
                  <Badge
                    variant="secondary"
                    key={ability.name}
                    className="capitalize text-lg">
                    {ability.name.replace("-", " ")}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Base Stats</h2>
              <Separator />
              <div className="space-y-3 mt-4">
                {pokemon.stats.map((stat) => (
                  <div
                    key={stat.stat.name}
                    className="grid grid-cols-3 items-center gap-2">
                    <span className="text-lg font-medium capitalize text-muted-foreground">
                      {stat.stat.name.replace("special-", "Sp. ")}
                    </span>
                    <span className="font-bold text-right">
                      {stat.base_stat}
                    </span>
                    <Progress
                      value={stat.base_stat}
                      max={200}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
