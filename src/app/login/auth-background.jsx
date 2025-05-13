export function AuthBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-white dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900" />

      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1a237e_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl" />
      </div>
    </>
  );
}
