"use server";

import { supabase } from "@/lib/supabase";

export interface WaitingListFormState {
  success: boolean;
  error: string | null;
}

export async function submitWaitingList(
  _prev: WaitingListFormState,
  formData: FormData
): Promise<WaitingListFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const whatsapp = formData.get("whatsapp")?.toString().trim();
  const kota = formData.get("kota")?.toString().trim();

  // Validate required fields
  if (!name || !email || !whatsapp || !kota) {
    return { success: false, error: "Semua field wajib diisi." };
  }

  if (name.length > 100) {
    return { success: false, error: "Nama terlalu panjang." };
  }

  if (kota.length > 50) {
    return { success: false, error: "Nama kota terlalu panjang." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Format email tidak valid." };
  }

  // Basic phone validation (Indonesian numbers)
  const phoneRegex = /^[\d\s\-+()]{8,15}$/;
  if (!phoneRegex.test(whatsapp)) {
    return { success: false, error: "Format nomor WhatsApp tidak valid." };
  }

  // Check for duplicate email
  const { data: existing } = await supabase
    .from("waiting_list")
    .select("id")
    .eq("email", email)
    .limit(1);

  if (existing && existing.length > 0) {
    return { success: false, error: "Email ini sudah terdaftar di waiting list." };
  }

  // Insert
  const { error } = await supabase
    .from("waiting_list")
    .insert([{ name, email, whatsapp, kota }]);

  if (error) {
    if (error.code === "23505") {
      return { success: false, error: "Email ini sudah terdaftar di waiting list." };
    }
    return { success: false, error: "Gagal mendaftar. Silakan coba lagi." };
  }

  return { success: true, error: null };
}
