import { Outlet } from "@remix-run/react";

export default function CompetidailyRoute() {
  return (
    <div>
      <h1>Gerador de Competidaily v2.0</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}