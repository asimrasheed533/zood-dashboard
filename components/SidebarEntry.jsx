"use client";

import Link from "next/link";

export default function SidebarEntry({ children, href }) {
  return (
    <Link href={href} className="dashboard__sidebar__content__entry">
      {children}
    </Link>
  );
}
