import { Outlet } from "@remix-run/react";

export default function Auth() {
  return (
    <>
      <h1>Autenticación</h1>
      <Outlet />
    </>
  );
}
