"use client";

import { BlogList } from "./components/BlogList";
import LatestCard from "./components/LatestCard";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [latestPost, setLatestPost] = useState({});

  useEffect(() => {
    async function fetchLatestPost() {
      try {
        const res = await fetch("/api/entries?latest=true");
        if (res.ok) {
          const data = await res.json();
          setLatestPost(data);
        }
      } catch (error) {
        console.error("Error cargando la entrada más reciente:", error);
      }
    }
    fetchLatestPost();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <LatestCard post={latestPost} />
        </header>

        <main>
          <BlogList />
        </main>
      </div>
    </div>
  );
}
