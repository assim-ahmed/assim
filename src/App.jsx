
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Aboutme from "./components/Aboutme";
import Loader from "./components/Loader";
import Contact from "./components/Conntact"
import Footer from "./components/Footer"
import { useEffect, useState } from "react";

function App() {
   const [loading, setLoading] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  if (loading) {
    return <Loader/> ;
  }

  return (
    <>
      <Nav data-aos="fade-up"  />
      <Hero  data-aos="fade-up" />
      <Aboutme data-aos="fade-up"  />
      <Contact data-aos="fade-up" />
      <Footer data-aos="fade-up" />
    
    </>
  )
}

export default App
