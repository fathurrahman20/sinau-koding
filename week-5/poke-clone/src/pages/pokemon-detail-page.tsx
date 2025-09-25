import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import DetailStatistic from "@/components/pokemon-detail-page/detail-statistic";
import DetailType from "@/components/pokemon-detail-page/detail-type";
import Error from "@/components/pokemon-detail-page/error";
import { usePokemonDetail } from "@/hooks/userPokemonDetail";

export default function DetailPage() {
  const params = useParams();
  const navigate = useNavigate();

  const { pokemon, isLoading, error } = usePokemonDetail(params.name);

  useEffect(() => {
    if (!params.name) {
      navigate("/");
    }
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
    return <Error message={error} />;
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
          <DetailType pokemon={pokemon} />
          <DetailStatistic pokemon={pokemon} />
        </div>
      </Card>
    </div>
  );
}
