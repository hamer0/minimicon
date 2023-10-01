import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IconView from "./components/IconView";
import Toolbar from "./components/Toolbar";

function App() {

  const [iconsJSON, setIconsJSON] = useState<{name: string, svg:string}[] | undefined>();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(()=> {
    fetch('icons.json')
    .then((res) => {
        if(!res.ok) throw new Error("Cannot fetch icons.json");
        return res.json();
    })
    .then((json) => setIconsJSON(json))
    .catch((err) => console.error(err))
}, [])

  return (
    <>
      <Header />
      <Hero iconCount={iconsJSON?.length}/>
      <Toolbar onsearch={setSearchTerm}/>
      <IconView iconData={iconsJSON} searchTerm={searchTerm} />
      <Footer />
    </>
  );
}

export default App;
