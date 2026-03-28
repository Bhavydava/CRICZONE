import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Teams from './pages/Teams';
import TeamDetails from './pages/TeamDetails';
import PlayerDetails from './pages/PlayerDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Advertise from './pages/Advertise';
import Feedback from './pages/Feedback';
import WriteForUs from './pages/WriteForUs';
import DMCA from './pages/DMCA';
import Disclaimer from './pages/Disclaimer';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CopyrightsNotice from './pages/CopyrightsNotice';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MatchDetails from './pages/MatchDetails';
import NewsDetails from './pages/NewsDetails';

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:teamId" element={<TeamDetails />} />
        <Route path="/player/:playerId" element={<PlayerDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/write-for-us" element={<WriteForUs />} />
        <Route path="/dmca" element={<DMCA />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/copyrights" element={<CopyrightsNotice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/match/:matchId" element={<MatchDetails />} />
        <Route path="/news/:newsId" element={<NewsDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

