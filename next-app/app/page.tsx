import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-linear-to-r from-blue-600 to-purple-600 via-pink-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold">
            Learn Coding with US
          </h1>
          <p className="text-base md:text-lg text-gray-100 max-w-2xl mx-auto">
            Discover the latest insights, tutorials, and trends in technology.
            Your journey to tech excellence starts here.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg duration-300"
          >
            Explore Blogs
          </Link>
        </div>
      </section>
      {/* Blog section */}
      <section className="py-16 grow">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Latest Articles
            </h2>
            <p className="text-gray-600 text-lg">
              Check out our most recent posts
            </p>
          </div>
          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post?.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
