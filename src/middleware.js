import { NextResponse } from "next/server"

export const middleware = (req) => {
    const url = req.nextUrl

    if (url.pathname === "/private") {
        return NextResponse.redirect(new URL("/", req.url))
    }

    return NextResponse.next()
}
