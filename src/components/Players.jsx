import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import Loading from "./Loading";
import { slugify } from "../utils";

function CustomLink({ to, children }) {
  const location = useLocation();
  const playerId = location.pathname.split("/")[2];
  const match = playerId === to;

  const styles = match ? { fontWeight: 900, color: "var(--white)" } : {};

  return (
    <li>
      <Link
        to={{ pathname: to, search: location.search }}
        style={{ ...styles }}
      >
        {children}
      </Link>
    </li>
  );
}

function Sidebar({ title, list }) {
  return (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {list.map((item) => (
          <CustomLink key={item} to={slugify(item)}>
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
}

export default function Players() {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);
  const [team, setTeam] = useState(searchParams.get("teamId"));

  const { response: names, loading: loadingNames } = usePlayerNames(team);

  useEffect(() => {
    if (location.search === "") {
      searchParams.delete("teamId");
      setTeam(null);
    }

    setTeam(searchParams.get("teamId"));
  }, [location.search, searchParams]);

  if (loadingNames) return <Loading />;

  return (
    <div className="container">
      <Sidebar title="Players" list={names} />
    </div>
  );
}
