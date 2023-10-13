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
import PrivateRoute from './components/common/PrivateRoute';
import FranchiseHomePage from './pages/Franchise/FranchiseHomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/career' element={<CarrerPage />} />
        <Route path='/franchise' element={<FranchisePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/location/:id' element={<LocationPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/franchiseMember" element={<FranchiseHomePage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
