import Header from "../components/header";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Project from "./project";
import { Element } from "react-scroll";

function Layout() {
  return (
    <>
      <Header />
      <Element name="Home-section">
        <Home />
      </Element>
      <Element name="About-section">
        <About />
      </Element>
      <Element name="Project-section">
        <Project />
      </Element>
      <Element name="Contact-section">
        <Contact />
      </Element>
    </>
  );
}

export default Layout;