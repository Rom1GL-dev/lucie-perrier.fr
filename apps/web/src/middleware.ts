import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { routes } from '@/config/routes.config';

const protectedRoutes = [
  routes.admin.dashboard.getHref(),
  routes.admin.blog.getHref()
];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route)
  );
  if (isProtectedRoute) {
    const cookie = (await cookies()).get('sessionId')?.value;

    if (!cookie) {
      return NextResponse.redirect(
        new URL(routes.admin.login.getHref(), req.nextUrl)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!usecases|_next|.*\\..*).*)']
};
