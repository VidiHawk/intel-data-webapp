import React from "react";

const LogoSvg = () => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <style>
        {"@media (prefers-color-scheme:dark){path:nth-child(1){fill:#383838}}"}
      </style> */}
      <circle path="cls-1" cx="22.5" cy="22.5" r="22.5" fill="#0581fd" />
      <circle path="cls-2" cx="22.5" cy="22.5" r="8.63" fill="#383838" />
      <circle path="cls-3" cx="14.74" cy="9.24" r="5.12" fill="#e1e7f9" />
      <circle path="cls-3" cx="8.47" cy="18.34" r="3.16" fill="#e1e7f9" />
    </svg>
  );
};

export default LogoSvg;
