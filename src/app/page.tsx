"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  motionTokens, 
  springs, 
  fadeInUp, 
  scaleIn
} from "@/lib/motion";
import Fireflies from "@/components/Fireflies";


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const circle1Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const circle2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <main ref={containerRef} className="relative overflow-hidden w-full">
      {/* ─── Base Background Patterns ─────────────────────────────────── */}
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none -z-40" />
      <div className="absolute inset-0 batik-pattern opacity-10 pointer-events-none -z-40" />
      <Fireflies />

      {/* ─── Hero Section ─────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 px-6 md:px-12">
        {/* Parallax background glows */}
        <motion.div 
          className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10"
          style={{ y: circle1Y }}
        />
        <motion.div 
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[140px] -z-10"
          style={{ y: circle2Y }}
        />
        
        {/* Ornament Top Left */}
        <div className="absolute top-28 left-8 w-24 h-24 border-t border-l border-white/10 opacity-30 -z-10" />
        <div className="absolute top-28 right-8 w-24 h-24 border-t border-r border-white/10 opacity-30 -z-10" />

        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full relative">
          
          {/* Content Column */}
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left pt-10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={springs.bouncy}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs md:text-sm font-semibold tracking-wide text-white/80 uppercase">
                Era Baru Teknologi Berkebudayaan
              </span>
            </motion.div>

            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-display-lg md:text-display-xl lg:text-display-2xl font-display font-bold leading-none mb-8 tracking-tight"
            >
              AI Pintar yang<br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-hero">
                  Paham Budaya
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-primary/20 blur-xl -z-10" />
              </span>
              <br />
              Nusantara.
            </motion.h1>

            <motion.p 
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/60 mb-10 max-w-xl font-medium leading-relaxed"
            >
              Bertemu Punokawan AI. Empat entitas abadi dari tanah Jawa yang kini hidup dalam model AI. 
              Pendamping yang bijak, jenaka, dan siap membantu keseharianmu.
            </motion.p>

            <motion.div 
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link href="/punokawan" className="btn-primary flex items-center justify-center gap-2 group text-base md:text-lg">
                <span>Kenali Karakter</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link href="#features" className="btn-ghost flex items-center justify-center text-base md:text-lg">
                Pelajari Fitur
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Visual Column */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: motionTokens.easing.expOut }}
            className="relative flex justify-center items-center w-full h-[500px] lg:h-[600px] -z-10"
          >
            {/* Parallax circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-primary/20 rounded-full border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                className="absolute w-[350px] h-[350px] md:w-[550px] md:h-[550px] border border-secondary/10 rounded-full border-dashed"
              />
            </div>

            {/* Anchor Image (Gareng) */}
            <motion.div 
              className="relative w-full max-w-[320px] md:max-w-[420px] aspect-[9/16] rounded-3xl overflow-hidden glass shadow-glow-primary z-10 animate-float"
              whileHover={{ scale: 1.02 }}
              transition={springs.gentle}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
              <Image
                src="/assets/gareng_anak.webp"
                alt="Punokawan AI"
                fill
                priority
                className="object-cover object-top opacity-90 mix-blend-screen"
                sizes="(max-width: 768px) 320px, 420px"
              />
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 glass p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Gareng & Anak</h3>
                    <p className="text-xs text-white/60">Jenaka & Kreatif</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Bento Grid Features ──────────────────────────────────────── */}
      <section id="features" className="px-6 md:px-12 py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-display-lg md:text-display-xl font-display font-bold mb-6">
              Arsitektur <span className="text-primary italic">Kearifan</span> Lokal
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
              Bukan sekadar prompt biasa. Punokawan AI dibangun di atas arsitektur model terpisah untuk menjaga kedalaman karakter dan konsistensi nalar.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* Feature 1 (Span 2) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={scaleIn}
              custom={0}
              className="card p-8 md:col-span-2 relative overflow-hidden group flex flex-col justify-end"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
              <div className="absolute inset-0 parang-pattern opacity-10" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-6 text-2xl">
                  🎭
                </div>
                <h3 className="text-2xl font-bold mb-2">Persona Bertingkat</h3>
                <p className="text-white/60 max-w-md">
                  Setiap Punokawan memiliki ingatan, filter etika, dan basis pengetahuan independen. Semar tidak akan pernah bercanda layaknya Gareng.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={scaleIn}
              custom={1}
              className="card p-8 relative overflow-hidden group flex flex-col justify-end"
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center mb-6 text-2xl">
                  ⚡️
                </div>
                <h3 className="text-xl font-bold mb-2">Multi-Model Core</h3>
                <p className="text-white/60 text-sm">
                  Diotaki oleh kombinasi GPT-4o, Claude 3.7, dan Llama 3 untuk penalaran tingkat tinggi.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={scaleIn}
              custom={2}
              className="card p-8 relative overflow-hidden group flex flex-col justify-end"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-colors" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center mb-6 text-2xl">
                  🖼️
                </div>
                <h3 className="text-xl font-bold mb-2">Visual Generation</h3>
                <p className="text-white/60 text-sm">
                  Didukung 9Router API untuk generasi aset visual on-the-fly.
                </p>
              </div>
            </motion.div>

            {/* Feature 4 (Span 2) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={scaleIn}
              custom={3}
              className="card p-8 md:col-span-2 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
              <div className="relative z-10 h-full flex flex-col md:flex-row gap-8 items-center justify-between">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-4">Siap Membantu Pekerjaanmu</h3>
                  <p className="text-white/60 max-w-sm">
                    Dari coding, copywriting, hingga konsultasi strategi. Pilih karakter yang tepat untuk tugas yang spesifik.
                  </p>
                  <Link href="/punokawan" className="inline-block mt-6 text-primary font-medium hover:text-purple-400 transition-colors">
                    Lihat Katalog Karakter →
                  </Link>
                </div>
                
                {/* Visual Graphic */}
                <div className="relative w-full md:w-64 h-32 rounded-xl border border-white/10 bg-black/50 p-4 overflow-hidden flex flex-col justify-end">
                  <div className="absolute top-2 left-2 flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="w-3/4 h-2 bg-white/10 rounded-full mb-2" />
                  <div className="w-1/2 h-2 bg-primary/40 rounded-full mb-2" />
                  <div className="w-5/6 h-2 bg-white/10 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Marquee Section ──────────────────────────────────────────── */}
      <section className="py-16 overflow-hidden border-y border-white/5 relative bg-white/[0.01]">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex whitespace-nowrap animate-marquee items-center gap-16 px-8">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center text-white/30 font-display text-4xl uppercase tracking-widest opacity-50">
              <span className="flex items-center gap-4">✨ Semar <span className="text-primary">•</span></span>
              <span className="flex items-center gap-4">Gareng <span className="text-secondary">•</span></span>
              <span className="flex items-center gap-4">Petruk <span className="text-gold">•</span></span>
              <span className="flex items-center gap-4">Bagong <span className="text-accent">•</span></span>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
