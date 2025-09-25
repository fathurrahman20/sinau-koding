import CardPokemon from "@/components/card-pokemon";
import { getAllPokemon } from "@/utils";
import { useEffect, useMemo, useState, type Key } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import type { NamedAPIResourceList } from "pokenode-ts";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "react-router";

const PAGE_SIZE = 20;

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState<NamedAPIResourceList>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentPage = useMemo(() => {
    const page = searchParams.get("page");
    return page ? parseInt(page) : 1;
  }, [searchParams]);

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      setError(null);

      const offset = (currentPage - 1) * PAGE_SIZE;

      try {
        const data = await getAllPokemon(PAGE_SIZE, offset);
        setData(data);
        console.log(data);
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

  const totalPages = useMemo(() => {
    if (!data?.count) return 0;
    return Math.ceil(data.count / PAGE_SIZE);
  }, [data?.count]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams({ page: newPage.toString() });
    }
    window.scrollTo(0, 0); // Scroll ke atas halaman
  };

  if (isLoading) {
    return (
      <main className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Memuat Pokemon
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_: unknown, index: Key) => (
            <Skeleton key={index} className="h-48 w-full rounded-lg" />
          ))}
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mx-auto p-4 md:p-8 flex items-center justify-center min-h-[50vh]">
        <Alert variant="destructive" className="max-w-md">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Gagal Memuat Data!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-wide">
        Pokemen
      </h1>

      {/* Container Card Pokemon */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {data?.results?.map((pokemon) => (
          <CardPokemon key={pokemon.name} name={pokemon.name} />
        ))}
      </div>

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
              className={`text-xl ${
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }`}
            />
          </PaginationItem>

          <PaginationItem className="mx-3">
            <PaginationLink isActive className="px-16 text-xl">
              Page {currentPage} of {totalPages}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
              className={`text-xl ${
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
