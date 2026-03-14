import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
//import Main from "./components/Main";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Navbar />
        <Outlet />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
