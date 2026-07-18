# 🌲 Bakudapa Adventure Web

Website resmi **Bakudapa Adventure** — platform komunitas pendaki gunung Sulawesi Utara.

## 🏔️ Tentang

Bakudapa Adventure adalah platform digital untuk menghubungkan para pendaki gunung di Sulawesi Utara. Website ini berfungsi sebagai landing page, blog, dan waiting list untuk aplikasi mobile yang akan datang.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI:** Custom components + Lucide Icons
- **Animasi:** Framer Motion
- **Database:** Supabase (PostgreSQL)
- **Font:** Geist Sans + custom Display font
- **Deployment:** Vercel

## 📁 Struktur Project

```
src/
├── app/                    # App Router pages
│   ├── blog/              # Blog pages
│   ├── destinasi/         # Mountain destination pages
│   ├── tentang/           # About page
│   ├── waiting-list/      # Waiting list form
│   ├── faq/               # FAQ page
│   ├── kontak/            # Contact page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── manifest.ts        # PWA manifest
│   ├── not-found.tsx      # 404 page
│   ├── error.tsx          # Error page
│   └── loading.tsx        # Loading skeleton
├── components/
│   ├── features/          # Feature components (MountainCard, BlogCard)
│   ├── layout/            # Layout components (Navbar, Footer, ThemeProvider)
│   └── ui/                # UI primitives (Button)
├── data/                  # Static data (mountains, blog posts, FAQs)
├── lib/                   # Utilities (supabase client, site config, cn)
├── styles/                # Global CSS
└── types/                 # TypeScript types
```

## 🛠️ Instalasi

```bash
# Clone repositori
git clone https://github.com/bakudapa-adventure/bakudapa-adventure-web.git
cd bakudapa-adventure-web

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local dengan kredensial Supabase
# NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🗄️ Database (Supabase)

1. Buat project di [Supabase](https://supabase.com)
2. Jalankan migrasi di SQL Editor:

```sql
-- Buka supabase/migrations/00001_create_waiting_list.sql
-- Copy paste ke SQL Editor Supabase
```

3. Copy URL dan Anon Key ke `.env.local`

## 🚢 Deploy ke Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bakudapa-adventure/bakudapa-adventure-web)

1. Push repo ke GitHub
2. Import di [Vercel](https://vercel.com)
3. Set environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy!

## 📄 Halaman

| Halaman | Path | Keterangan |
|---------|------|------------|
| Beranda | `/` | Hero, stats, destinasi preview |
| Destinasi | `/destinasi` | Daftar gunung Sulawesi Utara |
| Detail Gunung | `/destinasi/[slug]` | Info detail gunung |
| Blog | `/blog` | Artikel pendakian dengan search & kategori |
| Artikel Blog | `/blog/[slug]` | Detail artikel |
| Tentang | `/tentang` | Visi, misi, nilai komunitas |
| Waiting List | `/waiting-list` | Form pendaftaran (tersimpan ke Supabase) |
| FAQ | `/faq` | Pertanyaan umum |
| Kontak | `/kontak` | Info kontak & form pesan |
| Privacy Policy | `/privacy` | Kebijakan privasi |
| Terms of Service | `/terms` | Ketentuan layanan |

## ✨ Fitur

- ✅ **Responsive** — Mobile first, semua ukuran layar
- ✅ **Dark Mode** — Toggle light/dark
- ✅ **SEO** — Metadata, Open Graph, sitemap.xml, robots.txt, Schema.org
- ✅ **PWA** — Manifest, service worker via Next.js
- ✅ **Animasi** — Framer Motion halus
- ✅ **Optimasi** — Lazy loading, image optimization, code splitting
- ✅ **Aksesibilitas** — Semantic HTML, ARIA labels
- ✅ **Supabase** — Data waiting list tersimpan di PostgreSQL

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan buat PR atau issue.

## 📝 Lisensi

MIT
