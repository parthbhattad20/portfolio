import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import SocialLinks from "./components/SocialLinks";
// import Footer from "./components/Footer";
import Education from "./components/Education";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Education/>
      {/* <Portfolio /> */}
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
