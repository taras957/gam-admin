import { Link } from '@tanstack/react-router';
import { supabase } from '../../../features/api/superbase';

const SideNav = () => {
  const linkList = [
    {
      name: 'Profile',
      href: '/profile',
    },
    {
      name: 'Store',
      href: '/store',
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
  return (
    <nav>
      <ul>
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

export default SideNav;
