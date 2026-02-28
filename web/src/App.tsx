import Home from './pages/Home'
import About from './section/About'
import Banner from './section/Banner'
import FAQS from './section/FAQS'
import { Footer } from './section/Footer'
import HowTo from './section/HowTo'
import Navbar from './section/Navbar'

const App = () => {
  return (
    <div className='bg-secondary'>
      <Navbar/>
      <Home/>
      <About/>
      <HowTo/>
      <FAQS/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App
