
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"


const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Gallery/>
      <Contact />
      <Footer/>
    </div>
  )
}


export default App