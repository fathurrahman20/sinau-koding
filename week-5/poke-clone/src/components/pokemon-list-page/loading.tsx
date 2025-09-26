import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function Loading() {
  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-red-400">
        Memuat Pokemon
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card className="hover:border-primary/80 hover:shadow-lg transition-colors duration-300 group h-full pt-6 pb-28">
            <Skeleton key={index} className="h-48 w-full rounded-lg" />
          </Card>
        ))}
      </div>
    </main>
  );
}
