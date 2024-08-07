import Contact from "@/scenes/contacts";
import Home from "@/scenes/home/page";
import NavBar from "@/scenes/navbar";
import Skills from "@/scenes/skills";
import Works from "@/scenes/works";
import { SelectedPage } from "@/shared/types";
import { useState } from "react";
import Footer from "./scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <>
      <NavBar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      <Home />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
