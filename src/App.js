import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
