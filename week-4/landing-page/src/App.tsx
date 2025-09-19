import Banner from "./components/banner";
import CaseStudies from "./components/case-studies";
import Company from "./components/company";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Teams from "./components/teams";
import WorkingProcess from "./components/working-process";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Company />
      <Services />
      <Banner />
      <CaseStudies />
      <WorkingProcess />
      <Teams />
    </>
  );
}

export default App;
