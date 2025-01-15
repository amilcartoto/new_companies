import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const matcher = createRouteMatcher( ["/", "/dashboard(.*)"]);


export default clerkMiddleware((auth, req) => {
  if (matcher(req)) {
      return auth().then(({userId, redirectToSignIn}) => {
      if (!userId) {
        return redirectToSignIn();
      }
    })
  }
  return Promise.resolve();
});



export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
  };
