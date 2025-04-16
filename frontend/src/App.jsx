import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import SolarSystem from './components/SolarSystem'
import ButterflyDesign from './components/ButterflyDesign'
import MainPage from './components/MainPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-[#fefefe]">
        <Navbar />
        <SolarSystem />
        <ButterflyDesign />
        <main className="pt-16">
          <MainPage />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
