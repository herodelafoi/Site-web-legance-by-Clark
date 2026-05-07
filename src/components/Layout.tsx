import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}