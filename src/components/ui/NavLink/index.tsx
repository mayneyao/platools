import Link from "next/link";

const NavLink = ({ href, children, ...props }: { className?: string, href: string, children: React.ReactNode }) => (
  <Link
    target="_blank"
    href={href}
    {...props}
    className={`py-2.5 px-4 text-center rounded-lg duration-150 ${props?.className || ""
      }`}
  >
    {children}
  </Link>
);

export default NavLink;
