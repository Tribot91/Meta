import React from "react";
import Buy from "./Buy";
import { Route, Redirect } from "react-router-dom";

export default function Deals({ match, location }) {
  let shouldRedirect = match.url === location.pathname;
  return (
    <div>
      {shouldRedirect && <Redirect to="/deals/buy" />}
      <Route path="/deals/buy" component={Buy} />
    </div>
  );
}
