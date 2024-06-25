import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    },
  );

  const { data, error } = await supabase.auth.getUser();

  const authRoutes = ["/auth/sign-in", "/auth/sign-up"];
  const pathname = request.nextUrl.pathname;

  const isAuthRoute = authRoutes.some((path) => pathname.startsWith(path));

  // Redirect logged-in users away from auth routes
  if (isAuthRoute && data.user) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect logged-out users to the sign-in page only if they are not on an auth route
  if (!isAuthRoute && (!data.user || error)) {
    // The default redirect is to the sign-in page
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  return response;
}
