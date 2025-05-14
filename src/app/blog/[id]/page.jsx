"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPostPage({ params }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/entries/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          setPost(data);
        } else {
          setPost(null);
        }
      } catch (error) {
        console.error("Error cargando entrada:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-xl">Cargando artículo...</p>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pt-20 px-4 sm:px-6 ">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Volver al blog
        </Link>

        <article className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden mb-10">
          <div className="relative w-full h-64 sm:h-80 md:h-96">
            <Image
              src={post.image || "/images/blog/default.jpg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>

            {post.date && (
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {new Date(post.date).toLocaleDateString()}
              </p>
            )}

            <div className="prose prose-lg max-w-none dark:prose-invert">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4 text-gray-700 dark:text-gray-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
