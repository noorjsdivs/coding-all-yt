import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <Container className="py-5 flex items-center justify-between">
        {/* Logo */}
        <Logo />
        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-600 duration-300"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium hover:text-blue-600 duration-300"
          >
            Blog
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
