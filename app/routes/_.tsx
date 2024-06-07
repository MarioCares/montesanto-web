import Navbar from "~/components/ui/navbar/Navbar";
import { Outlet } from "@remix-run/react";

export default function Default() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
