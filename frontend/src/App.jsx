import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import SolarSystem from './components/SolarSystem';
import ButterflyDesign from './components/ButterflyDesign';
import MainPage from './components/MainPage';
import ScrollWrapper from './components/ScrollWrapper';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/patsy-portfolio">
      <ScrollWrapper>
        <div className="relative bg-[#fefefe] min-h-screen overflow-auto">
          <Navbar />
          <SolarSystem />
          <ButterflyDesign />
          <main className="pt-16">
            <MainPage />
          </main>
        </div>
      </ScrollWrapper>
    </BrowserRouter>
  )
}

export default App;
