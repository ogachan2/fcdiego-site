import { getPrisma } from "@/lib/prisma";

export async function getPublishedNewsList() {
  const prisma = getPrisma();

  return prisma.news.findMany({
    where: { isPublished: true },
    orderBy: [{ date: "desc" }, { createdAt: "desc" }],
  });
}

export async function getPublishedNewsById(id: number) {
  const prisma = getPrisma();

  return prisma.news.findFirst({
    where: {
      id,
      isPublished: true,
    },
  });
}

export async function getAdminNewsList() {
  const prisma = getPrisma();

  return prisma.news.findMany({
    orderBy: [{ date: "desc" }, { createdAt: "desc" }],
  });
}

export async function getAdminNewsById(id: number) {
  const prisma = getPrisma();

  return prisma.news.findUnique({
    where: { id },
  });
}

export function formatNewsDate(date: Date) {
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
