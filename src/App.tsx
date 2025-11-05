import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import TeamMembers from './Components/TeamMembers';
import Footer from './Components/Footer';
import Publications from './Components/Publications';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/publications" element={<Publications/>}/>
        <Route path="/group/team-members" element={<TeamMembers />} />
        {/* <Route path="/group">
          <Route />
        </Route> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;