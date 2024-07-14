import { Link } from "@tanstack/react-router";

const SideNav = () => {
  const linkList = [
    {
      name: "Profile",
      href: "/profile",
    },
    {
      name: "Store",
      href: "/store",
    },
    {
      name: "Logout",
      href: "/logout",
    },
  ];
  return (
    <nav>
      <ul>
        {linkList.map((link) => (
          <li key={link.href}>
            <Link to={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
