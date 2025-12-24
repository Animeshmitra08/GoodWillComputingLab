import { Routes, Route } from "react-router-dom";
import FirstPage from "./Components/FirstPage";
import LandingPage from "./Components/Landing2";
import Publications from "./Components/Publications";
import GroupLayout from "./Components/GroupLayout";
import TeamMembers from "./Components/TeamMembers";
import CollaboratorsNetwork from "./Components/Collaborators";
import Research from "./Components/Research";
import Achievements from "./Components/Achievements";
import MainLayout from "./MainLayout";

function App() {
  return (
    <Routes>
      {/* Intro page – NO header/footer */}
      <Route path="/" element={<FirstPage />} />

      {/* Main site – WITH header/footer */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/publications" element={<Publications />} />

        <Route path="/group" element={<GroupLayout />}>
          <Route path="team-members" element={<TeamMembers />} />
          <Route path="collaborators" element={<CollaboratorsNetwork />} />
        </Route>

        <Route path="/researches" element={<Research />} />
        <Route path="/achievements" element={<Achievements />} />
      </Route>

      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;