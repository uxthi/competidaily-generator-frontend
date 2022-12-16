import { Outlet } from "@remix-run/react";

export default function CompetidailyRoute() {
  return (
    <div>
      <h1>A competidaily aleatória do dia</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}