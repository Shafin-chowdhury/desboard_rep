import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "AppifyDevs Analytics",
  description: "Frontend Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider 
  attribute="class" 
  defaultTheme="system" 
  enableSystem
>
  {children}
</ThemeProvider>
      </body>
    </html>
  );
}