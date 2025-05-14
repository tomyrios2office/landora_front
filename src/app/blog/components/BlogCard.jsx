import Image from "next/image";
import Link from "next/link";

export function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] border border-gray-200 dark:border-gray-700 py-6">
        <div className="md:flex gap-4">
          <div className="md:w-2/5 relative h-64 md:h-auto ">
            <Image
              src={post.image || "/images/blog/default.jpg"}
              alt={post.title}
              fill
              className="object-cover rounded-md ml-4"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          <div className="p-6 md:w-3/5">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {post.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {post.content?.substring(0, 150)}...
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
