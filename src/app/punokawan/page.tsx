"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, springs } from "@/lib/motion";
import { ArrowRight, Sparkles, PenTool, Code } from "lucide-react";

const punokawanList = [
  {
    name: "Gareng",
    role: "Si Jenaka (Kreatif & Ide)",
    description: "Cerdik dan penuh ide segar. Cocok untuk brainstorming, bikin konten viral, atau mencari jalan keluar dari kebuntuan ide.",
    image: "/assets/gareng_anak.webp",
    color: "from-secondary/20 to-primary/20",
    border: "group-hover:border-secondary/50",
    shadow: "group-hover:shadow-glow-secondary",
    icon: Sparkles,
    tags: ["Ide Kreatif", "Konten", "Brainstorming"],
    href: "/chat?agent=gareng"
  },
  {
    name: "Semar",
    role: "Sang Pamong (Bijak & Strategi)",
    description: "Kebijaksanaan tertinggi. Ahli strategi, nasehat filosofis, arsitektur sistem, dan penjaga nilai moral dalam keputusan.",
    image: "/assets/semar.png",
    color: "from-primary/20 to-purple-500/20",
    border: "group-hover:border-primary/50",
    shadow: "group-hover:shadow-glow-primary",
    icon: PenTool,
    tags: ["Strategi", "Filosofi", "Arsitektur"],
    href: "/chat?agent=semar"
  },
  {
    name: "Petruk",
    role: "Si Pujangga (Copywriting)",
    description: "Jago merangkai kata. Membuat cerita panjang, artikel mendalam, presentasi memukau, atau dokumentasi yang jelas.",
    image: "/assets/petruk.png",
    color: "from-gold/20 to-yellow-500/20",
    border: "group-hover:border-gold/50",
    shadow: "group-hover:shadow-glow-gold",
    icon: PenTool,
    tags: ["Copywriting", "Storytelling", "Artikel"],
    href: "/chat?agent=petruk"
  },
  {
    name: "Bagong",
    role: "Si Kritis (QA & Code Review)",
    description: "Polos tapi tajam. Mempertanyakan asumsimu, mencari bug tersembunyi, dan memberikan review kode tanpa tedeng aling-aling.",
    image: "/assets/bagong.png",
    color: "from-accent/20 to-red-500/20",
    border: "group-hover:border-accent/50",
    shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(255,77,79,0.5)]",
    icon: Code,
    tags: ["Code Review", "Testing", "Kritik Solutif"],
    href: "/chat?agent=bagong"
  }
];

export default function PunokawanPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen relative pt-32 pb-24 px-6 md:px-12 overflow-hidden">
      {/* ─── Ambient Background ────────────────────────────────────────── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 parang-pattern opacity-5 pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-16 md:mb-20"
        >
          <h1 className="text-display-lg md:text-display-xl font-display font-bold mb-4">
            Pilih <span className="text-primary italic">Karaktermu</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl">
            Empat pendekatan berbeda untuk masalah yang sama. 
            Siapa yang kamu butuhkan hari ini?
          </p>
        </motion.div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {punokawanList.map((agent, index) => {
            const Icon = agent.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={agent.name}
                initial="hidden"
                animate="visible"
                custom={index}
                variants={fadeInUp}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`relative group card p-6 md:p-8 flex flex-col xl:flex-row gap-8 overflow-hidden transition-all duration-500 bg-surface-2 ${agent.border} ${agent.shadow}`}
              >
                {/* Dynamic Gradient Background on Hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`} 
                />

                {/* Avatar Column */}
                <div className="w-full xl:w-[200px] aspect-[4/5] xl:aspect-auto xl:h-[280px] relative shrink-0 rounded-2xl overflow-hidden glass p-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <motion.div
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={springs.gentle}
                    className="w-full h-full relative rounded-xl overflow-hidden"
                  >
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      fill
                      sizes="(max-width: 1280px) 100vw, 200px"
                      className="object-cover object-top mix-blend-screen opacity-90"
                    />
                  </motion.div>
                </div>

                {/* Info Column */}
                <div className="flex flex-col justify-between flex-grow z-10">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <Icon size={16} className="text-white/60" />
                      <span className="text-xs uppercase tracking-wider text-white/60 font-medium">
                        {agent.role}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-display font-bold mb-3">{agent.name}</h2>
                    
                    <p className="text-white/60 mb-6 leading-relaxed text-sm md:text-base">
                      {agent.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8 xl:mb-0">
                      {agent.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 font-medium group-hover:bg-white/10 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={agent.href}
                    className="w-full py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-semibold transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    Mulai Chat 
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
