import Link from "next/link";
import { Mountain, Globe, Music, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-earth-50 dark:bg-earth-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-forest-600 dark:text-forest-400">
              <Mountain className="h-6 w-6" />
              <span className="font-display">Bakudapa Adventure</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Komunitas pendaki gunung Sulawesi Utara. Temukan teman mendaki, jelajahi gunung, dan bagikan petualanganmu.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/destinasi" className="hover:text-foreground transition-colors">Destinasi</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/tentang" className="hover:text-foreground transition-colors">Tentang</Link></li>
              <li><Link href="/waiting-list" className="hover:text-foreground transition-colors">Waiting List</Link></li>
              <li><Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link href="/kontak" className="hover:text-foreground transition-colors">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Ikuti Kami</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Globe className="h-4 w-4" /> Instagram
                </a>
              </li>
              <li>
                <a href={siteConfig.links.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Music className="h-4 w-4" /> TikTok
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.links.email}`} className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" /> {siteConfig.links.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
