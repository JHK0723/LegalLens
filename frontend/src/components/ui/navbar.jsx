"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function NavBar({ user }) {
  const pathname = usePathname();

  return (
    <nav className="bg-slate-900 h-16 text-white border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-500 flex items-center gap-2">
          <span>🔍 LegalLens</span>
        </Link>

        {/* Desktop Links */}
        <div className="space-x-4 hidden md:flex">
          <Link href="/dashboard">
            <Button variant="ghost" className="hover:bg-slate-800">Dashboard</Button>
          </Link>
          {user ? (
            <Link href="/logout">
              <Button variant="ghost" className="hover:bg-slate-800">Logout</Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button variant="ghost" className="hover:bg-slate-800">Login</Button>
            </Link>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-blue-400 p-0">
                <Menu className="w-6 h-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-slate-900 text-white border-slate-800">
              <Link href="/dashboard" passHref>
                <DropdownMenuItem className="cursor-pointer hover:bg-slate-800">
                  Dashboard
                </DropdownMenuItem>
              </Link>
              {user ? (
                <Link href="/logout" passHref>
                  <DropdownMenuItem className="cursor-pointer hover:bg-slate-800">
                    Logout
                  </DropdownMenuItem>
                </Link>
              ) : (
                <Link href="/login" passHref>
                  <DropdownMenuItem className="cursor-pointer hover:bg-slate-800">
                    Login
                  </DropdownMenuItem>
                </Link>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
