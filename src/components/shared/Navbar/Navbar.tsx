"use client";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { useSession } from "next-auth/react";
import Image from "next/image";
import userImage from "@/assets/user.png";

const Navbar = () => {
  const session = useSession();
  console.log("Session status:", session.data?.user.image);
  return (
    <nav className="fixed top-6 inset-x-4 h-16 max-w-7xl mx-auto rounded-full bg-background border dark:border-slate-700/70 z-30">
      <div className="flex h-full items-center justify-between px-6 md:px-8">
        {/* Logo with consistent padding */}
        <Link href="/" className="shrink-0 ">
          <Logo />
        </Link>

        {/* Desktop Menu with consistent horizontal spacing */}
        <NavMenu className="hidden md:block" />

        {/* Actions and Mobile Menu */}
        <div className="flex items-center gap-4 md:gap-6">
          {session.status === "authenticated" ? (
            <div className="flex items-center gap-2">
              {/* <Image
                src={session.data.user.image}
                alt="User Image"
                className="h-8 w-8 rounded-full"
              /> */}
              <Image
                src={session.data.user.image ?? userImage}
                alt="User Image"
                className="h-12 w-12 rounded-full"
                width={48}
                height={48}
              />
            </div>
          ) : (
            <Button className="rounded-full px-5 py-2 text-sm md:text-base">
              <Link href="/login" className="block w-full text-center">
                Login
              </Link>
            </Button>
          )}

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
