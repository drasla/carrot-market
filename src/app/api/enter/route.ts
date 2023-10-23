import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
    if (req.method !== "POST") {
        return NextResponse.json({ message: "Not allow method" }, { status: 400 });
    }
    console.log(req.body.email);
    return NextResponse.json({ message: "ok" }, { status: 200 });
}
