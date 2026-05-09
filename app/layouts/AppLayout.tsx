import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-white 3xl:max-w-5xl mx-auto">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default AppLayout;
