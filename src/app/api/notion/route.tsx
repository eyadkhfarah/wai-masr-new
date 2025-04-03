import { notionForm } from "@/lib/notion";
import { NextRequest, NextResponse } from "next/server";

const NOTION_DATABASE_ID = process.env.YOUR_NOTION_DATABASE_ID;

export async function POST(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await request.json();

    await notionForm.pages.create({
      parent: {
        database_id: NOTION_DATABASE_ID,
      },
      properties: {
        "Full Name": {
          title: [{ text: { content: body.fullName } }],
        },
        Email: {
          email: body.email || "example@example.com",
        },
        Phone: {
          rich_text: [{ text: { content: body.number } }],
        },
        Services: {
          select: {
            name: body.services,
          },
        },
        "Company Name": {
          rich_text: [
            {
              text: {
                content: body.companyName,
              },
            },
          ],
        },
        "Company Size": {
          select: {
            name: body.companySize,
          },
        },
        "Project Description": {
          rich_text: [{ text: { content: body.message } }],
        },
        Subscribed: {
          checkbox: body.subscription,
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
