"use client";

import { motion } from "framer-motion";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2 } from "lucide-react";
import { submitWaitingList, type WaitingListFormState } from "@/app/actions/waiting-list";

const initialState: WaitingListFormState = { success: false, error: null };

export default function WaitingListPage() {
  const [state, formAction, isPending] = useActionState(submitWaitingList, initialState);

  if (state.success) {
    return (
      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-lg px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle className="h-16 w-16 mx-auto mb-4 text-forest-500" />
            <h1 className="text-3xl font-bold font-display mb-4">Terima Kasih!</h1>
            <p className="text-muted-foreground text-lg">
              Kamu akan menjadi orang pertama yang mendapatkan akses aplikasi Bakudapa Adventure.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-28 pb-12 bg-muted/50 border-b border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold font-display mb-4">
              Waiting List
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Daftar sekarang dan jadilah orang pertama yang mendapatkan akses aplikasi Bakudapa Adventure.
              Cukup isi form di bawah ini.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-md px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-border bg-card p-6 sm:p-8"
          >
            <form action={formAction} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                  Nama Lengkap <span className="text-destructive">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Masukkan nama lengkap"
                  className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="contoh@email.com"
                  className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium mb-1.5">
                  Nomor WhatsApp <span className="text-destructive">*</span>
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="0812xxxxxx"
                  className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="kota" className="block text-sm font-medium mb-1.5">
                  Kota <span className="text-destructive">*</span>
                </label>
                <input
                  id="kota"
                  name="kota"
                  type="text"
                  required
                  placeholder="Kota asal"
                  className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {state.error && (
                <p className="text-sm text-destructive">{state.error}</p>
              )}

              <Button
                type="submit"
                disabled={isPending}
                size="lg"
                className="w-full bg-forest-500 hover:bg-forest-600 text-white"
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Mendaftarkan...
                  </>
                ) : (
                  "Daftar Waiting List"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
