import Footer from "../components/Footer";
import NavbarCompononet from "../components/Navbar";
import "./globals.css";
export const metadata = {
  title: "Car Rental",
  description: "Find the best cars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
          <NavbarCompononet />
          {children}
          <Footer />
      </body>
    </html>
  );
}
