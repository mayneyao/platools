import Link from "next/link";

const NavLink = ({
  href,
  children,
  ...props
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
  scroll?: boolean;
}) => (
  <Link
    target="_blank"
    href={href}
    {...props}
    className={`rounded-lg px-4 py-2.5 text-center duration-150 ${
      props?.className || ""
    }`}
  >
    {children}
  </Link>
);

export default NavLink;
