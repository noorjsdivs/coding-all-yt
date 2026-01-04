import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <Link
        href="https://www.reactbd.com/"
        target="_blank"
        className="text-center text-gray-200 hover:text-blue-200 duration-300"
      >
        <p className="text-sm md:text-base">
          &copy; 2026 Reactbd. All rights reserved.
        </p>
      </Link>
    </footer>
  );
};

export default Footer;
