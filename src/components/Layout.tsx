import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Header />
      <div className="flex flex-col grow">
        <Outlet />
      </div>
    </div>
  );
}
