import useTeamNames from "../hooks/useTeamNames";
import Loading from "./Loading";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Teams() {
  const { response: teamNames, loading } = useTeamNames();

  if (loading) return <Loading />;

  return (
    <div className="container two-column">
      <Sidebar title="Teams" list={teamNames} />

      <Outlet />
    </div>
  );
}
