import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppMachineProvider } from "@/context/AppMachineContext";
import { CartHeader } from "@/components/templates/CartHeader";
import { classNames } from "@/utils/classnames";
import { RouteGuardProvider } from "@/components/templates/RouteGuardProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Basket Cart",
  description:
    "Simple shopping system built using Next.js and state management with xState",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, "bg-slate-200")}>
        <AppMachineProvider>
          <RouteGuardProvider>
            <CartHeader />
            <main className="mx-auto max-w-screen-xl px-6 flex min-h-screen flex-col gap-4 items-center md:py-8 py-12">
              {children}
            </main>
          </RouteGuardProvider>
        </AppMachineProvider>
      </body>
    </html>
  );
}
