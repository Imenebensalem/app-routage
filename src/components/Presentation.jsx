import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Presentation() {
  return (
    <div>
      <h1>Presentation</h1>
      <nav>
        <ul>
          <li>
            <Link to="Apropos">A propos</Link>
          </li>

          <li>
            <Link to="Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Outlet />
      </div>

      <hr />
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}
