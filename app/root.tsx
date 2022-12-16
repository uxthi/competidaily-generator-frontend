import { LiveReload, Outlet } from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Gere uma competidaily aleatória pra sua equipe!</title>
      </head>
      <body>
        <Outlet />
        {/* The <LiveReload /> component is useful during development to auto-refresh the browser whenever we make a change. */}
        <LiveReload />
      </body>
    </html>
  );
}