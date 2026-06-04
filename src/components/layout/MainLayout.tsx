"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  UserSquare,
  Calendar,
  Trophy,
  Newspaper,
  Info,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/teams", label: "Teams", icon: Users },
  { href: "/players", label: "Players", icon: UserSquare },
  { href: "/matches", label: "Matches", icon: Calendar },
  { href: "/standings", label: "Standings", icon: Trophy },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-lg font-black text-blue-600">
              MHCR Football™
            </h1>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/news">
              <Newspaper
                size={22}
                className={`${
                  pathname === "/news"
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              />
            </Link>

            <Link href="/about">
              <Info
                size={22}
                className={`${
                  pathname === "/about"
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          {children}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 z-50 flex justify-around py-2">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active =
            pathname === href ||
            (href !== "/" && pathname.startsWith(href));

          return (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center flex-1"
            >
              <div
                className={`p-1.5 rounded-lg ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-gray-400"
                }`}
              >
                <Icon size={20} />
              </div>

              <span
                className={`text-[10px] mt-1 ${
                  active
                    ? "text-blue-600 font-semibold"
                    : "text-gray-400"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
