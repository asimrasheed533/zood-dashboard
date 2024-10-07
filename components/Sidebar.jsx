import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <div className="dashboard__sidebar__warper">
        <div className="dashboard__sidebar">
          <Link href="/dashboard" className="dashboard__sidebar__logo">
            <Image
              width={120}
              height={60}
              src={logo}
              alt="logo"
              className="dashboard__sidebar__logo__img"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
