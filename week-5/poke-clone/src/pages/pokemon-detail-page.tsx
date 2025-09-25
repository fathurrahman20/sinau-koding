import DetailStatistic from "@/components/pokemon-detail-page/detail-statistic";
import DetailType from "@/components/pokemon-detail-page/detail-type";
import Error from "@/components/pokemon-detail-page/error";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { usePokemonDetail } from "@/hooks/userPokemonDetail";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export default function PokemonDetailPage() {
  const params = useParams();
  const navigate = useNavigate();

  const { pokemon, isLoading, error } = usePokemonDetail(params.name);

  useEffect(() => {
    if (!params.name) {
      navigate("/");
    }
  }, [params.name, navigate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

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
    <motion.div
      className="container mx-auto max-w-4xl p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="mb-6 cursor-pointer">
          <ArrowLeft className="mr-2 h-4 w-4 text-lg" /> Kembali ke Daftar
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <DetailType pokemon={pokemon} />
            <DetailStatistic pokemon={pokemon} />
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
