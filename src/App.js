import './App.css';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <AboutUsPage />
      <Footer />
    </div>
  );
}

export default App;
