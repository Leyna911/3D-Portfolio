import { BrowserRouter } from "react-router-dom"
import {About,Contact , Experience, Feedbacks ,Hero ,Navbar,Tech ,Works ,StarsCanvas } from './components'


function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="">
          <Navbar/>
          <Hero/>
        </div>
        <section id="about"><About/></section>
        
        <Experience/>
        <Tech/>
        <section id="work"> <Works/> </section>
        <div className="relative z-0">
          <section id="contact"><Contact/></section>
          <StarsCanvas/>
        </div>
        
      </div>
    </BrowserRouter>
  )
}

export default App
