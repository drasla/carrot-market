import { NextRequest, NextResponse } from "next/server";

export default function withHandler(
    method: "GET" | "POST" | "DELETE",
    fn: (req: NextRequest, res: NextResponse) => void,
) {
    return function (req: NextRequest, res: NextResponse) {
        try {
            fn(req, res);
        } catch (e) {
            return NextResponse.json({ error: e }, { status: 500 });
        }
    };
}
