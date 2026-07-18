"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mountain, Users, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mountains } from "@/data/mountains";
import { MountainCard } from "@/components/features/MountainCard";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const stats = [
  { icon: Mountain, value: "6+", label: "Gunung" },
  { icon: Users, value: "0", label: "Pendaki Terdaftar", soon: true },
  { icon: MapPin, value: "1", label: "Kota Base" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-900/40 to-background z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg.svg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-grid opacity-30 z-20" />

        <div className="relative z-30 mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-forest-400/30 bg-forest-500/10 backdrop-blur-sm px-4 py-1.5 text-sm text-forest-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-400" />
              </span>
              Komunitas Segera Hadir
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-balance leading-tight text-white mb-6"
          >
            Komunitas Pendaki
            <span className="block text-forest-300">Sulawesi Utara</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-earth-200 max-w-2xl mx-auto mb-8"
          >
            Temukan teman mendaki, jelajahi gunung, dan bagikan petualanganmu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/waiting-list">
              <Button size="xl" className="w-full sm:w-auto bg-forest-500 hover:bg-forest-600 text-white">
                Gabung Waiting List
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/destinasi">
              <Button size="xl" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10">
                Jelajahi Destinasi
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        >
          <ChevronDown className="h-6 w-6 text-white/50 animate-bounce" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-forest-500" />
                <div className="text-2xl sm:text-3xl font-bold font-display">
                  {stat.value}
                  {stat.soon && (
                    <span className="text-xs ml-1 text-muted-foreground font-normal">Segera</span>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinasi Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
              Jelajahi Gunung
              <span className="text-forest-500"> Sulawesi Utara</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dari Lokon hingga Klabat, setiap gunung menyimpan petualangan dan keindahan yang menunggu untuk dijelajahi.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mountains.slice(0, 3).map((mountain, i) => (
              <motion.div
                key={mountain.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <MountainCard mountain={mountain} />
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-8">
            <Link href="/destinasi">
              <Button variant="outline" size="lg">
                Lihat Semua Destinasi
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tentang Preview */}
      <section className="py-20 bg-muted/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
                Tentang{" "}
                <span className="text-forest-500">Bakudapa Adventure</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Bakudapa Adventure adalah platform komunitas digital untuk para pendaki gunung di Sulawesi Utara.
                &ldquo;Bakudapa&rdquo; berasal dari bahasa daerah yang berarti &ldquo;bergunung&rdquo; atau &ldquo;mendaki gunung&rdquo;.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Kami percaya bahwa setiap orang berhak menikmati keindahan alam Sulawesi Utara dengan aman dan bersama teman yang tepat.
              </p>
              <Link href="/tentang">
                <Button variant="outline">
                  Baca Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Visi", value: "Menjadi platform komunitas pendaki terdepan di Indonesia Timur" },
                { label: "Misi", value: "Menghubungkan pendaki, melestarikan alam, dan meningkatkan keselamatan pendakian" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-background p-6">
                  <div className="text-sm font-semibold text-forest-500 mb-2">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.value}</div>
                </div>
              ))}
              <div className="rounded-xl border border-border bg-background p-6 col-span-2">
                <div className="text-sm font-semibold text-forest-500 mb-2">Komunitas</div>
                <div className="text-sm text-muted-foreground">Terbuka untuk semua pendaki, dari pemula hingga profesional. Berbagi pengalaman, tips, dan petualangan.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Coming Soon */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-forest-500/20 bg-gradient-to-br from-forest-50 to-earth-50 dark:from-forest-950 dark:to-earth-950 p-8 sm:p-12"
          >
            <Mountain className="h-12 w-12 mx-auto mb-4 text-forest-500" />
            <h2 className="text-3xl font-bold font-display mb-4">Aplikasi Segera Hadir</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Kami sedang mengembangkan aplikasi Bakudapa Adventure untuk Android dan iOS.
              Daftar sekarang dan jadilah orang pertama yang mendapatkan akses.
            </p>
            <Link href="/waiting-list">
              <Button size="xl" className="bg-forest-500 hover:bg-forest-600 text-white">
                Daftar Waiting List
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
