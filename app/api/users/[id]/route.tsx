import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

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
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(request: NextRequest, { params }: UserId) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({});
}
