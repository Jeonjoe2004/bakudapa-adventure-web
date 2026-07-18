import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mountain as MountainIcon, Clock, TrendingUp, Calendar, ArrowLeft } from "lucide-react";
import { mountains } from "@/data/mountains";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";
import { MountainMap } from "@/components/features/MountainMap";

export function generateStaticParams() {
  return mountains.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const mountain = mountains.find((m) => m.slug === slug);
    if (!mountain) return { title: "Tidak Ditemukan" };
    return {
      title: mountain.name,
      description: mountain.description,
      openGraph: {
        title: `${mountain.name} | Bakudapa Adventure`,
        description: mountain.description,
        images: [{ url: mountain.imageUrl, width: 1200, height: 630, alt: mountain.name }],
      },
    };
  });
}

const difficultyColors = {
  mudah: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  sedang: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  sulit: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
  ekstrem: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

export default async function MountainDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mountain = mountains.find((m) => m.slug === slug);

  if (!mountain) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: mountain.name,
    description: mountain.description,
    address: { "@type": "PostalAddress", addressLocality: mountain.location },
    geo: {
      "@type": "GeoCoordinates",
      latitude: mountain.latitude,
      longitude: mountain.longitude,
    },
    maximumAttendeeCapacity: mountain.elevation,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={mountain.imageUrl}
          alt={mountain.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <Link
              href="/destinasi"
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Destinasi
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-2">
              {mountain.name}
            </h1>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="h-4 w-4" />
              <span>{mountain.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-8 border-b border-border bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-card rounded-xl border border-border p-4 text-center">
              <MountainIcon className="h-6 w-6 text-forest-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">{mountain.elevation}</p>
              <p className="text-xs text-muted-foreground">mdpl</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4 text-center">
              <Clock className="h-6 w-6 text-forest-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">{mountain.estimatedTime}</p>
              <p className="text-xs text-muted-foreground">Estimasi Pendakian</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4 text-center">
              <TrendingUp className="h-6 w-6 text-forest-500 mx-auto mb-2" />
              <p className="text-lg font-bold capitalize">{mountain.difficulty}</p>
              <p className="text-xs text-muted-foreground">Tingkat Kesulitan</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4 text-center">
              <Calendar className="h-6 w-6 text-forest-500 mx-auto mb-2" />
              <p className="text-sm font-bold">{mountain.bestSeason}</p>
              <p className="text-xs text-muted-foreground">Musim Terbaik</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold font-display mb-4">Tentang {mountain.name}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {mountain.description}
            </p>

            <div className="mt-8">
              <h3 className="font-semibold mb-3">📍 Peta Lokasi</h3>
              <MountainMap
                latitude={mountain.latitude}
                longitude={mountain.longitude}
                name={mountain.name}
                mapQuery={mountain.mapQuery}
              />
            </div>

            <div className="mt-8">
              <Link
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-forest-600 transition-colors"
              >
                Tanyakan Pendakian via WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
