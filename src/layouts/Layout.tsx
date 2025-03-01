import { Outlet } from "react-router";
import Sidebar from "../widgets/Sidebar";

export default function Layout() {
  return (
    <div className="flex ">
      <Sidebar />
      <Outlet />
    </div>
  );
}
