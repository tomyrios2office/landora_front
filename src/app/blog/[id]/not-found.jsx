import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Artículo no encontrado
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Lo sentimos, la entrada de blog que estás buscando no existe o ha sido
          eliminada.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Volver al blog
        </Link>
      </div>
    </div>
  );
}
