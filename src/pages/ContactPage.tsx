import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setForm({ name: "", email: "", phone: "", message: "" });
    toast.success("Message envoyé ! Nous vous répondrons dans les plus brefs délais.");
  };

  return (
    <Layout>
      <section className="relative h-64 md:h-72 flex items-end justify-center pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.fillout.com/orgid-137650/flowpublicid-pqmemxr9rp/widgetid-default/nq9P8LbMwcSiALkvGHm4vq/pasted-image-1773049767420.jpg')" }} />
        <div className="absolute inset-0 bg-black/65" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-brand-cream mb-3">Nous écrire</p>
          <h1 className="text-4xl md:text-5xl font-light text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Contact</h1>
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-2xl flex flex-col items-center gap-12">

          {/* Coordonnées */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col items-center gap-6 text-center w-full">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-brand-cream mb-3">Nos coordonnées</p>
              <h2 className="text-2xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Prenons contact</h2>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-8 w-full">
              {[
                { icon: Mail, label: "Email", value: "contact@elegancebyclark.com" },
                { icon: Phone, label: "WhatsApp / Téléphone", value: "+225 00 00 00 00 00" },
                { icon: MapPin, label: "Localisation", value: "Abidjan, Côte d'Ivoire" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 border border-brand-cream/30 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-brand-cream" />
                  </div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground">{label}</p>
                  <p className="text-sm text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="flex flex-col gap-4 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input name="name" placeholder="Votre nom" value={form.name} onChange={handleChange} required className="rounded-none border-border bg-card h-12 text-sm" />
              <Input name="email" type="email" placeholder="Votre email" value={form.email} onChange={handleChange} required className="rounded-none border-border bg-card h-12 text-sm" />
            </div>
            <Input name="phone" placeholder="Votre téléphone (optionnel)" value={form.phone} onChange={handleChange} className="rounded-none border-border bg-card h-12 text-sm" />
            <Textarea name="message" placeholder="Votre message ou commande..." value={form.message} onChange={handleChange} required rows={6} className="rounded-none border-border bg-card text-sm resize-none" />
            <Button type="submit" disabled={loading} className="bg-brand-cream text-brand-dark hover:bg-brand-cream/90 rounded-none h-12 text-xs tracking-widest uppercase">
              {loading ? "Envoi en cours..." : "Envoyer le message"}
            </Button>
          </motion.form>

        </div>
      </section>
    </Layout>
  );
}