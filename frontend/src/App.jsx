import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import ButterflyDesign from './components/ButterflyDesign'
import SolarSystem from './components/SolarSystem'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative">
          <SolarSystem />
          <ButterflyDesign />
          <Navbar />
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App 