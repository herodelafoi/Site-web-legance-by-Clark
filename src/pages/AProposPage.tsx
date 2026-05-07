import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Gem, Layers, Wind, Infinity } from "lucide-react";

const values = [
  { icon: Gem, title: "Qualité premium", desc: "Tissus sélectionnés pour garantir confort et durabilité." },
  { icon: Layers, title: "Style minimaliste", desc: "Des pièces simples et élégantes adaptées à toutes les occasions." },
  { icon: Wind, title: "Confort quotidien", desc: "Coupes pensées pour un usage quotidien sans compromis." },
  { icon: Infinity, title: "Design intemporel", desc: "Des vêtements qui restent élégants saison après saison." },
];

export default function AProposPage() {
  return (
    <Layout>
      <section className="relative h-64 md:h-80 flex items-end justify-center pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.fillout.com/orgid-137650/flowpublicid-pqmemxr9rp/widgetid-default/nq9P8LbMwcSiALkvGHm4vq/pasted-image-1773049767420.jpg')" }} />
        <div className="absolute inset-0 bg-black/65" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-brand-cream mb-3">Notre histoire</p>
          <h1 className="text-4xl md:text-5xl font-light text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>À propos</h1>
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img src="https://images.fillout.com/orgid-137650/flowpublicid-pqmemxr9rp/widgetid-default/mVyXsvQ27YzCtTDPrBNLpa/pasted-image-1777573117308.jpg" alt="À propos" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-brand-cream/30 hidden md:block" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col gap-6">
              <p className="text-xs tracking-[0.4em] uppercase text-brand-cream">Notre vision</p>
              <h2 className="text-3xl md:text-4xl font-light leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>L'élégance masculine réinventée</h2>
              <p className="text-muted-foreground leading-relaxed">
                Élégance by Clark est une marque de vêtements pour homme dédiée au minimalisme et à l'élégance moderne. Chaque pièce est conçue pour offrir style, confort et durabilité.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous croyons que la mode masculine n'a pas besoin d'être complexe pour être remarquable. Des coupes étudiées, des matières nobles, une esthétique sans superflu.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex flex-col gap-4 p-6 border border-border hover:border-brand-cream/40 transition-colors">
                <v.icon className="w-6 h-6 text-brand-cream" />
                <h3 className="text-sm font-medium tracking-wide">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}