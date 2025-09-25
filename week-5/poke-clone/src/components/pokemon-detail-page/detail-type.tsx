import { formatPokemonId, getTypeColorClass } from "@/utils";
import type { Pokemon } from "pokenode-ts";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

interface DetailTypeProps {
  pokemon: Pokemon;
}
export default function DetailType({ pokemon }: DetailTypeProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3, // Mulai animasi setelah main container muncul
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.img
        src={
          pokemon.sprites.other?.["official-artwork"].front_default ||
          (pokemon.sprites.front_default as string)
        }
        alt={pokemon.name}
        className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-lg"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { type: "spring", stiffness: 260, damping: 20 },
        }}
      />
      <motion.div className="text-center" variants={itemVariants}>
        <p className="text-muted-foreground text-lg">
          {formatPokemonId(pokemon.id)}
        </p>
        <h1 className="text-4xl font-bold capitalize">{pokemon.name}</h1>
      </motion.div>
      <motion.div className="flex gap-2" variants={itemVariants}>
        {pokemon.types.map(({ type }) => (
          <Badge
            key={type.name}
            className={`text-lg ${getTypeColorClass(type.name)}`}>
            {type.name}
          </Badge>
        ))}
      </motion.div>
    </motion.div>
  );
}
