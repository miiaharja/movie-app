import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { PopularMovies } from "./components/routes/PopularMovies";
import { TopRatedMovies } from "./components/routes/TopRatedMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { element: <PopularMovies />, path: "/" },
      { element: <TopRatedMovies />, path: "/top-rated" },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
