import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Teams from "./Teams";
import Players from "./Players";
import TeamPage from "./TeamPage";
import Player from "./Player";
import Team from "./Team";
import Article from "./Article";
import Articles from "./Articles";

function Routes() {
  return useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/players",
      element: <Players />,
      children: [
        { path: ":playerId", element: <Player /> },
        {
          path: "",
          element: <div className="sidebar-instruction">Select a player</div>,
        },
      ],
    },
    {
      path: "/teams",
      element: <Teams />,
      children: [
        { path: ":teamId", element: <Team /> },
        {
          path: "",
          element: <div className="sidebar-instruction">Select a Team</div>,
        },
      ],
    },
    {
      path: "/:teamId",
      element: <TeamPage />,
    },
    {
      path: "/:teamId/articles",
      element: <Articles />,
      children: [
        { path: ":articleId", element: <Article /> },
        {
          path: "",
          element: <div className="sidebar-instruction">Select an article</div>,
        },
      ],
    },
  ]);
}

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes />
      </div>
    </Router>
  );
}
