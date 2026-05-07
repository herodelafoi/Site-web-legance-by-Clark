import { motion } from "framer-motion";
import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";

const advantages = [
  { icon: Truck, title: "Livraison rapide", desc: "Expédition sous 24h, livraison en 2-3 jours ouvrables." },
  { icon: ShieldCheck, title: "Paiement sécurisé", desc: "Transactions protégées par cryptage SSL 256 bits." },
  { icon: RotateCcw, title: "Retour facile", desc: "30 jours pour changer d’avis, sans questions." },
  { icon: Headphones, title: "Support client", desc: "Une équipe disponible 7j/7 pour vous accompagner." },
];

export default function ShopAdvantages() {
  return (
    <section className="py-20 px-6 bg-card border-y border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border border-brand-cream/30 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-brand-cream" />
              </div>
              <h3 className="text-sm font-medium tracking-wide">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}