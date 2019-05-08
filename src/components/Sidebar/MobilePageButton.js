import React from "react";

function MobilePageButton({ href, pageName }) {
  return (
    <li>
      <a href={href}>{pageName}</a>
    </li>
  );
}

export default MobilePageButton;
