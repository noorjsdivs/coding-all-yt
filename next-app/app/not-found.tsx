import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <Container className="h-[60vh] flex items-center justify-center flex-col gap-3">
      <h2 className="text-4xl font-semibold">
        The page you are looking not available
      </h2>
      <Link
        href="/"
        className="bg-blue-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-700 duration-300"
      >
        Go back to home
      </Link>
    </Container>
  );
};

export default NotFoundPage;
