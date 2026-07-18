"use client";

import { motion } from "framer-motion";
import { mountains } from "@/data/mountains";
import { MountainCard } from "@/components/features/MountainCard";

export default function DestinasiPage() {
  return (
    <>
      <section className="pt-28 pb-12 bg-muted/50 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold font-display mb-4">
              Destinasi{" "}
              <span className="text-forest-500">Pendakian</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Jelajahi gunung-gunung terindah di Sulawesi Utara. Temukan jalur, tips, dan cerita dari para pendaki.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mountains.map((mountain, i) => (
              <motion.div
                key={mountain.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <MountainCard mountain={mountain} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
