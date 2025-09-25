import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}
export default function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
}: PaginationProps) {
  return (
    <PaginationUI className="mt-8">
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
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationUI>
  );
}
