import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import type { Pokemon } from "pokenode-ts";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

interface DetailStatisticProps {
  pokemon: Pokemon;
}

const AnimatedStatBar = ({ value, max }: { value: number; max: number }) => {
  return (
    <motion.div
      initial={{ width: "0%" }}
      animate={{ width: `${(value / max) * 100}%` }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full">
      <Progress value={value} max={max} className="w-full" />
    </motion.div>
  );
};

export default function DetailStatistic({ pokemon }: DetailStatisticProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5, // Delay lebih lama supaya muncul setelah sisi kiri
      },
    },
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-2">Details</h2>
        <Separator />
        <div className="grid grid-cols-2 gap-4 mt-4 text-center">
          <div>
            <p className="font-semibold text-lg">{pokemon.height / 10} m</p>
            <p className="text-lg text-muted-foreground">Height</p>
          </div>
          <div>
            <p className="font-semibold text-lg">{pokemon.weight / 10} kg</p>
            <p className="text-lg text-muted-foreground">Weight</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-semibold mb-2">Abilities</h3>
        <div className="flex flex-wrap gap-2">
          {pokemon.abilities.map(({ ability }) => (
            <Badge
              variant="secondary"
              key={ability.name}
              className="capitalize text-lg">
              {ability.name.replace("-", " ")}
            </Badge>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-2">Base Stats</h2>
        <Separator />
        <div className="space-y-3 mt-4">
          {pokemon.stats.map((stat) => (
            <div
              key={stat.stat.name}
              className="grid grid-cols-3 items-center gap-2">
              <span className="text-lg font-medium capitalize text-muted-foreground">
                {stat.stat.name.replace("special-", "Sp. ")}
              </span>
              <span className="font-bold text-right">{stat.base_stat}</span>
              <AnimatedStatBar value={stat.base_stat} max={200} />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
