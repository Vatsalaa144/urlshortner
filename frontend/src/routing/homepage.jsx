import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import HomePage from "../pages/HomePage"
import ProtectedRoute from "../components/ProtectedRoute"

export const homePageRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  })
