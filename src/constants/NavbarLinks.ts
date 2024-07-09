type TNavbarLinks = {
  path: string;
  RouteName: string;
};
const NavbarLinks: TNavbarLinks[] = [
  { path: "/", RouteName: "Home" },
  { path: "/products", RouteName: "Products" },
  { path: "/about", RouteName: "About" },
];

export default NavbarLinks;
