"use client";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return <div className="h-screen bg-black text-white flex justify-center items-center">{error.message}</div>;
};

export default Error;
