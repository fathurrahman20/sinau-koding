import DetailPage from "@/pages/detail-page";
import HomePage from "@/pages/home-page";
import { createBrowserRouter } from "react-router";

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/pokemon/:name",
    element: <DetailPage />,
  },
]);

export default routerList;
