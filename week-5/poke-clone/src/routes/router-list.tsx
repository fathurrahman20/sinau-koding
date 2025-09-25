import HomePage from "@/pages/home-page";
import { createBrowserRouter } from "react-router";

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default routerList;
