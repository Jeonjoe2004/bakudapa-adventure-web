"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mountain, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-4"
      >
        <Mountain className="h-16 w-16 mx-auto mb-4 text-forest-500" />
        <h1 className="text-6xl font-bold font-display mb-2">404</h1>
        <p className="text-xl text-muted-foreground mb-2">Halaman Tidak Ditemukan</p>
        <p className="text-sm text-muted-foreground mb-8">
          Sepertinya kamu tersesat di jalur pendakian yang salah.
        </p>
        <Link href="/">
          <Button>
            <Home className="h-4 w-4" />
            Kembali ke Beranda
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
