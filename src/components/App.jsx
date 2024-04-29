import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Teams from "./Teams";
import Players from "./Players";
import TeamPage from "./TeamPage";
import Player from "./Player";
import Team from "./Team";
import Article from "./Article";
import Articles from "./Articles";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />}>
            <Route
              path=""
              element={
                <div className="sidebar-instruction">Select a player</div>
              }
            />
            <Route path=":playerId" element={<Player />} />
          </Route>
          <Route path="/teams" element={<Teams />}>
            <Route
              path=""
              element={<div className="sidebar-instruction">Select a team</div>}
            />
            <Route path=":teamId" element={<Team />} />
          </Route>
          <Route path=":teamId/articles" element={<Articles />}>
            <Route
              path=""
              element={
                <div className="sidebar-instruction">Select an article</div>
              }
            />
            <Route path=":articleId" element={<Article />} />
          </Route>
          <Route path="/:teamId" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
}
