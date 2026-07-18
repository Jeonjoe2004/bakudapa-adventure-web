"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Mountain as MountainIcon, Clock, TrendingUp } from "lucide-react";
import type { Mountain } from "@/types";

const difficultyColors = {
  mudah: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  sedang: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  sulit: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
  ekstrem: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

export function MountainCard({ mountain }: { mountain: Mountain }) {
  return (
    <Link
      href={`/destinasi/${mountain.slug}`}
      className="group block rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={mountain.imageUrl}
          alt={mountain.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-semibold text-lg">{mountain.name}</h3>
          <div className="flex items-center gap-1 text-white/80 text-xs">
            <MapPin className="h-3 w-3" />
            {mountain.location}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {mountain.description}
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
            <MountainIcon className="h-3 w-3" />
            {mountain.elevation} mdpl
          </span>
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
            <Clock className="h-3 w-3" />
            {mountain.estimatedTime}
          </span>
          <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${difficultyColors[mountain.difficulty]}`}>
            <TrendingUp className="h-3 w-3" />
            {mountain.difficulty.charAt(0).toUpperCase() + mountain.difficulty.slice(1)}
          </span>
        </div>
      </div>
    </Link>
  );
}
