"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, PlusCircle, LogOut, Menu, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const session = useSession();
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-black text-white p-2 rounded-lg shadow-lg"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 flex flex-col border-r bg-black text-white z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Top navigation */}
        <nav className="flex-1 space-y-2 p-4 mt-14 md:mt-4 overflow-y-auto">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>

          <Link
            href="/dashboard/create-blog"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
          >
            <PlusCircle className="h-4 w-4" />
            Create Blog
          </Link>
        </nav>

        {/* Bottom action */}
        <div className="p-4 border-t border-gray-500">
          {session.status === "authenticated" && (
            <Button
              variant="destructive"
              className="w-full justify-start gap-2 cursor-pointer"
              onClick={() => signOut()}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          )}
        </div>
      </aside>
    </>
  );
}