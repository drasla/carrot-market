import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";
import client from "../../../libs/server/client";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

export async function POST(req: NextRequest) {
    const { phone, email } = await req.json();
    const user = phone ? { phone: +phone } : email ? { email } : null;
    if (!user) return NextResponse.json({ ok: false }, { status: 400 });
    const payload = Math.floor(100000 + Math.random() * 900000) + "";
    const token = await client.token.create({
        data: {
            payload,
            user: {
                connectOrCreate: {
                    where: {
                        ...user,
                    },
                    create: {
                        name: "Anonymous",
                        ...user,
                    },
                },
            },
        },
    });

    if (phone) {
        const message = await twilioClient.messages.create({
            messagingServiceSid: process.env.TWILIO_MSID,
            to: process.env.MY_PHONE || "",
            body: `Your login token is ${payload}`,
        });
        console.log(message);
    }

    return NextResponse.json({ ok: true });
}
