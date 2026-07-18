"use client";

import { motion } from "framer-motion";
import { Mountain, Users, Shield, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Users,
    title: "Kebersamaan",
    desc: "Mendaki lebih seru bersama. Kami membangun komunitas yang saling mendukung.",
  },
  {
    icon: Shield,
    title: "Keselamatan",
    desc: "Keselamatan adalah prioritas. Setiap pendaki harus siap dan waspada.",
  },
  {
    icon: Heart,
    title: "Cinta Alam",
    desc: "Menjaga kelestarian gunung adalah tanggung jawab kita bersama.",
  },
  {
    icon: Mountain,
    title: "Petualangan",
    desc: "Setiap gunung punya cerita. Jelajahi, nikmati, dan bagikan pengalamanmu.",
  },
];

export default function TentangPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-muted/50 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold font-display mb-4">
              Tentang{" "}
              <span className="text-forest-500">Bakudapa Adventure</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Bakudapa Adventure lahir dari kecintaan terhadap gunung-gunung Sulawesi Utara.
              Kami ingin menghubungkan para pendaki, berbagi pengetahuan, dan membangun komunitas
              yang peduli akan keselamatan dan kelestarian alam.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold font-display mb-4">Cerita Kami</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              &ldquo;Bakudapa&rdquo; berasal dari bahasa daerah Sulawesi Utara yang berarti &ldquo;bergunung&rdquo;
              atau kegiatan mendaki gunung. Berawal dari sekelompok kecil pendaki di Tomohon, kami
              merasakan perlunya sebuah wadah digital yang bisa menghubungkan para pencinta alam
              di seluruh Sulawesi Utara.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Website ini adalah langkah awal kami. Kedepannya, Bakudapa Adventure akan hadir
              sebagai aplikasi mobile yang memudahkan kamu mencari teman mendaki, melihat informasi
              gunung terkini, dan berbagi petualangan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold font-display mb-6">Visi &amp; Misi</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-forest-500 mb-2">Visi</h3>
                <p className="text-sm text-muted-foreground">
                  Menjadi platform komunitas pendaki terdepan di Indonesia Timur yang
                  menghubungkan, mengedukasi, dan menginspirasi pecinta alam.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-forest-500 mb-2">Misi</h3>
                <p className="text-sm text-muted-foreground">
                  Menghubungkan pendaki dari berbagai latar belakang, menyediakan informasi
                  akurat tentang gunung dan jalur pendakian, serta meningkatkan kesadaran akan
                  keselamatan dan kelestarian alam.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold font-display mb-6 text-center">Nilai Komunitas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="rounded-xl border border-border bg-card p-6 text-center">
                  <v.icon className="h-8 w-8 mx-auto mb-3 text-forest-500" />
                  <h3 className="font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold font-display mb-4">Bergabunglah!</h2>
            <p className="text-muted-foreground mb-6">
              Jadilah bagian dari komunitas pendaki Sulawesi Utara.
            </p>
            <Link href="/waiting-list">
              <Button size="lg" className="bg-forest-500 hover:bg-forest-600 text-white">
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
