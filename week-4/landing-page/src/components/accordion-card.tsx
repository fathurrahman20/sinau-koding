import React, { type ReactNode } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { LuPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";

interface AccordionCardProps {
  number: string;
  title: string;
  children: ReactNode;
}
const AccordionCard = ({ number, title, children }: AccordionCardProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`md:max-w-[1234px] w-full bg-tertiary rounded-[45px] border-[1px] mb-4 overflow-hidden shadow-bottom my-[30px]`}>
      {/* button */}
      <button
        className={`flex items-center justify-between text-neutral-200 w-full p-4 text-left ${
          isOpen ? "bg-primary" : ""
        }`}
        onClick={toggleAccordion}>
        <div className="flex items-center text-black">
          <p className="text-[60px] px-[19px]">{number}</p>
          <p className="text-lg font-medium text-[30px] py-auto">{title}</p>
        </div>

        <motion.span
          initial={{ opacity: 0, y: -5, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 5, scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}>
          {isOpen ? (
            <FiMinus
              className={`w-[40px] h-[40px] border-[1px] rounded-full text-black mr-[35px]
              }`}
            />
          ) : (
            <LuPlus
              className={`w-[40px] h-[40px] border-[1px] rounded-full text-black mr-[35px]
              }`}
            />
          )}
        </motion.span>
      </button>

      {isOpen && (
        <div className="w-[94%] h-px bg-[#000] mx-auto relative z-10 -mt-px" />
      )}

      {/* content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.87, 0, 0.13, 1] }}
            className="overflow-hidden">
            <div className={`p-4 ${isOpen ? "bg-primary" : "bg-tertiary"}`}>
              <div className="flex items-center flex-col space-y-3">
                <p className="text-[18px] text-black font-light p-4">
                  {children}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionCard;
