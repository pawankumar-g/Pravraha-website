import "./globals.css";
import Navbar from "./components/Navbar";
import FooterWrapper from "./components/FooterWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        <FooterWrapper />
      </body>
    </html>
  );
}