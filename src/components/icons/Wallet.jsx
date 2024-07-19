import React from "react";

const Wallet = ({ size }) => (
  <svg
    width={size ? size : "24"}
    height={size ? size : "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 6.17071V5C20 3.34315 18.6569 2 17 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V9C22 7.69378 21.1652 6.58254 20 6.17071ZM4 5C4 4.44772 4.44772 4 5 4H17C17.5523 4 18 4.44772 18 5V6H5C4.44772 6 4 5.55228 4 5ZM4 7.82929C4.31278 7.93985 4.64936 8 5 8H19C19.5523 8 20 8.44771 20 9V11H17C15.3431 11 14 12.3431 14 14C14 15.6569 15.3431 17 17 17H20V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V7.82929ZM17 13H20V15H17C16.4477 15 16 14.5523 16 14C16 13.4477 16.4477 13 17 13Z"
      fill="currentColor"
    />
  </svg>
);

export default Wallet;
