"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp } from "@/lib/motion";
import { BrainCircuit, Target, Sparkles, Briefcase, Zap } from "lucide-react";
import Image from "next/image";

export default function InteractiveCaseStudy() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Analyze",
      icon: <BrainCircuit size={20} />,
      desc: "Agent Bagong & Gareng menganalisis demografi Bandung, tren haircare 24 jam terakhir, dan kelemahan kompetitor.",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20"
    },
    {
      id: 1,
      title: "Target",
      icon: <Target size={20} />,
      desc: "Agent Petruk menghitung efisiensi budget Rp 250rb. Alokasi optimal: 60% TikTok Ads lokal, 40% kolab mikro-influencer.",
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-400/20"
    },
    {
      id: 2,
      title: "Execute",
      icon: <Zap size={20} />,
      desc: "Agent Semar memfinalisasi pesan 'No Tulalit'. Skrip siap pakai, targeting di-lock. Eksekusi dalam hitungan detik.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/20"
    }
  ];

  return (
    <section className="px-6 md:px-12 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2">
              <Sparkles size={14} /> Studi Kasus Real-Time
            </span>
          </div>
          <h2 className="text-display-sm md:text-display-md font-display font-bold mb-4">
            Bikin Strategi Secepat Kilat. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">
              No Tulalit Anymore!
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            &ldquo;Bingung bikin strategi marketing vitamin rambut di Bandung untuk kalahkan kompetitor besok pagi?&rdquo; Jangan panik. Tanya Agent GG7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Chat Simulation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 card rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 relative">
                <Image src="/assets/bagong.png" alt="Bagong" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-white leading-tight">Agent Bagong (GG7)</h4>
                <p className="text-xs text-white/50">Online • Siap Eksekusi</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-end">
                <div className="bg-white/10 text-white text-sm p-4 rounded-2xl rounded-tr-none max-w-[85%]">
                  Bikinin strategi marketing vitamin rambut di Bandung buat besok pagi. Kompetitor lagi kenceng. Budget 250rb doang. Bisa?
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-white/10 relative shrink-0 mt-1">
                  <Image src="/assets/bagong.png" alt="Bagong" fill className="object-cover" />
                </div>
                <div className="bg-accent/20 border border-accent/30 text-white text-sm p-4 rounded-2xl rounded-tl-none max-w-[85%]">
                  <p className="mb-2">Gampang. Cuan boleh, waras harus. Tim GG7 langsung kerjain sekarang:</p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" /> Target: Gen Z Bandung (18-24th)</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" /> Angle: &quot;Rambut Anti-Lepek Buat Nongkrong di Braga&quot;</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" /> Split budget: Rp150k TikTok Ads, Rp100k KOL mikro.</li>
                  </ul>
                  <p className="mt-3 font-semibold text-accent flex items-center gap-1"><Zap size={14}/> Strategi siap di-deploy!</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Steps & Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="card p-4 rounded-2xl border border-white/10 bg-white/5 text-center">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Market Size</p>
                <p className="text-2xl font-display font-bold text-white">3,550</p>
                <p className="text-xs text-green-400 mt-1">Audience Aktif</p>
              </div>
              <div className="card p-4 rounded-2xl border border-white/10 bg-white/5 text-center">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Budget</p>
                <p className="text-2xl font-display font-bold text-white">250<span className="text-lg">k</span></p>
                <p className="text-xs text-accent mt-1">Sangat Efisien</p>
              </div>
              <div className="card p-4 rounded-2xl border border-white/10 bg-white/5 text-center">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Proj. Growth</p>
                <p className="text-2xl font-display font-bold text-green-400">100%</p>
                <p className="text-xs text-green-400/60 mt-1">ROI Target</p>
              </div>
            </div>

            <div className="card rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Briefcase size={18} className="text-primary"/> Alur Kerja Agen GG7
              </h4>
              
              <div className="space-y-3">
                {steps.map((step, idx) => (
                  <div 
                    key={step.id}
                    onMouseEnter={() => setActiveStep(idx)}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 ${
                      activeStep === idx 
                        ? `${step.bg} ${step.border}` 
                        : 'border-white/5 bg-transparent hover:bg-white/5'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      activeStep === idx ? `bg-black/50 ${step.color}` : 'bg-white/5 text-white/40'
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <h5 className={`font-bold mb-1 ${activeStep === idx ? step.color : 'text-white/70'}`}>
                        {idx + 1}. {step.title}
                      </h5>
                      <p className={`text-sm ${activeStep === idx ? 'text-white/90' : 'text-white/40'}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
