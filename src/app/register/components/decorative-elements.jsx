"use client";

export function DecorativeElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient circles */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-full animate-pulse [animation-duration:4s]" />
      </div>
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full">
        <div className="w-full h-full bg-gradient-to-tl from-primary/10 to-transparent rounded-full animate-pulse [animation-duration:6s]" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
    </div>
  );
}
