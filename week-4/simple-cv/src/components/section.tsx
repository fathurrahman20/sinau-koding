import { motion, type Variants } from "framer-motion";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  variants: Variants;
}

export const Section = ({ title, children, variants }: SectionProps) => {
  return (
    <motion.div className="mb-8" variants={variants}>
      <h3 className="text-2xl font-bold text-slate-800 mb-4 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-12 after:h-1 after:bg-blue-500 pb-1">
        {title}
      </h3>
      {children}
    </motion.div>
  );
};
