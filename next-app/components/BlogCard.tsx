import { BlogPost } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  post: BlogPost;
}

const BlogCard = ({ post }: Props) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
        <div className="relative h-60 w-full group">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {post.category}
          </span>
        </div>
        <div className="p-6 flex flex-col grow">
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3  hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 grow">{post.excerpt}</p>
          <div className="flex items-center text-blue-600 font-semibold">
            Read More
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
