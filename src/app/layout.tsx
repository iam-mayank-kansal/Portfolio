import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import DotPattern from "@/components/magicui/dot-pattern";
import { Navbar } from "@/components/Navbar";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Mayank Kansal | Portfolio",
    description: "Mayank Kansal's Portfolio",
    icons: {
        icon: "/MKlogo.png"
    },
};

import { cn } from "@/lib/utils";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased max-w-4xl mx-auto py-12 sm:py-24 px-6",
                    fontSans.variable
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="system">
                    <Navbar />
                    {children}
                    <DotPattern
                        width={20}
                        height={20}
                        cx={1}
                        cy={1}
                        cr={1}
                        className={cn(
                            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-10"
                        )}
                    />
                </ThemeProvider>
            </body>
        </html>
    );
}
