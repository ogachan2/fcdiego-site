import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";
import { getPrisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const title = String(body.title || "").trim();
    const content = String(body.content || "").trim();

    if (!title || !content) {
      return NextResponse.json(
        { error: "title and content are required" },
        { status: 400 },
      );
    }

    const prisma = getPrisma();
    const news = await prisma.news.create({
      data: {
        title,
        content,
        category: body.category ? String(body.category).trim() : null,
        excerpt: body.excerpt ? String(body.excerpt).trim() : null,
        imageUrl: body.imageUrl ? String(body.imageUrl).trim() : null,
        isPublished: Boolean(body.isPublished),
        date: body.date ? new Date(String(body.date)) : new Date(),
      },
    });

    return NextResponse.json(news);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}
