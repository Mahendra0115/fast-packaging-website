import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

import Layout from "../components/Layout";

function AppRouter() {
  return (
    <BrowserRouter>

      <Layout>

        <Routes>

           {/* <Route path="/" element={<MainLayout />} /> */}

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

      </Layout>

    </BrowserRouter>
  );
}

export default AppRouter;