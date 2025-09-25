import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import pokeball from "/pokeball.svg";
export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 text-white p-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black z-0" />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        initial="hidden"
        animate="visible">
        <motion.img
          src={pokeball}
          alt="pokeball icon"
          className="w-40 h-40 md:w-48 md:h-48 mb-8 opacity-90"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          Selamat Datang, Pelatih!
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
          Jelajahi dunia Pokemon yang luas, temukan ratusan spesies unik, dan
          bangun tim impianmu.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <Button
            onClick={() => navigate("/pokemon")}
            size="lg"
            className="bg-red-600 cursor-pointer hover:bg-red-700 text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg shadow-red-500/30">
            Mulai Petualangan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}
