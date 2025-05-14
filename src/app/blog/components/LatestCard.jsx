import React from "react";
import Link from "next/link";
import Image from "next/image";

function LatestCard({ post }) {
  return (
    <article className="flex flex-col max-h-96 max-w-7xl mx-auto md:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 pr-4">
      <Link href={`/blog/${post.id}`} className="flex w-full">
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          {post.image && (
            <Image
              src={post.image}
              alt={post.title || "Imagen del blog"}
              className="object-cover w-full h-full"
              height={400}
              width={500}
              priority
            />
          )}
        </div>

        <div className="flex flex-col justify-center p-6 md:w-1/2 space-y-4">
          <h2 className="flex justify-start text-2xl font-bold text-gray-900 dark:text-white leading-snug">
            {post.title}
          </h2>

          <p className="flex text-start text-gray-600 dark:text-gray-300 text-base line-clamp-3">
            {post.content?.substring(0, 150)}...
          </p>

          <p className="flex text-start text-gray-700 dark:text-gray-400 text-sm">
            {post.description}
          </p>

          <p className="text-right text-gray-500 dark:text-gray-400 text-xs mt-2">
            {new Date(post.date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </Link>
    </article>
  );
}

export default LatestCard;
