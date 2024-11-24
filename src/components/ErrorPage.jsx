import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const erreur = useRouteError();
  console.log(erreur);
  return (
    <div>
      <h2>Il y a une erreur !!!</h2>
      <p>{erreur ? erreur.statusText : "erreur inconnue !!"}</p>
    </div>
  );
}
