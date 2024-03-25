import { NextRequest, NextResponse } from "next/server";

type UserId = {
  params: { id: number };
};

export function GET(request: NextRequest, { params }: UserId) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Leanne Graham" });
}

export async function PUT(request: NextRequest, { params }: UserId) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}
