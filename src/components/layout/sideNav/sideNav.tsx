import { Link } from '@tanstack/react-router';
import { supabase } from '../../../features/api/superbase';

const linkList = [
  {
    name: 'Profile',
    href: '/profile',
  },
  {
    name: 'Manage Users',
    href: '/manage-users',
  },
  {
    name: 'Logout',
    href: '/logout',
    onClick: async () => {
      await supabase.auth.signOut();
      //dispatch error to store
    },
  },
];

export const SideNav = () => {
  return (
    <nav>
      <ul className="menu bg-base-300 rounded-box w-56 h-screen py-8">
        {linkList.map((link) => (
          <li key={link.href}>
            <Link to={link.href} {...link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
