import { randomUUID } from "node:crypto";
import { createClient } from "@supabase/supabase-js";

const NEWS_IMAGE_BUCKET = "news-images";
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

function getSupabaseAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required for image uploads.",
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

function getFileExtension(file: File) {
  const extension = file.name.split(".").pop()?.toLowerCase();

  if (extension && /^[a-z0-9]+$/.test(extension)) {
    return extension;
  }

  if (file.type === "image/png") return "png";
  if (file.type === "image/webp") return "webp";

  return "jpg";
}

export async function uploadNewsImage(file: File) {
  if (file.size === 0) {
    return null;
  }

  if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
    throw new Error("画像は JPG / PNG / WebP のみアップロードできます。");
  }

  if (file.size > MAX_IMAGE_SIZE) {
    throw new Error("画像サイズは5MB以下にしてください。");
  }

  const supabase = getSupabaseAdminClient();
  const extension = getFileExtension(file);
  const path = `${new Date().getFullYear()}/${randomUUID()}.${extension}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage.from(NEWS_IMAGE_BUCKET).upload(path, buffer, {
    contentType: file.type,
    upsert: false,
  });

  if (error) {
    throw new Error(`画像アップロードに失敗しました: ${error.message}`);
  }

  const { data } = supabase.storage.from(NEWS_IMAGE_BUCKET).getPublicUrl(path);

  return data.publicUrl;
}
