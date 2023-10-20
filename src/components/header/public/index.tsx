"use client";

import { usePathname, useRouter } from "next/navigation";
import NavLink from "@/components/shares/NavLink";

const PublicHeader = () => {
  const router = useRouter();
  const pathName = usePathname();
  console.log(router);
  console.log(pathName);

  return (
    <header className="flex justify-between">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Basked</NavLink>
      <NavLink href="/products">Products</NavLink>
      {/* <NavLink href="/basked">Basked</NavLink> */}
      <NavLink href="/login">Login</NavLink>
      <NavLink href="/register">Register</NavLink>
    </header>
  );
};

export default PublicHeader;
