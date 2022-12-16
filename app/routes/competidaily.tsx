import { Outlet } from "@remix-run/react";
import type { LinksFunction } from '@remix-run/node';

import stylesUrl from '~/styles/competidaily.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

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