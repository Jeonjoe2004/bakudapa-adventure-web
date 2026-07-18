"use server";

import { supabase } from "@/lib/supabase";

export interface ContactFormState {
  success: boolean;
  error: string | null;
}

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, error: "Semua field wajib diisi." };
  }

  if (name.length > 100) {
    return { success: false, error: "Nama terlalu panjang." };
  }

  if (message.length > 2000) {
    return { success: false, error: "Pesan terlalu panjang (maks 2000 karakter)." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Format email tidak valid." };
  }

  const { error } = await supabase.from("messages").insert([{ name, email, message }]);

  if (error) {
    return { success: false, error: "Gagal mengirim pesan. Silakan coba lagi." };
  }

  return { success: true, error: null };
}
