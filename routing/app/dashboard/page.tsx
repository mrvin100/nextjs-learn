import * as React from "react";

export default function Dashboard() {
  return (
    <div className="border rounded-md align-top ml-4 w-[calc(100%-17rem)] h-full inline-grid p-4">
      <h1 className="text-center">Hello, Dashboard Page!</h1>
      <div className="grid grid-cols-2 gap-3">
        <React.Suspense fallback={<p>Loading feed...</p>}>
          <section className="border h-64 p-4 rounded-sm">Post feed</section>
        </React.Suspense>
        <React.Suspense fallback={<p>Loading weather...</p>}>
          <section className="border h-64 p-4 rounded-sm">Weather</section>
        </React.Suspense>
      </div>
    </div>
  );
}
