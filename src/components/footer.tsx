import { useState, type FC } from "react";
import { DocumentDuplicateIcon as DocumentDuplicateIconOutline } from "@heroicons/react/24/outline";
import { DocumentDuplicateIcon as DocumentDuplicateIconSolid } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
import copy from "copy-to-clipboard";
import { useContent } from "../content-provider";

export const Footer: FC = () => {
  const {
    footer: { title, subtitle, email },
  } = useContent();

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    copy(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const Icon = copied
    ? DocumentDuplicateIconSolid
    : DocumentDuplicateIconOutline;

  return (
    <footer className="w-full flex items-center justify-center my-20 lg:my-40">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-5xl font-bold font-eyes text-center">{title}</h1>
        <div className="pt-5 text-gray-600 dark:text-gray-400">{subtitle}</div>
        <button
          className="relative font-bold flex items-center gap-x-2 cursor-pointer"
          onClick={handleCopyEmail}
        >
          <span>{email}</span>
          <Icon className="w-5 h-5" />

          {/* TOOLTIP WHEN COPIED */}
          <span
            className={twMerge(
              "absolute -right-12 -top-7 bg-gray-700 text-white text-xs rounded px-2 py-1",
              copied ? "opacity-100" : "opacity-0 pointer-events-none",
              "transition-opacity duration-300 ease-in-out"
            )}
          >
            Copied!
          </span>
        </button>
      </div>
    </footer>
  );
};
