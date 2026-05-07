import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const images = [
  { src: "https://images.fillout.com/orgid-137650/flowpublicid-pqmemxr9rp/widgetid-default/fVbFzFXATgiGTXDzatz5ot/pasted-image-1778071542218-s5g699o0.jpeg", tall: true },
  { src: "https://images.fillout.com/orgid-137650/flowpublicid-pqmemxr9rp/widgetid-default/7Ut6WbrdquiJPwgPbzgMHo/pasted-image-1778071668444-af51p380.jpeg", tall: false },
  { src: "https://images.fillout.com/orgid-137650/flowpublicid-pqmemxr9rp/widgetid-default/48h4z5VfXx3rwv3XJfLP6H/pasted-image-1777573693486.jpg", tall: false },
  { src: "https://images.fillout.com/orgid-137650/flowpublicid-pqmemxr9rp/widgetid-default/3qgjVFVVutCJ3hYjPHqyW5/pasted-image-1773051096760.jpg", tall: true },
];

export default function Lookbook() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-brand-cream mb-4">Lookbook</p>
          <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Une collection pensée pour l’homme moderne.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`overflow-hidden ${img.tall ? "row-span-2" : ""}`}
            >
              <img src={img.src} alt="lookbook" className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="rounded-none px-10 h-12 text-xs tracking-widest uppercase border-foreground/30 text-foreground hover:bg-foreground/5">
            Voir toute la collection <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}