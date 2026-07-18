"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { MapPin, Mountain as MountainIcon, Clock, TrendingUp, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { mountains } from "@/data/mountains";
import { notFound } from "next/navigation";

const difficultyColors: Record<string, string> = {
  mudah: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  sedang: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  sulit: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
  ekstrem: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

export default function DetailDestinasiPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const mountain = mountains.find((m) => m.slug === slug);

  if (!mountain) {
    notFound();
  }

  return (
    <>
      <section className="relative pt-20">
        <div className="relative h-[50vh] min-h-[400px]">
          <Image
            src={mountain.imageUrl}
            alt={mountain.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
      </section>

      <section className="-mt-32 relative z-10 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/destinasi"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Destinasi
            </Link>

            <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
              <h1 className="text-3xl sm:text-4xl font-bold font-display mb-2">{mountain.name}</h1>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
                <MapPin className="h-4 w-4" />
                {mountain.location}
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm">
                  <MountainIcon className="h-4 w-4 text-forest-500" />
                  {mountain.elevation} mdpl
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm">
                  <Clock className="h-4 w-4 text-forest-500" />
                  {mountain.estimatedTime}
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm ${difficultyColors[mountain.difficulty]}`}>
                  <TrendingUp className="h-4 w-4" />
                  {mountain.difficulty.charAt(0).toUpperCase() + mountain.difficulty.slice(1)}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm">
                  <Calendar className="h-4 w-4 text-forest-500" />
                  {mountain.bestSeason}
                </span>
              </div>

              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="text-base leading-relaxed">{mountain.description}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-sm font-semibold mb-3">Tertarik mendaki gunung ini?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Daftar di waiting list dan dapatkan informasi lengkap tentang jalur pendakian, tips, dan teman mendaki.
                </p>
                <Link href="/waiting-list">
                  <Button className="bg-forest-500 hover:bg-forest-600 text-white">
                    Gabung Waiting List
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
