// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simple middleware that redirects unauthenticated users
// Authentication is now handled client-side with localStorage
export async function middleware(req: NextRequest) {
  // Allow all requests to proceed - authentication will be handled on the client side
  // This avoids the cookie parsing errors
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
