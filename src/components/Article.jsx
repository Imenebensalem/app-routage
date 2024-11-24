import React from "react";
import { useParams } from "react-router-dom";
export default function Article() 
{
  const { numero } = useParams(); //passer des paramètres dans une route et de les récupérer avec useParams().
  return (
    <div>
      <h2>Article avec un id :{numero} </h2>
    </div>
  );
}
