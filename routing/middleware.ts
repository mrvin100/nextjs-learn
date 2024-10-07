import { NextRequest, NextResponse } from "next/server";
import { get } from "@vercel/edge-config";
import GeneretedBloomFilter from "./redirects/bloom-filter.json";

type RedirectEntry = {
  destination: string;
  permanent: boolean;
};

export function middleware1(request: NextRequest) {
  const isAuthenticated = authenticate(request);

  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next();
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL("/login", request.null));
}
export const config = {
  matcher: "/dashboard/:path*",
};

// 1. creating and storing a redirect map

export async function middleware2(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const redirectData = await get(pathname);

  if (redirectData && typeof redirectData === "string") {
    const redirectEntry: RedirectEntry = JSON.parse(redirectData);
    const statusCode = redirectEntry.permanent ? 308 : 307;
    return NextResponse.redirect(redirectEntry.destination, statusCode);
  }

  // No redirect found, continue without redirecting
  return NextResponse.next();
}

// 2. Optimising data loukup performance

// Initialize bloom filter from a generated JSON file
const bloomFilter = ScalableBloomFilter.fromJSON(GeneretedBloomFilter as any);
export async function middleware(request: NextRequest) {
  // Get the path for the incomming request
  const pathname = request.nextUrl.pathname;

  // Check if path is in bloom filter
  if (bloomFilter.has(pathname)) {
    // Forward the pathname to the Route Handler
    const api = new URL(
      `/api/redirects?pathname=${encodeURIComponent(request.nextUrl.pathname)}`,
      request.nextUrl.origin
    );
    try {
      // Fetch redirect data from the Route Handler
      const redirectData = await fetch(api);

      if (redirectData.ok) {
        const redirectEntry: RedirectEntry | undefined =
          await redirectData.json();
        if (redirectEntry) {
          // Determine the status code
          const statusCode = redirectEntry.permanent ? 308 : 307;
          // Redirect to the dstination
          return NextResponse.redirect(redirectEntry.destination, statusCode);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  // No redirect found, continue the request without redirecting
  return NextResponse.next();
}
