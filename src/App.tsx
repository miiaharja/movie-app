import { Layout } from "./layout/Layout";
import { PopularMovies } from "./routes/PopularMovies";

export function App() {
  return (
    <Layout>
      <PopularMovies />
    </Layout>
  );
}
