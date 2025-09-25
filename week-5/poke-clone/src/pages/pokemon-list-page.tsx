import CardPokemon from "@/components/pokemon-list-page/card-pokemon";
import Error from "@/components/pokemon-list-page/error";
import Loading from "@/components/pokemon-list-page/loading";
import Pagination from "@/components/pokemon-list-page/pagination";
import { usePokemonData } from "@/hooks/usePokemonData";
import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { motion, type Variants } from "framer-motion";
import Layout from "@/components/layout";

export default function PokemonListPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = useMemo(() => {
    const page = searchParams.get("page");
    return page ? parseInt(page) : 1;
  }, [searchParams]);

  const { data, error, isLoading, totalPages } = usePokemonData(currentPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams({ page: newPage.toString() });
    }
    window.scrollTo(0, 0); // Scroll ke atas halaman
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <Layout>
      <main className="container mx-auto p-4 md:p-8">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-wide"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}>
          Pokemons
        </motion.h1>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          {data?.results?.map((pokemon) => (
            <CardPokemon
              key={pokemon.name}
              name={pokemon.name}
              variants={itemVariants}
            />
          ))}
        </motion.div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </main>
    </Layout>
  );
}
