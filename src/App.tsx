import { Layout } from "./components/layout/Layout";
import { PopularMovies } from "./components/routes/PopularMovies";

export function App() {
  return (
    <Layout>
      <PopularMovies />
    </Layout>
  );
}
