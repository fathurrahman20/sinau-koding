import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }} // SUpaya delay muncul setelah card pokemon
    >
      <PaginationUI className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
                className={`text-lg md:text-xl ${
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }`}
              />
            </motion.div>
          </PaginationItem>

          <PaginationItem className="mx-2 md:mx-3">
            <PaginationLink
              isActive
              className="px-14 md:px-16 text-lg md:text-xl">
              Page {currentPage} of {totalPages}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
                className={`text-lg md:text-xl ${
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }`}
              />
            </motion.div>
          </PaginationItem>
        </PaginationContent>
      </PaginationUI>
    </motion.div>
  );
}
