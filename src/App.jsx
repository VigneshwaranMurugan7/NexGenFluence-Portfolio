
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"


const App = () => {
  return (
    <div className="pt-20">
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Contact />
      <Footer/>
    </div>
  )
}


export default App