"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <>
      <h1>An unexpected error occured</h1>
      <div>Error: {error.message}</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
}
