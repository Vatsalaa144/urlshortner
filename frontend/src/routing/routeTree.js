import { createRootRoute } from "@tanstack/react-router"
import { homePageRoute } from "./homepage.jsx"
import { authRoute } from "./auth.route.js"
import { dasboardRoute } from "./dashboard.jsx"
import { landingRoute } from "./landing.jsx"
import RootLayout from "../RootLayout"

export const rootRoute = createRootRoute({
    component: RootLayout
})

export const routeTree =rootRoute.addChildren([
    landingRoute,  // Landing page for unauthenticated users
    authRoute,     // Auth page
    homePageRoute, // Protected home page (URL shortener)
    dasboardRoute  // Protected dashboard
])
