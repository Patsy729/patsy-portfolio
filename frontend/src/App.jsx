import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import SolarSystem from './components/SolarSystem'
import ButterflyDesign from './components/ButterflyDesign'
import './App.css'

function App() {
  // Removed loading state for testing deployment white screen issue
  return (
    <div className="relative bg-[#fefefe]">
      <Navbar />
      <SolarSystem />
      <ButterflyDesign />
      <main className="pt-16">
        <AppRoutes />
      </main>
    </div>
  )
}

export default App
