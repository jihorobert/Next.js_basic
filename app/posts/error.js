"use client"; // Error components must be Client components

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reportin service
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};
