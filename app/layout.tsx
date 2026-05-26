import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InterviewBank – Build Custom Interview Questions from Job Descriptions",
  description: "AI-powered interview question generator. Paste a job description and get tailored questions, track candidate responses, and get smart follow-up suggestions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6ecc0e82-acde-492d-a7d9-f7a0f2e0ef2f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
