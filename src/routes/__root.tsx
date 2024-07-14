import { createRootRoute,  Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import SideNav from '../components/layout/sideNav/sideNav'


export const Route = createRootRoute({
  component: () => (
    <>
    <SideNav />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
