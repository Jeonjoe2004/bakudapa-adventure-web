"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body className="bg-background text-foreground min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold font-display mb-4">Terjadi Kesalahan</h1>
          <p className="text-muted-foreground mb-6">Kesalahan kritis pada aplikasi.</p>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground"
          >
            Coba Lagi
          </button>
        </div>
      </body>
    </html>
  );
}
