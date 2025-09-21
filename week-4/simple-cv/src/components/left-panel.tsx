import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiGithub } from "react-icons/fi";
import type { CVData } from "../data/cvData";

interface LeftPanelProps {
  data: CVData;
}

export const LeftPanel = ({ data }: LeftPanelProps) => {
  return (
    <aside className="bg-slate-800 text-white p-8 flex flex-col items-center md:items-start text-center md:text-left">
      <motion.img
        src={data.profileImage}
        alt="Profile"
        className="w-36 h-36 rounded-full border-4 border-white mb-5 mx-auto"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <h2 className="text-3xl font-bold text-center mx-auto">{data.name}</h2>
      <p className="text-md opacity-80 mb-8 text-center mx-auto">
        {data.title}
      </p>

      <div className="w-full">
        <h3 className="text-xl font-bold border-b-2 border-white pb-2 mb-4">
          Kontak
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FiPhone className="w-5 h-5 flex-shrink-0" />
            <span>{data.contact.phone}</span>
          </li>
          <li className="flex items-center gap-3">
            <FiMail className="w-5 h-5 flex-shrink-0" />
            <span>{data.contact.email}</span>
          </li>
          <li className="flex items-center gap-3">
            <FiMapPin className="w-5 h-5 flex-shrink-0" />
            <span>{data.contact.location}</span>
          </li>
          <li className="flex items-center gap-3">
            <FiGithub className="w-5 h-5 flex-shrink-0" />
            <span>{data.contact.github}</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};
