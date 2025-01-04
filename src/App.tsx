import React from "react";
import { ThemeProvider } from "@mui/material";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Menu from "./menu/Menu";
import Testimonials from "./testimonials/Testimonials";
import Carousel from "./carousel/Carousel";
import Gallery from "./galeria/Gallery";
import Chefs from "./time/Chefs";

import theme from "./tema/Theme";
import Contact from "./contado/Contact";
import Form from "./formulario/Form";
import Footer from "./footer/Footer";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Testimonials />
      <Carousel />
      <Chefs />
      <Gallery />
      <Contact />
      <Form />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
