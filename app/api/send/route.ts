import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailRequestBody {
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: EmailRequestBody = await req.json();
    const { email, subject, message } = body;
    
    console.log(email, subject, message);
    
    const data = await resend.emails.send({
      from: `Abdul <${email}>`,
      to: ["mobolaji2309@gmail.com"],
      subject: subject,
      react: React.createElement(
        React.Fragment,
        null,
        React.createElement("h1", null, subject),
        React.createElement("p", null, "Thank you for contacting us!"),
        React.createElement("p", null, "New message submitted:"),
        React.createElement("p", null, message)
      ),
    });
    
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to send email" },
      { status: 500 }
    );
  }
}

