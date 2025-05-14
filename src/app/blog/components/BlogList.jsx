"use client";

import { useState, useEffect } from "react";
import { BlogCard } from "./BlogCard";

export function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/entries");
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        }
      } catch (error) {
        console.error("Error cargando entradas:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Cargando entradas...</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-10">
        No hay entradas de blog disponibles.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
