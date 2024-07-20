import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import SideNav from '../components/layout/sideNav/sideNav';
import { withAuth } from '../features/auth';

const AuthLayout = withAuth(() => (
  <>
    <SideNav />
    <div className="md:container md:mx-auto">
      <Outlet />
    </div>
    <TanStackRouterDevtools />
  </>
));

export const Route = createRootRoute({
  component: () => <AuthLayout />,
});
