import React from "react";
import loading from "../loading.gif";

export function Spinner() {
  return (
    //Displays each record from API
    <div className="text-center">
      <h1>Loading...</h1>
      <img src={loading} alt="loading..." />
    </div>
  );
}
