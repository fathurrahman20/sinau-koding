import { motion } from "framer-motion";
import type { CVData } from "../data/cvData";
import { Section } from "./section";

interface RightPanelProps {
  data: CVData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export const RightPanel = ({ data }: RightPanelProps) => {
  return (
    <motion.section
      className="p-8 col-span-1 md:col-span-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <Section title="Profil" variants={itemVariants}>
        <p className="text-gray-700 leading-relaxed font-semibold">
          {data.profileSummary}
        </p>
      </Section>

      <Section title="Pendidikan" variants={itemVariants}>
        <p className="font-semibold text-gray-800">
          {data.education.institution}
        </p>
        <p className="text-gray-600">{data.education.field}</p>
      </Section>

      <Section title="Pengalaman" variants={itemVariants}>
        <p className="font-semibold text-gray-800">
          {data.experience.role} - {data.experience.company}
        </p>
        <p className="text-gray-600">({data.experience.tech.join(", ")})</p>
      </Section>

      <Section title="Skill" variants={itemVariants}>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill) => (
            <motion.span
              key={skill}
              className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full cursor-pointer"
              whileHover={{ scale: 1.1, backgroundColor: "#1abc9c" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              {skill}
            </motion.span>
          ))}
        </div>
      </Section>
    </motion.section>
  );
};
