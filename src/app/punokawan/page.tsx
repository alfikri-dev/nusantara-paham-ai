"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { fadeInUp, springs } from "@/lib/motion";
import { ArrowRight, Sparkles, Network, BrainCircuit, Activity, ShieldCheck, GraduationCap, Briefcase } from "lucide-react";

const VISION_PILLARS = [
  {
    title: "Karsa (Inisiatif)",
    desc: "AI yang proaktif mencari solusi, bukan sekadar menunggu perintah. Menganalisis konteks sebelum diminta.",
    icon: Activity,
    color: "text-primary"
  },
  {
    title: "Cipta (Logika)",
    desc: "Arsitektur reasoning terstruktur. Memecah masalah kompleks menjadi langkah-langkah yang bisa dieksekusi mesin.",
    icon: BrainCircuit,
    color: "text-secondary"
  },
  {
    title: "Rasa (Etika & Estetika)",
    desc: "Memahami nuansa budaya, etika lokal, dan menyajikannya dalam output yang manusiawi dan estetik.",
    icon: Sparkles,
    color: "text-gold"
  },
  {
    title: "Karya (Eksekusi)",
    desc: "Sistem yang berorientasi pada hasil akhir yang nyata. Dari kode yang berjalan hingga strategi yang teruji.",
    icon: Network,
    color: "text-accent"
  }
];

const punokawanList = [
  {
    name: "Semar",
    role: "Agen Sehat Waras • Health & Wellness Expert",
    description: "Pemerhati kesehatan dan teman diskusi untuk gaya hidup yang sehat dan pikiran yang waras. Sehat itu pilihan, waras itu tujuan. Siap bantu kamu hidup lebih sehat, lebih tenang, dan lebih waras.",
    image: "/assets/semar.png",
    color: "from-primary/20 to-purple-600/20",
    border: "group-hover:border-primary/50",
    shadow: "group-hover:shadow-glow-primary",
    icon: ShieldCheck,
    tags: ["Pola Makan Sehat", "Tidur & Pikiran Tenang", "Gerak Harian"],
    href: "/chat?agent=semar"
  },
  {
    name: "Petruk",
    role: "Agen Pasar Dunia • Global Market & Wealth Advisor",
    description: "Ahli dalam memantau peluang cuan global (saham, emas, dolar, komoditas) dan memberikan wawasan makro. Ngerti pasar, biar tidak asal ikut kabar. Bukan broker, tapi pencerah wawasan ekonomi.",
    image: "/assets/petruk.png",
    color: "from-secondary/20 to-teal-600/20",
    border: "group-hover:border-secondary/50",
    shadow: "group-hover:shadow-glow-secondary",
    icon: Activity,
    tags: ["Saham Dasar", "Emas & Aset Aman", "Geopolitik", "Data Driven"],
    href: "/chat?agent=petruk"
  },
  {
    name: "Gareng",
    role: "Agen AI Digital • AI Content & Fast Learning Engineer",
    description: "Spesialis dalam riset cepat, belajar hal baru dalam hitungan detik, pembuatan konten kreatif, dan otomatisasi digital. Bikin manusia jadi tidak tulalit! Cari info, ide kreatif & solusi masalah.",
    image: "/assets/gareng_anak.webp",
    color: "from-gold/20 to-yellow-600/20",
    border: "group-hover:border-gold/50",
    shadow: "group-hover:shadow-glow-gold",
    icon: Sparkles,
    tags: ["Belajar Cepat", "Konten Kreatif", "Otomatisasi", "Solutif"],
    href: "/chat?agent=gareng"
  },
  {
    name: "Bagong",
    role: "Agen Bisnis & Strategi • Business Strategy & Anti-Fraud",
    description: "Ahli strategi bisnis, pertumbuhan, pendeteksi penipuan, dan pengubah peluang menjadi cuan. Cuan boleh, tapi waras harus! Anti kemaruk, pakai logika bukan emosi. Bantu UMKM naik kelas.",
    image: "/assets/bagong.png",
    color: "from-accent/20 to-red-600/20",
    border: "group-hover:border-accent/50",
    shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(255,77,79,0.5)]",
    icon: Briefcase,
    tags: ["Jago Jualan", "Melek Keuangan", "Anti-Fraud", "Digital Marketing"],
    href: "/chat?agent=bagong"
  }
];

