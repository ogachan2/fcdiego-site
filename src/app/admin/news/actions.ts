"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin, signOutAdmin } from "@/lib/admin-auth";
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

function getPublishedValue(formData: FormData) {
  return formData.get("isPublished") === "on";
}

export async function createNewsAction(formData: FormData) {
  await requireAdmin();

  const prisma = getPrisma();
  await prisma.news.create({
    data: {
      title: getRequiredString(formData, "title"),
      category: getOptionalString(formData, "category"),
      date: getNewsDate(formData),
      excerpt: getOptionalString(formData, "excerpt"),
      content: getRequiredString(formData, "content"),
      imageUrl: getOptionalString(formData, "imageUrl"),
      isPublished: getPublishedValue(formData),
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
      category: getOptionalString(formData, "category"),
      date: getNewsDate(formData),
      excerpt: getOptionalString(formData, "excerpt"),
      content: getRequiredString(formData, "content"),
      imageUrl: getOptionalString(formData, "imageUrl"),
      isPublished: getPublishedValue(formData),
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
