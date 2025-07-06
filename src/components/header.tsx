import type { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Header: FC = () => {
  return (
    <header className="w-full h-20 flex items-center justify-end pr-10 sm:pr-20 lg:pr-32">
      <div className="flex items-center gap-x-4 group">
        <HeaderLink href="/">Work</HeaderLink>
        <HeaderLink href="/about">About</HeaderLink>
      </div>
    </header>
  );
};

const HeaderLink: FC<
  PropsWithChildren<{
    href: string;
  }>
> = ({ children, href }) => {
  const finalHref = `${import.meta.env.BASE_URL}${href}`.replaceAll(
    /\/\//g,
    "/"
  );

  // remove trailing slash for comparison
  const selected =
    finalHref.replace(/\/$/, "") ===
    window.location.pathname.replace(/\/$/, "");

  return (
    <a
      href={finalHref}
      className={twMerge(
        "relative inline-block px-2 py-1 font-medium",
        "after:absolute after:left-2 after:bottom-0 after:h-1 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-120 focus-visible:after:scale-x-120",
        selected ? "after:scale-x-100 group-hover:after:scale-x-0" : ""
      )}
    >
      {children}
    </a>
  );
};
