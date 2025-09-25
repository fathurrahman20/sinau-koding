import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  console.log(`location: ${JSON.stringify(location)}`);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Pokemon List", href: "/pokemon" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors hover:text-primary ${
                  isActive && location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground/60"
                }`
              }>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />

          {/* Tombol Hamburger untuk Mobile */}
          <button
            className="p-2 rounded-md text-foreground/70 hover:text-foreground md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu untuk Mobile (Dropdown) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t">
            <nav className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-lg font-medium p-2 rounded-md transition-colors ${
                      isActive && location.pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`
                  }>
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
