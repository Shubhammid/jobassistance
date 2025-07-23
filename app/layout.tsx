import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Onest } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ConvexClientProvider } from "@/context/ConvexClientProvider";
import { Suspense } from "react";
import FallbackLoader from "@/components/FallbackLoader";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Assistance.ai | AI-Powered Job Description Analysis & Career Tools",
  description:
    "Job Assistance.ai uses AI to analyze job descriptions, generate personalized cover letters, build resumes, and provide essential insights to help you understand job requirements and land your dream job.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`bg-white ${onest.className}`}
          suppressHydrationWarning
        >
          <ConvexClientProvider>
            <Suspense fallback={<FallbackLoader />}>
              <NuqsAdapter>{children}</NuqsAdapter>
            </Suspense>
            <Toaster />
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
