import { LiveReload, Outlet, Links } from '@remix-run/react';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Gere uma competidaily aleatória pra sua equipe!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
