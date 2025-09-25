import DetailPage from "@/pages/pokemon-detail-page";
import HomePage from "@/pages/home-page";
import { createBrowserRouter } from "react-router";
import PokemonListPage from "@/pages/pokemon-list-page";

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/pokemon",
    element: <PokemonListPage />,
  },
  {
    path: "/pokemon/:name",
    element: <DetailPage />,
  },
]);

export default routerList;
