import { Link } from "react-router";
import pokeball from "/pokeball.svg";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-xl font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-lg p-1">
      <img src={pokeball} alt="pokeball icon" className="w-10 h-10" />
      <span className="text-2xl">Pokemen</span>
    </Link>
  );
}
