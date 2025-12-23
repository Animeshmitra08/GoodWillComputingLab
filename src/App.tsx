import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from './Components/LandingPage';
import TeamMembers from './Components/TeamMembers';
import Footer from './Components/Footer';
import Publications from './Components/Publications';
import GroupLayout from './Components/GroupLayout';
import LandingHeader from './Components/LandingHeader';
import CollaboratorsNetwork from './Components/Collaborators';
import Research from './Components/Research';
import Achievements from './Components/Achievements';
import LandingPage from './Components/Landing2';
// import TeamPage from './Components/TeamSinglePage';
// import NewCollab from './Components/NewCollab';

function App() {
  return (
    <Router>
      <LandingHeader />
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/publications" element={<Publications/>}/>
        {/* <Route path="/group/team-members" element={<TeamMembers />} /> */}
        <Route path="/group" element={<GroupLayout />}>
          <Route path="team-members" element={<TeamMembers />} />
          <Route path="collaborators" element={<CollaboratorsNetwork />} />
        </Route>
        {/* <Route path="/team/:memberName" element={<TeamPage />} /> */}
        <Route path="/researches" element={<Research />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;