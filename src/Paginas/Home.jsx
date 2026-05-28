const Home = () => {
  return (
    <Layout>
      <section>
        <h2>Bienvenidos a Mykonos Bazar - Tienda online</h2>
        <p>Donde encontras todo lo que te gusta y mas.</p>
      </section>
    </Layout>
  );
};

export default Home;

import Layout from "../components/layout/Layout";
import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
  return (
    <Layout>
      <ItemListContainer />
    </Layout>
  );
};

export default Home;