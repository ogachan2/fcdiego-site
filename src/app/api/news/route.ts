import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";


// ==== GET: 全ニュースを取得 ====
export async function GET() {
  try {
    const news = await prisma.news.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(news);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}

// ==== POST: ニュース投稿 ====
export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();

    if (!title || !content) {
      return NextResponse.json(
        { error: "title と content は必須です" },
        { status: 400 }
      );
    }

    const created = await prisma.news.create({
      data: { title, content },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to create news" }, { status: 500 });
  }
}