export default function PunokawanPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main ref={containerRef} className="min-h-screen relative pt-32 pb-24 overflow-hidden">
      {/* ─── Ambient Background ────────────────────────────────────────── */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10" 
      />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 parang-pattern opacity-5 pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none -z-10" />

      {/* ─── Side Decorations (Nusantara Ornaments) ────────────────────── */}
      {/* Left side */}
      <div className="absolute left-0 top-0 h-full w-32 lg:w-48 pointer-events-none -z-5 hidden xl:block">
        {/* Vertical batik line */}
        <div className="absolute left-8 top-[15%] h-[70%] w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
        <div className="absolute left-10 top-[20%] h-[60%] w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        {/* Floating gunungan silhouette */}
        <svg className="absolute left-2 top-[25%] opacity-10" width="64" height="120" viewBox="0 0 64 120" fill="none">
          <path d="M32 0 L62 120 L2 120 Z" fill="url(#deco_left)" opacity="0.4" />
          <circle cx="32" cy="70" r="10" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.6" />
          <circle cx="32" cy="70" r="3" fill="#f59e0b" opacity="0.5" />
          <defs>
            <linearGradient id="deco_left" x1="32" y1="0" x2="32" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f59e0b" />
              <stop offset="1" stopColor="#b45309" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {/* Floating diamond accents */}
        <div className="absolute left-4 top-[55%] w-2 h-2 rotate-45 bg-primary/20 rounded-sm" />
        <div className="absolute left-12 top-[65%] w-1.5 h-1.5 rotate-45 bg-gold/15 rounded-sm" />
        <div className="absolute left-6 top-[78%] w-1 h-1 rotate-45 bg-secondary/20 rounded-sm" />
        {/* Parang-inspired curved stroke */}
        <svg className="absolute left-3 top-[40%] opacity-8" width="40" height="160" viewBox="0 0 40 160" fill="none">
          <path d="M20 0 C 35 40, 5 80, 20 120 C 30 140, 10 150, 20 160" stroke="#f59e0b" strokeWidth="0.5" opacity="0.15" />
        </svg>
      </div>

      {/* Right side */}
      <div className="absolute right-0 top-0 h-full w-32 lg:w-48 pointer-events-none -z-5 hidden xl:block">
        {/* Vertical batik line */}
        <div className="absolute right-8 top-[10%] h-[75%] w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
        <div className="absolute right-10 top-[20%] h-[55%] w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        {/* Floating kris-inspired ornament */}
        <svg className="absolute right-4 top-[18%] opacity-10" width="32" height="140" viewBox="0 0 32 140" fill="none">
          <path d="M16 0 L20 40 L12 80 L20 120 L16 140" stroke="#f59e0b" strokeWidth="0.5" opacity="0.3" />
          <circle cx="16" cy="70" r="6" stroke="#f59e0b" strokeWidth="0.4" strokeDasharray="1.5 2" opacity="0.5" />
        </svg>
        {/* Floating diamond accents */}
        <div className="absolute right-6 top-[35%] w-2 h-2 rotate-45 bg-gold/20 rounded-sm" />
        <div className="absolute right-14 top-[50%] w-1.5 h-1.5 rotate-45 bg-primary/15 rounded-sm" />
        <div className="absolute right-8 top-[72%] w-1 h-1 rotate-45 bg-accent/20 rounded-sm" />
        {/* Parang-inspired curved stroke */}
        <svg className="absolute right-3 top-[45%] opacity-8" width="40" height="160" viewBox="0 0 40 160" fill="none">
          <path d="M20 0 C 5 40, 35 80, 20 120 C 10 140, 30 150, 20 160" stroke="#f59e0b" strokeWidth="0.5" opacity="0.15" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        {/* ─── Vision / Branding Section ─────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-32 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                GG Universe Mission
              </span>
            </div>
            
            <h1 className="text-display-md md:text-display-lg font-display font-bold mb-6">
              Punokawan <br/>
              <span className="text-transparent bg-clip-text bg-gradient-hero">
                Paham AI
              </span>
            </h1>
            
            <div className="space-y-6 text-lg text-white/70">
              <p>
                Asisten AI pintar level Doktor — <strong className="text-white">Biar Kamu Nggak Tulalit!</strong> Kami hadir untuk mendampingi hidup, belajar, dan pergaulanmu, memastikan wawasanmu menandingi profesor.
              </p>
              <p>
                Sistem ini didorong sepenuhnya oleh <strong className="text-white">Agent GG7 (GG Universe)</strong>: menaikkan kecerdasan, rasa percaya diri, dan hasil kerja yang nyata. Dari pusing menyusun strategi marketing sampai butuh wawasan global seputar pasar uang, Punokawan akan merakit solusi brilian <span className="italic">(Karsa, Cipta, Rasa, Karya)</span> agar kamu tampil maksimal, <strong className="text-accent">No Tulalit Anymore!</strong>
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={1}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            {VISION_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="glass p-6 group hover:bg-white/[0.06] transition-colors duration-300">
                  <Icon size={24} className={`${pillar.color} mb-4`} />
                  <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ─── Divider ───────────────────────────────────────────────────── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

        {/* ─── Selection Section ─────────────────────────────────────────── */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="text-gold" size={24} />
          </div>
          <h2 className="text-display-md font-display font-bold mb-4">
            Pilih <span className="text-white/50 italic">Pamong-mu</span>
          </h2>
          <p className="text-white/60 text-lg mx-auto max-w-2xl">
            Tinggalkan rasa frustrasi. Pilih satu agen spesialis yang siap membantumu mengeksekusi strategi brilian. {'\u201C'}No tulalit man!{'\u201D'}
          </p>
        </motion.div>

        {/* ─── Agent Grid ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10">
          {punokawanList.map((agent, index) => {
            const Icon = agent.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={agent.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeInUp}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`relative group card p-6 md:p-8 flex flex-col md:flex-row gap-8 overflow-hidden transition-all duration-500 bg-surface-2 ${agent.border} ${agent.shadow}`}
              >
                {/* Dynamic Gradient Background on Hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`} 
                />

                {/* Avatar Column */}
                <div className="w-full md:w-[220px] aspect-[4/5] md:aspect-auto md:h-full min-h-[260px] relative shrink-0 rounded-2xl overflow-hidden glass p-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <motion.div
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={springs.gentle}
                    className="w-full h-full relative rounded-xl overflow-hidden bg-black/50"
                  >
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 220px"
                      className="object-cover object-top mix-blend-screen opacity-90"
                    />
                  </motion.div>
                </div>

                {/* Info Column */}
                <div className="flex flex-col justify-between flex-grow z-10 py-2">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <Icon size={16} className="text-white/60" />
                      <span className="text-xs uppercase tracking-wider text-white/60 font-medium">
                        {agent.role}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-display font-bold mb-3">{agent.name}</h2>
                    
                    <p className="text-white/60 mb-6 leading-relaxed text-sm">
                      {agent.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
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
                    className="w-full py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-semibold transition-all duration-200 flex items-center justify-center gap-2 group/btn backdrop-blur-sm"
                  >
                    Mulai Sesi
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
