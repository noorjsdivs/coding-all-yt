import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex">
      <h2 className="text-lg font-semibold relative group overflow-hidden">
        Learn Coding
        <span className="absolute w-full h-0.5 bg-blue-600 left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 ease-in-out duration-300" />
      </h2>
    </Link>
  );
};

export default Logo;
