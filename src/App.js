import './App.css';
import React, { useState, useEffect } from 'react';
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
import OffersPage from "./pages/OffersPage";

function App() {
  const [aboutUs, setAboutUs] = useState(null);

  const query = `
  {
    aboutUsCollection {
      items {
        headline
        text
        image {
          url
        }
        video {
          url
        }
      }
    }
  }
  `;

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/o2s4pnwpfyn0/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer Bo8-88iNgEersBWGDGZXpY19H-VtlAwVGYnfj3Go6_k",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setAboutUs(data.aboutUsCollection.items[0])
      })
  }, [query]);

  if (!aboutUs) {
    return "Loading...";
  }

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/about' element={<AboutUsPage data={aboutUs} />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/career' element={<CarrerPage />} />
        <Route path='/franchise' element={<FranchisePage />} />
        <Route path='/offers' element={<OffersPage />} />
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
