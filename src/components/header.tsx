import type { FC, PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useContent } from "../content-provider";

export const Header: FC = () => {
  const {
    header: { links },
  } = useContent();

  return (
    <header className="w-full h-20 flex items-center justify-end pr-10 sm:pr-20 lg:pr-32">
      <div className="flex items-center gap-x-4 group">
        {links.map((link) => (
          <HeaderLink key={link.path} href={link.path}>
            {link.label}
          </HeaderLink>
        ))}
      </div>
    </header>
  );
};

const HeaderLink: FC<
  PropsWithChildren<{
    href: string;
  }>
> = ({ children, href }) => {
  const location = useLocation();

  // remove trailing slash for comparison
  const selected =
    href.replace(/\/$/, "") === location.pathname.replace(/\/$/, "");

  return (
    <Link
      to={href}
      className={twMerge(
        "relative inline-block px-2 py-1 font-medium",
        "after:absolute after:left-2 after:bottom-0 after:h-1 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-120 focus-visible:after:scale-x-120",
        selected ? "after:scale-x-100 group-hover:after:scale-x-0" : ""
      )}
    >
      {children}
    </Link>
  );
};
