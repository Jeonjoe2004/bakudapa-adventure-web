"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe, Music, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export default function KontakPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="pt-28 pb-12 bg-muted/50 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold font-display mb-4">
              Hubungi Kami
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Punya pertanyaan, saran, atau ingin berkolaborasi? Kami siap mendengar!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <h2 className="text-lg font-semibold mb-6">Informasi Kontak</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-forest-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Lokasi</p>
                      <p className="text-sm text-muted-foreground">Tomohon, Sulawesi Utara</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-forest-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <a href={`mailto:${siteConfig.links.email}`} className="text-sm text-forest-500 hover:underline">
                        {siteConfig.links.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-forest-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">WhatsApp</p>
                      <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-forest-500 hover:underline">
                        Chat via WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-forest-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Instagram</p>
                      <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-forest-500 hover:underline">
                        @bakudapa.adventure
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Music className="h-5 w-5 text-forest-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">TikTok</p>
                      <a href={siteConfig.links.tiktok} target="_blank" rel="noopener noreferrer" className="text-sm text-forest-500 hover:underline">
                        @bakudapa.adventure
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {sent ? (
                <div className="rounded-xl border border-border bg-card p-6 sm:p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
                  <Send className="h-12 w-12 text-forest-500 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Pesan Terkirim!</h3>
                  <p className="text-sm text-muted-foreground">Terima kasih, kami akan menghubungi kamu segera.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 sm:p-8 space-y-4">
                  <h2 className="text-lg font-semibold mb-2">Kirim Pesan</h2>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Nama</label>
                    <input id="name" type="text" required placeholder="Nama lengkap" className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input id="email" type="email" required placeholder="email@contoh.com" className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Pesan</label>
                    <textarea id="message" required rows={4} placeholder="Tulis pesan..." className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                  </div>

                  <Button type="submit" className="w-full bg-forest-500 hover:bg-forest-600 text-white">
                    <Send className="h-4 w-4" />
                    Kirim Pesan
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
