"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <>
      <section className="pt-28 pb-12 bg-muted/50 border-b border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold font-display mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Terakhir diperbarui: 1 Januari 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-sm sm:prose-base max-w-none dark:prose-invert">
          <h2>1. Penerimaan Ketentuan</h2>
          <p>Dengan menggunakan website Bakudapa Adventure, Anda menyetujui ketentuan layanan ini. Jika Anda tidak setuju, jangan gunakan layanan kami.</p>

          <h2>2. Deskripsi Layanan</h2>
          <p>Bakudapa Adventure adalah platform komunitas digital untuk pendaki gunung di Sulawesi Utara. Kami menyediakan informasi, wadah komunikasi, dan fitur-fitur pendukung kegiatan pendakian.</p>

          <h2>3. Pendaftaran Waiting List</h2>
          <p>Dengan mendaftar di waiting list, Anda menyetujui untuk menerima komunikasi dari kami terkait pengembangan aplikasi. Anda dapat berhenti berlangganan kapan saja.</p>

          <h2>4. Penggunaan yang Diizinkan</h2>
          <p>Anda setuju untuk menggunakan website ini dengan tujuan yang sah dan tidak melanggar hukum yang berlaku di Indonesia.</p>

          <h2>5. Kekayaan Intelektual</h2>
          <p>Seluruh konten, desain, logo, dan materi di website ini adalah milik Bakudapa Adventure dan dilindungi hak cipta.</p>

          <h2>6. Batasan Tanggung Jawab</h2>
          <p>Informasi tentang gunung dan pendakian disediakan sebagai referensi. Keselamatan tetap menjadi tanggung jawab pribadi pendaki. Selalu cek kondisi terkini sebelum mendaki.</p>

          <h2>7. Perubahan Layanan</h2>
          <p>Kami berhak mengubah, menangguhkan, atau menghentikan layanan kapan saja tanpa pemberitahuan sebelumnya.</p>

          <h2>8. Hukum yang Berlaku</h2>
          <p>Ketentuan ini diatur oleh hukum Republik Indonesia. Setiap sengketa akan diselesaikan di pengadilan yang berwenang di Sulawesi Utara.</p>

          <h2>9. Kontak</h2>
          <p>Untuk pertanyaan tentang ketentuan layanan, hubungi kami di halo@bakudapa.my.id</p>
        </div>
      </section>
    </>
  );
}
