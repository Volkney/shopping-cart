import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Layout>
        <Navbar />
        <Main />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
