import { useState } from 'react'
import './App.css'
import Navbar from "../components/header/Navbar.jsx";
import Wellcome from "../components/presentation/Wellcome.jsx";
import Services from "../components/services/Services.jsx";
import Gallery from "../components/gallery/Gallery.jsx";
import Location from "../components/location/Location.jsx";
import Footer from "../components/footer/Footer.jsx";
import Whatsapp from "../components/contact/whatsapp/Whatsapp.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Whatsapp />
      <header>
        <Navbar />
      </header>
      <main>
        <section id="home">
          <Wellcome />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="galeria">
          <Gallery />
        </section>
        <section>
          <Location />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
