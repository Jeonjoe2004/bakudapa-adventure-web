"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-28 pb-12 bg-muted/50 border-b border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold font-display mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Terakhir diperbarui: 1 Januari 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-sm sm:prose-base max-w-none dark:prose-invert">
          <h2>1. Informasi yang Kami Kumpulkan</h2>
          <p>Kami mengumpulkan informasi yang Anda berikan secara sukarela saat mendaftar waiting list, termasuk nama, email, nomor WhatsApp, dan kota asal.</p>

          <h2>2. Penggunaan Informasi</h2>
          <p>Informasi yang kami kumpulkan digunakan untuk:</p>
          <ul>
            <li>Mengirimkan informasi terkait pengembangan aplikasi Bakudapa Adventure</li>
            <li>Memberikan update dan notifikasi penting</li>
            <li>Meningkatkan layanan kami</li>
          </ul>

          <h2>3. Perlindungan Data</h2>
          <p>Kami menjaga keamanan data Anda dengan langkah-langkah keamanan teknis yang sesuai standar industri. Data Anda disimpan di server yang aman dengan akses terbatas.</p>

          <h2>4. Pembagian Data</h2>
          <p>Kami tidak menjual, menukar, atau membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan, kecuali diwajibkan oleh hukum.</p>

          <h2>5. Hak Anda</h2>
          <p>Anda berhak untuk mengakses, mengoreksi, atau menghapus data pribadi Anda setiap saat dengan menghubungi kami melalui email yang tercantum di halaman Kontak.</p>

          <h2>6. Perubahan Kebijakan</h2>
          <p>Kebijakan privasi ini dapat diperbarui sewaktu-waktu. Perubahan akan diumumkan melalui website ini.</p>

          <h2>7. Kontak</h2>
          <p>Jika ada pertanyaan tentang kebijakan privasi ini, hubungi kami di halo@bakudapa.my.id</p>
        </div>
      </section>
    </>
  );
}
