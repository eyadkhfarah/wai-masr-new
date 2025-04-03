import { notionForm } from "@/lib/notion";
import { NextRequest, NextResponse } from "next/server";

const NOTION_EMAIL_DATABASE_ID = process.env.YOUR_NOTION_EMAIL_DATABASE_ID;

export async function POST(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await request.json();

    await notionForm.pages.create({
      parent: {
        database_id: NOTION_EMAIL_DATABASE_ID,
      },
      properties: {
        Email: {
          email: body.email || "example@example.com",
        },
      },
    });

    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch (error) {
    console.error(error); // Log the error for debugging

    return NextResponse.json(
      { error: "Failed to create page" },
      { status: 500 }
    );
  }
}
