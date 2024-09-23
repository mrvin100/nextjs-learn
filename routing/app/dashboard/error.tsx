"use client";
import { useEffect } from "react";

// Error boundaries must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an reporting service
    console.log(error);
  }, [error]);
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        // Attempt to recover by trying to re-render the segment
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
