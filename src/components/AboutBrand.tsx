import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export default function AboutBrand() {
  return <section className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img src="https://images.fillout.com/orgid-137650/flowpublicid-pqmemxr9rp/widgetid-default/uv1U1QhqPmictneSn2SZxg/pasted-image-1778071934317-zkhpihnt.jpeg" alt="About FORMA" className='w-full h-full object-cover' />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-brand-cream/30 hidden md:block" />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="flex flex-col gap-6">
            <p className="text-xs tracking-[0.4em] uppercase text-brand-cream">Notre histoire</p>
            <h2 className="text-3xl md:text-4xl font-light leading-snug" style={{
            fontFamily: "'Playfair Display', Georgia, serif"
          }}>
              Notre vision
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              FORMA est une marque de vêtements pour homme dédiée au minimalisme et à l’élégance moderne.
              Chaque pièce est conçue pour offrir style, confort et durabilité.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nous croyons que la mode masculine n’a pas besoin d’être complexe pour être remarquable.
              Des coupes étudiées, des matières nobles, une ésthétique sans superflu.
            </p>
            <Button variant="outline" className="rounded-none w-fit px-8 h-12 text-xs tracking-widest uppercase border-foreground/30 text-foreground hover:bg-foreground/5">
              Découvrir notre histoire <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
}