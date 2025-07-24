import { getAllImages } from "@/lib/getAllImages";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const folder = req.nextUrl.searchParams.get("folder");

  if (!folder) {
    return NextResponse.json({ error: "Missing folder" }, { status: 400 });
  }

  try {
    const images = await getAllImages(folder);
    return NextResponse.json(images);
  } catch {
    return NextResponse.json({ error: "Failed to read images" }, { status: 500 });
  }
}