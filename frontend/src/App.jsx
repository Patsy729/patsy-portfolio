import { useState, useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import SolarSystem from './components/SolarSystem'
import ButterflyDesign from './components/ButterflyDesign'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="animate-pulse text-4xl font-bold text-[#ff00ff]">Loading...</div>
      </div>
    )
  }

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