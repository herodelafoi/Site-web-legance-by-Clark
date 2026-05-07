import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setEmail("");
    toast.success("Merci ! Vous êtes bien inscrit(e) à notre newsletter.");
  };

  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)" }}
    >
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1200&q=40')", backgroundSize: "cover" }} />
      <div className="relative container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-brand-cream mb-4">Exclusivités</p>
          <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Rejoignez la communauté
          </h2>
          <p className="text-muted-foreground mb-10 text-sm leading-relaxed">
            Recevez les nouvelles collections et offres exclusives directement dans votre boîte mail.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-none border-border bg-background h-12 text-sm flex-1"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-brand-cream text-brand-dark hover:bg-brand-cream/90 rounded-none h-12 px-8 text-xs tracking-widest uppercase whitespace-nowrap"
            >
              {loading ? "Envoi..." : "S’inscrire"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}