import { type ReactNode } from "react";
import Header from "./header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main className="container mx-auto p-4 md:p-8">{children}</main>
    </div>
  );
}
