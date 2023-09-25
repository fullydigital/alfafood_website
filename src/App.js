import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutUsPage from './pages/AboutUsPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import CarrerPage from './pages/CarrerPage';
import FranchisePage from './pages/FranchisePage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/location' element={<LocationPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/carrer' element={<CarrerPage />} />
        <Route path='/franchise' element={<FranchisePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
