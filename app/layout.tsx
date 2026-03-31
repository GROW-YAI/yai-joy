import React from "react";
import Navbar from "./components/features/navbar";
import Footer from "./components/features/footer";
import BoafoWidgetInitializer from "./components/BoafoWidgetInitializer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <BoafoWidgetInitializer />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
