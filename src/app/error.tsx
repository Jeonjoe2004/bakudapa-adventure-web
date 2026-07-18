"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-4"
      >
        <AlertTriangle className="h-16 w-16 mx-auto mb-4 text-destructive" />
        <h1 className="text-4xl font-bold font-display mb-2">Terjadi Kesalahan</h1>
        <p className="text-muted-foreground mb-8">
          Maaf, terjadi kesalahan yang tidak terduga. Silakan coba lagi.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset}>
            <RefreshCw className="h-4 w-4" />
            Coba Lagi
          </Button>
          <Link href="/">
            <Button variant="outline">
              <Home className="h-4 w-4" />
              Beranda
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
