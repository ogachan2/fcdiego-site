"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin, signOutAdmin } from "@/lib/admin-auth";
import { normalizeNewsCategory } from "@/lib/news-categories";
import { uploadNewsImage } from "@/lib/news-images";
import { getPrisma } from "@/lib/prisma";

function getRequiredString(formData: FormData, key: string) {
  const value = String(formData.get(key) || "").trim();

  if (!value) {
    throw new Error(`${key} is required.`);
  }

  return value;
}

function getOptionalString(formData: FormData, key: string) {
  const value = String(formData.get(key) || "").trim();

  return value || null;
}

function getNewsDate(formData: FormData) {
  const value = String(formData.get("date") || "").trim();

  if (!value) {
    return new Date();
  }

  return new Date(`${value}T00:00:00.000+09:00`);
}

function getPublishStatus(formData: FormData) {
  return formData.get("status") === "published";
}

async function getImageUrl(formData: FormData) {
  const image = formData.get("image");
  const existingImageUrl = getOptionalString(formData, "existingImageUrl");
  const removeImage = formData.get("removeImage") === "on";

  if (image instanceof File && image.size > 0) {
    return uploadNewsImage(image);
  }

  if (removeImage) {
    return null;
  }

  return existingImageUrl;
}

export async function createNewsAction(formData: FormData) {
  await requireAdmin();

  const prisma = getPrisma();
  await prisma.news.create({
    data: {
      title: getRequiredString(formData, "title"),
      category: normalizeNewsCategory(formData.get("category")),
      date: getNewsDate(formData),
      content: getRequiredString(formData, "content"),
      imageUrl: await getImageUrl(formData),
      isPublished: getPublishStatus(formData),
    },
  });

  revalidatePath("/news");
  revalidatePath("/admin/news");
  redirect("/admin/news");
}

export async function updateNewsAction(id: number, formData: FormData) {
  await requireAdmin();

  const prisma = getPrisma();
  await prisma.news.update({
    where: { id },
    data: {
      title: getRequiredString(formData, "title"),
      category: normalizeNewsCategory(formData.get("category")),
      date: getNewsDate(formData),
      content: getRequiredString(formData, "content"),
      imageUrl: await getImageUrl(formData),
      isPublished: getPublishStatus(formData),
    },
  });

  revalidatePath("/news");
  revalidatePath(`/news/${id}`);
  revalidatePath("/admin/news");
  redirect("/admin/news");
}

export async function deleteNewsAction(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));

  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Invalid news id.");
  }

  const prisma = getPrisma();
  await prisma.news.delete({
    where: { id },
  });

  revalidatePath("/news");
  revalidatePath(`/news/${id}`);
  revalidatePath("/admin/news");
}

export async function logoutAction() {
  await signOutAdmin();
  redirect("/admin/login");
}
