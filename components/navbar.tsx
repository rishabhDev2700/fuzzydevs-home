"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Laptop, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeSwitcher } from "./theme-switcher";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-screen top-0 z-50 bg-transparent backdrop-blur-md text-muted-foreground">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white">
            <Laptop className="h-8 w-8 text-inherit" />
            <span className="text-2xl font-black">FZ</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-sm font-medium hover:text-primary transition-colors"
                  href="/#services"
                >
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-sm font-medium hover:text-primary transition-colors"
                  href="/#about"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/work"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Our Work
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-sm font-medium hover:text-primary transition-colors"
                  href="/#contact"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ThemeSwitcher />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeSwitcher />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="/#services"
              className="block px-4 py-2 text-sm hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="/#about"
              className="block px-4 py-2 text-sm hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <Link
              href="/work"
              className="block px-4 py-2 text-sm hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Work
            </Link>
            <a
              href="/#contact"
              className="block px-4 py-2 text-sm hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
