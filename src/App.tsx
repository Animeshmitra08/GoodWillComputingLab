import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import TeamMembers from './Components/TeamMembers';
import Footer from './Components/Footer';
import Publications from './Components/Publications';
import GroupLayout from './Components/GroupLayout';
import LandingHeader from './Components/LandingHeader';
import Collaborators from './Components/Collaborators';

function App() {
  return (
    <Router>
      <LandingHeader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/publications" element={<Publications/>}/>
        {/* <Route path="/group/team-members" element={<TeamMembers />} /> */}
        <Route path="/group" element={<GroupLayout />}>
          <Route path="team-members" element={<TeamMembers />} />
          <Route path="collaborators" element={<Collaborators />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;