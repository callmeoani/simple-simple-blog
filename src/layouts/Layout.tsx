import { Outlet } from "react-router";
import Sidebar from "../widgets/Sidebar";
import { useState } from "react";
import ThemeContext from "../contexts/themeContext";

export default function Layout() {
  const [theme, setTheme] = useState("light");

  const value = {
    theme,
    setTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      <div className="flex ">
        <Sidebar />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}
