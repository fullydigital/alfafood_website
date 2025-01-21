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
import LocationOverviewPage from './pages/LocationOverviewPage';
import Impressum from './pages/Impressum';
import AGBs from './pages/AGBs';
import { CookieConsent } from "react-cookie-consent";
import RegisterPage from "./pages/RegisterPage";
import PackagingPage from './pages/PackagingPage';

function App() {
  const [carrer, setCarrer] = useState(null);
  const [locations, setLocations] = useState(null);
  const [contact, setContact] = useState(null);
  const [franchise, setFranchise] = useState(null);
  const [offers, setOffers] = useState(null);
  const [locationText, setLocationText] = useState(null);

  const query = `
  {
  careerCollection {
    items {
      headline
      subline
      text {
        json
      }
    }
  }
  contactPageCollection {
    items {
      headline
      subline
    }
  }
  franchisePageCollection {
    items {
      headline
      subline
    }
  }
  offersPageCollection {
    items {
      headline
      validity
      offersCollection {
        items {
          url
        }
      }
    }
  }
  locationOverviewCollection {
    items {
      headline
      text {
        json
      }
    }
  }
  contentTypeLocationCollection {
    items {
      name
      heroImage {
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
        setCarrer(data.careerCollection.items[0])
        setLocations(data.contentTypeLocationCollection.items)
        setContact(data.contactPageCollection.items[0])
        setFranchise(data.franchisePageCollection.items[0])
        setOffers(data.offersPageCollection.items[0])
        setLocationText(data.locationOverviewCollection.items[0])
      })
  }, [query]);

  if (!carrer) {
    return "Loading...";
  }

  return (
    <div className="App">
      <Navigation data={locations} />
      <CookieConsent
        location="bottom"
        buttonText="Zustimmen"
        cookieName="cookieAlfafood"
        style={{ background: '#000001', marginLeft: '0px' }}
        buttonStyle={{
          color: '#FFFFFF',
          fontSize: '13px',
          background: '#6D86A6',
          padding: '7px 45px',
          margin: '20px 25px'
        }}
        expires={150}
      >
        <p style={{ marginBottom: '-10px', marginLeft: '10px', fontSize: '13px' }}>
          Wir und einige unserer Partner setzen zu den in den Cookie-Richtlinien beschriebenen Zwecken<br />{' '}
          Cookies und ähnliche Technologien ein.<br />
          Sie willigen in den Einsatz solcher Technologien ein, indem Sie diesen Hinweis schließen.
        </p>
        <br />{' '}
        <span style={{ fontSize: '13px', color: '#FFFFFF', marginLeft: '10px' }}>
          <a href="/privacy" style={{ fontSize: '13x', color: '#FFFFFF' }}>
            Mehr erfahren
          </a>
        </span>
      </CookieConsent>
      <Routes>
        <Route path='/' exact element={<HomePage locations={locations} />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/contact' element={<ContactPage contact={contact} />} />
        <Route path='/career' element={<CarrerPage data={carrer} locations={locations} />} />
        <Route path='/franchise' element={<FranchisePage franchise={franchise} />} />
        <Route path='/offers' element={<OffersPage locations={locations} offers={offers} />} />
        <Route path='/packages' element={<PackagingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/location' element={<LocationOverviewPage data={locationText} />} />
        <Route path='/datenschutz' element={<AGBs />} />
        <Route path='/impressum' element={<Impressum />} />
        <Route path='/location/:id' element={<LocationPage data={locations} />} />
        <Route path='/Cl2GCwWasmv5gPbHLtwU/' exact element={<RegisterPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/franchiseMember" element={<FranchiseHomePage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
