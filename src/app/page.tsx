"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { 
  motionTokens, 
  springs, 
  fadeInUp, 
  scaleIn
} from "@/lib/motion";
import Fireflies from "@/components/Fireflies";
import InteractiveCaseStudy from "@/components/InteractiveCaseStudy";
import { ShieldCheck, TrendingUp, Sparkles, Briefcase } from "lucide-react";

// ─── 38 Provinsi Indonesia grouped by pulau ───────────────────────────────────
const NUSANTARA_REGIONS = [
  {
    id: "sumatera",
    region: "Sumatera",
    icon: "🏠",
    title: "Jaringan & Koneksi",
    color: "from-orange-500/20 to-red-500/20",
    accent: "text-orange-400",
    accentBorder: "border-orange-500/30",
    desc: "Filosofi Rumah Gadang dan Ulos Batak: AI yang membangun jejaring kolaboratif lintas node dan domain.",
    provinces: [
      "Aceh",
      "Sumatera Utara",
      "Sumatera Barat",
      "Riau",
      "Kepulauan Riau",
      "Jambi",
      "Sumatera Selatan",
      "Kepulauan Bangka Belitung",
      "Bengkulu",
      "Lampung",
    ],
  },
  {
    id: "jawa",
    region: "Jawa & Banten",
    icon: "🛕",
    title: "Pusat Pengetahuan",
    color: "from-amber-500/20 to-yellow-600/20",
    accent: "text-amber-400",
    accentBorder: "border-amber-500/30",
    desc: "Relief Borobudur dan Pustaka Keraton: AI penjaga kebijaksanaan masa lalu untuk memprediksi masa depan.",
    provinces: [
      "DKI Jakarta",
      "Banten",
      "Jawa Barat",
      "Jawa Tengah",
      "DI Yogyakarta",
      "Jawa Timur",
    ],
  },
  {
    id: "bali-nusa",
    region: "Bali & Nusa Tenggara",
    icon: "🌺",
    title: "Harmoni & Estetika",
    color: "from-rose-500/20 to-pink-600/20",
    accent: "text-rose-400",
    accentBorder: "border-rose-500/30",
    desc: "Keseimbangan Tri Hita Karana dan tenun ikat NTT: AI yang mengutamakan harmoni antara logika, data, dan etika.",
    provinces: [
      "Bali",
      "Nusa Tenggara Barat",
      "Nusa Tenggara Timur",
    ],
  },
  {
    id: "kalimantan",
    region: "Kalimantan",
    icon: "🌳",
    title: "Fondasi & Akar Data",
    color: "from-emerald-500/20 to-green-700/20",
    accent: "text-emerald-400",
    accentBorder: "border-emerald-500/30",
    desc: "Pohon Kehidupan Batang Garing Dayak: arsitektur AI yang berakar kuat pada lapisan data terstruktur dan memori jangka panjang.",
    provinces: [
      "Kalimantan Barat",
      "Kalimantan Tengah",
      "Kalimantan Selatan",
      "Kalimantan Timur",
      "Kalimantan Utara",
    ],
  },
  {
    id: "sulawesi",
    region: "Sulawesi",
    icon: "⛵",
    title: "Navigasi & Eksplorasi",
    color: "from-blue-500/20 to-cyan-600/20",
    accent: "text-blue-400",
    accentBorder: "border-blue-500/30",
    desc: "Semangat pelaut Bugis-Makassar dan aksara Lontara: AI yang tangguh menjelajah lautan informasi dan menemukan pola tersembunyi.",
    provinces: [
      "Sulawesi Utara",
      "Gorontalo",
      "Sulawesi Tengah",
      "Sulawesi Barat",
      "Sulawesi Selatan",
      "Sulawesi Tenggara",
    ],
  },
  {
    id: "maluku",
    region: "Maluku",
    icon: "🌊",
    title: "Konektivitas Kepulauan",
    color: "from-teal-500/20 to-cyan-700/20",
    accent: "text-teal-400",
    accentBorder: "border-teal-500/30",
    desc: "Jalur rempah dan sasi adat Maluku: AI yang memahami distribusi dan kelangkaan sumber daya secara adil dan efisien.",
    provinces: [
      "Maluku",
      "Maluku Utara",
    ],
  },
  {
    id: "papua",
    region: "Papua",
    icon: "🛡️",
    title: "Ketahanan Sistem",
    color: "from-purple-500/20 to-violet-700/20",
    accent: "text-purple-400",
    accentBorder: "border-purple-500/30",
    desc: "Ukiran Asmat dan kearifan alam Papua: sistem AI yang resilient, anti-fragile, dan mampu beroperasi di kondisi paling ekstrem.",
    provinces: [
      "Papua Barat Daya",
      "Papua Barat",
      "Papua Tengah",
      "Papua Pegunungan",
      "Papua Selatan",
      "Papua",
    ],
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeRegionId, setActiveRegionId] = useState<string>("jawa");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const circle1Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const circle2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const activeRegion = NUSANTARA_REGIONS.find((r) => r.id === activeRegionId)!;

  // total count
  const totalProvinsi = NUSANTARA_REGIONS.reduce(
    (acc, r) => acc + r.provinces.length,
    0
  );

  return (
    <main ref={containerRef} className="relative overflow-hidden w-full">
      {/* ─── Background ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none -z-40" />
      <div className="absolute top-0 left-0 w-full h-[120vh] batik-pattern opacity-10 pointer-events-none -z-40" />
      <Fireflies />

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 px-6 md:px-12">
        <motion.div
          className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10"
          style={{ y: circle1Y, willChange: "transform" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] -z-10"
          style={{ y: circle2Y, willChange: "transform" }}
        />

        {/* Nusantara SVG Background Decorations (Gunungan & Ornamen) */}
        <div className="absolute top-[15%] left-[-5%] opacity-15 -z-10 pointer-events-none hidden lg:block">
          {/* Siluet Gunungan Wayang (Abstract CSS/SVG Art) */}
          <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 10 L 190 190 L 10 190 Z" fill="url(#gunungan_gradient)" opacity="0.3" />
            <path d="M100 30 L 170 190 L 30 190 Z" stroke="url(#gunungan_gradient)" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="100" cy="120" r="30" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
            <circle cx="100" cy="120" r="10" fill="#f59e0b" opacity="0.8" />
            <defs>
              <linearGradient id="gunungan_gradient" x1="100" y1="10" x2="100" y2="190" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f59e0b" />
                <stop offset="1" stopColor="#b45309" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute top-[20%] right-[5%] opacity-20 -z-10 pointer-events-none hidden lg:block">
          {/* Motif Megamendung (Abstract) */}
          <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 150 Q 75 100 120 120 T 200 100 T 280 140" stroke="url(#mega_gradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 30 170 Q 80 130 140 150 T 220 130 T 290 160" stroke="url(#mega_gradient)" strokeWidth="1" fill="none" strokeDasharray="5 5" opacity="0.6" />
            <circle cx="120" cy="120" r="4" fill="#3b82f6" />
            <circle cx="200" cy="100" r="4" fill="#3b82f6" />
            <defs>
              <linearGradient id="mega_gradient" x1="0" y1="150" x2="300" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3b82f6" />
                <stop offset="1" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="absolute bottom-32 right-10 opacity-20 -z-10 pointer-events-none hidden lg:block">
          <svg width="180" height="120" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 80 Q 50 10, 90 80 T 170 80" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
            <circle cx="50" cy="45" r="3" fill="#10b981" />
            <circle cx="130" cy="80" r="3" fill="#10b981" />
            <path d="M10 90 L 170 90" stroke="white" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Corner ornaments (Batik Kawung inspired) */}
        <div className="absolute top-28 left-8 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-full opacity-40 -z-10" />
        <div className="absolute top-28 right-8 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-full opacity-40 -z-10" />
        <div className="absolute bottom-16 left-8 w-16 h-16 border-b-2 border-l-2 border-primary/20 rounded-bl-full opacity-40 -z-10" />
        <div className="absolute bottom-16 right-8 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-full opacity-40 -z-10" />

        <div className="mx-auto max-w-7xl flex flex-col items-center justify-center text-center w-full relative z-10 pt-10">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity, willChange: "transform, opacity" }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={springs.bouncy}
              className="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs md:text-sm font-semibold tracking-widest text-white/90">
                POWERED BY <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">GG UNIVERSE</span>
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-display-md md:text-display-lg lg:text-[5.5rem] font-display font-bold leading-[1.1] mb-6 tracking-tight max-w-5xl"
            >
              Nusantara
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-primary to-secondary drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                  Paham AI
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-primary/30 blur-2xl -z-10" />
              </span>
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInUp}
              className="mb-10 max-w-3xl flex flex-col items-center"
            >
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                Perkenalan Seri <span className="text-primary">Punokawan Paham AI</span>
              </h2>
              <p className="text-lg text-white/70 font-medium leading-relaxed">
                Platform AI inklusif yang berlandaskan <strong className="text-primary font-bold">Karsa, Cipta, Rasa, Karya</strong> — keempat pilar Nusantara yang menjamin kejelasan niat, keaslian hasil, kedalaman empati, dan ketepatan eksekusi.
                <br className="hidden md:block" /> Tanpa bergantung cloud asing, data tetap di server lokal, agen berkarakter Nusantara siap eksekusi tugas nyata untuk bisnis dan keseharian.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="#nusantara"
                className="btn-primary flex items-center justify-center gap-2 group text-base md:text-lg"
              >
                <span>Jelajahi Nusantara</span>
                <span className="group-hover:translate-y-1 transition-transform">
                  ↓
                </span>
              </Link>
              <Link
                href="/punokawan"
                className="btn-secondary flex items-center justify-center gap-2 group text-base md:text-lg bg-white/5 border-white/10"
              >
                <span>Coba Punokawan AI</span>
                <span className="group-hover:translate-x-1 transition-transform text-primary font-bold">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Nusantara Province Map Section ──────────────────────────── */}
      <section
        id="nusantara"
        className="px-6 md:px-12 py-24 relative bg-black/40 border-y border-white/5 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-display-md md:text-display-lg font-display font-bold mb-4">
              Dari Budaya Menjadi{" "}
              <span className="text-primary italic">Nalar Mesin</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl">
              Filosofi dari setiap penjuru Nusantara diterjemahkan menjadi
              prinsip arsitektur AI. {totalProvinsi} provinsi, satu visi.
            </p>
          </motion.div>

          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {NUSANTARA_REGIONS.map((r, idx) => (
              <motion.button
                key={r.id}
                onClick={() => setActiveRegionId(r.id)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  activeRegionId === r.id
                    ? "bg-white/15 border-white/30 text-white shadow-glow-primary"
                    : "bg-white/[0.03] border-white/10 text-white/50 hover:text-white hover:bg-white/[0.07]"
                }`}
              >
                <span>{r.icon}</span>
                <span>{r.region}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full bg-white/10 ${
                    activeRegionId === r.id ? r.accent : "text-white/30"
                  }`}
                >
                  {r.provinces.length}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Active Region Detail + Province List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRegionId}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: motionTokens.easing.expOut }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              {/* Info Card */}
              <div className="lg:col-span-5 card p-8 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
                <div
                  className={`absolute -right-16 -top-16 w-56 h-56 bg-gradient-to-br ${activeRegion.color} rounded-full blur-3xl opacity-60`}
                />
                <div className="absolute inset-0 parang-pattern opacity-10 mix-blend-overlay" />

                <div className="relative z-10">
                  <span className="text-5xl mb-5 block">{activeRegion.icon}</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                    {activeRegion.title}
                  </h3>
                  <p className={`text-sm font-semibold mb-4 ${activeRegion.accent}`}>
                    {activeRegion.region}
                  </p>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">
                    {activeRegion.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center bg-black/60">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                    MODULE_LOADED · {activeRegion.provinces.length} PROVINSI
                  </span>
                </div>
              </div>

              {/* Province Grid */}
              <div className="lg:col-span-7">
                <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">
                  Daftar Provinsi
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {activeRegion.provinces.map((prov, i) => (
                    <motion.div
                      key={prov}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: i * 0.04,
                        duration: 0.3,
                        ease: motionTokens.easing.expOut,
                      }}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/8 hover:bg-white/[0.08] hover:${activeRegion.accentBorder} transition-all duration-200 group`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-current ${activeRegion.accent} flex-shrink-0 transition-colors`}
                      />
                      <span className="text-sm text-white/70 group-hover:text-white transition-colors font-medium leading-tight">
                        {prov}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Summary stats */}
                <div className="mt-8 flex flex-wrap gap-6">
                  <div>
                    <p className="text-2xl font-display font-bold text-white">
                      {activeRegion.provinces.length}
                    </p>
                    <p className="text-xs text-white/40 uppercase tracking-wider">Provinsi di region ini</p>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div>
                    <p className="text-2xl font-display font-bold text-white">
                      {totalProvinsi}
                    </p>
                    <p className="text-xs text-white/40 uppercase tracking-wider">Total provinsi</p>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div>
                    <p className="text-2xl font-display font-bold text-white">
                      {NUSANTARA_REGIONS.length}
                    </p>
                    <p className="text-xs text-white/40 uppercase tracking-wider">Region Nusantara</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── Pricing Plans ──────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-32 relative bg-background">
        <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md md:text-display-lg font-display font-bold mb-4">
              Investasi AI <span className="text-primary italic">Nusantara</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Paket berlangganan untuk akses penuh ke platform Nusantara Paham AI: model terpadu 38 provinsi, analitik data lokal, dan integrasi API universal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mini */}
            <div className="card p-8 flex flex-col rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-white">Mini</h3>
                <p className="text-white/50 text-sm h-10">Akses awal dunia AI Nusantara dengan kuota memadai.</p>
              </div>
              <div className="mb-8">
                <div className="text-4xl font-display font-bold flex items-end gap-1">
                  <span className="text-2xl">Rp</span>49k<span className="text-lg text-white/40 font-normal">/bln</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-3 text-sm text-white/70">
                  <span className="text-primary">✓</span> 600 Credit AI
                </li>
                <li className="flex gap-3 text-sm text-white/70">
                  <span className="text-primary">✓</span> Akses Dasar Agen Punokawan
                </li>
                <li className="flex gap-3 text-sm text-white/70">
                  <span className="text-white/20">-</span> <span className="text-white/40 line-through">Dukungan Prioritas</span>
                </li>
              </ul>
              <Link href="/contact" className="w-full py-3 rounded-full text-center border border-white/20 text-white hover:bg-white hover:text-black transition-colors font-semibold text-sm">
                Pilih Mini
              </Link>
            </div>

            {/* Plus */}
            <div className="card p-8 flex flex-col rounded-3xl border border-primary/50 bg-primary/[0.05] relative transform md:-translate-y-4 shadow-glow-primary">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                Paling Laris
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-primary">Plus</h3>
                <p className="text-white/50 text-sm h-10">Cocok untuk tim kecil dan eksplorasi lebih dalam.</p>
              </div>
              <div className="mb-8">
                <div className="text-4xl font-display font-bold flex items-end gap-1 text-white">
                  <span className="text-2xl">Rp</span>149k<span className="text-lg text-white/40 font-normal">/bln</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-3 text-sm text-white/70">
                  <span className="text-primary">✓</span> 2,200 Credit AI
                </li>
                <li className="flex gap-3 text-sm text-white/70">
                  <span className="text-primary">✓</span> Full Akses Agen Punokawan
                </li>
                <li className="flex gap-3 text-sm text-white/70">
                  <span className="text-primary">✓</span> Bantuan Teknis Email
                </li>
              </ul>
              <Link href="/contact" className="w-full py-3 rounded-full text-center bg-primary text-black hover:bg-primary/90 transition-colors font-semibold text-sm">
                Pilih Plus
              </Link>
            </div>

            {/* Pro */}
            <div className="card p-8 flex flex-col rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-white">Pro</h3>
                <p className="text-white/50 text-sm h-10">Pengalaman tanpa batas untuk orkestrasi penuh.</p>
              </div>
              <div className="mb-8">
                <div className="text-4xl font-display font-bold flex items-end gap-1">
                  <span className="text-2xl">Rp</span>299k<span className="text-lg text-white/40 font-normal">/bln</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-3 text-sm text-white/70">
                  <span className="text-primary">✓</span> 5,000 Credit AI
                </li>
                <li className="flex gap-3 text-sm text-white/70">
                  <span className="text-primary">✓</span> Akses API Khusus
                </li>
                <li className="flex gap-3 text-sm text-white/70">
                  <span className="text-primary">✓</span> Dukungan 24/7 Prioritas
                </li>
              </ul>
              <Link href="/contact" className="w-full py-3 rounded-full text-center border border-white/20 text-white hover:bg-white hover:text-black transition-colors font-semibold text-sm">
                Pilih Pro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Sub-Product: Punokawan (Powered by GG7) ─────────────────────── */}
      <section className="px-6 md:px-12 py-32 relative overflow-hidden">
        {/* Cinematic background — Time Travel Crash */}
        <div className="absolute inset-0 -z-10 opacity-[0.07] pointer-events-none">
          <Image
            src="/assets/agents/cinematic-bg.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* Wayang-inspired SVG ornament left */}
        <div className="absolute -left-20 top-1/4 opacity-10 pointer-events-none -z-10 hidden lg:block">
          <svg width="300" height="500" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 20 C 140 60, 140 120, 100 160 C 60 200, 60 260, 100 300 C 140 340, 140 380, 100 400" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 6" opacity="0.3"/>
            <path d="M100 40 C 130 80, 130 130, 100 160 C 70 190, 70 230, 100 260 C 130 290, 130 330, 100 380" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 4" opacity="0.15"/>
            <circle cx="100" cy="100" r="4" fill="#f59e0b" opacity="0.2"/>
            <circle cx="100" cy="240" r="4" fill="#f59e0b" opacity="0.2"/>
          </svg>
        </div>
        {/* Wayang-inspired SVG ornament right */}
        <div className="absolute -right-20 bottom-1/4 opacity-10 pointer-events-none -z-10 hidden lg:block">
          <svg width="250" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 0 C 70 60, 130 120, 100 180 C 70 240, 130 300, 100 400" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
            <path d="M100 30 C 80 80, 120 140, 100 190 C 80 240, 120 280, 100 350" stroke="#10b981" strokeWidth="1" opacity="0.1"/>
          </svg>
        </div>

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                Sub-Product · Powered by Agent GG7
              </span>
            </div>
            <h2 className="text-display-md md:text-display-lg font-display font-bold mb-6">
              Punokawan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                Core Agents
              </span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              <strong className="text-white/90">Punokawan Paham AI</strong> adalah lini produk agen AI eksekutor berkarakter Jawa — orkestrasinya ditenagai penuh oleh{" "}
              <span className="text-primary font-semibold">Agent GG7</span>, langsung siap membantu Anda.
            </p>
          </motion.div>

          {/* Team Group Banner */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 relative rounded-3xl overflow-hidden border border-white/10 h-72 md:h-96"
          >
            <Image
              src="/assets/agents/team-group.png"
              alt="4 Kekuatan, 1 Tujuan — Punokawan Paham AI"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-primary/20 border border-primary/40 rounded-full w-fit">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">4 Kekuatan · 1 Tujuan</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                Pulang dari Hollywood.<br/>
                <span className="text-primary">Siap bantu Indonesia.</span>
              </h3>
              <p className="text-white/70 max-w-md text-sm md:text-base">
                Punokawan diupgrade oleh GG7 — kini hadir sebagai AI Agent untuk kesehatan, pasar dunia, teknologi, dan bisnis.
              </p>
            </div>
          </motion.div>

          {/* Upgrade Narrative — before/after transformation visuals */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Transform 1 — Sales */}
              <div className="relative h-56 rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src="/assets/agents/transform-sales.png"
                  alt="Marketing Biasa → Sales Smart"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-1">Transform #1</div>
                  <div className="text-sm font-bold text-white">Marketing Biasa → Sales Smart</div>
                </div>
              </div>
              {/* Transform 2 — Student */}
              <div className="relative h-56 rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src="/assets/agents/transform-student.png"
                  alt="Dari Tulalit → Smart IQ Tinggi"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Transform #2</div>
                  <div className="text-sm font-bold text-white">Dari Tulalit → Smart IQ Tinggi</div>
                </div>
              </div>
              {/* Transform 3 — Upgrade Narrative */}
              <div className="relative h-56 rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src="/assets/agents/upgrade-narrative.png"
                  alt="Punokawan di-upgrade oleh GG7"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">The Mission</div>
                  <div className="text-sm font-bold text-white">Punokawan di-upgrade oleh GG7</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Semar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={scaleIn}
              className="group card overflow-hidden flex flex-col h-[520px]"
            >
              <div className="h-64 relative overflow-hidden bg-[#1A1A1A]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A] z-10" />
                <div className="absolute inset-0 group-hover:scale-105 transition-all duration-700">
                  <Image
                    src="/assets/agents/semar.png"
                    alt="Semar — Agent Sehat Waras"
                    fill
                    className="object-contain object-top"
                    sizes="300px"
                  />
                </div>
                <div className="absolute top-3 right-3 z-20 bg-amber-500/90 text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
                  Health · Wellness
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/40 to-transparent z-20" />
              </div>
              <div className="p-6 flex-grow flex flex-col relative z-20 -mt-12">
                <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-4 text-gold font-bold text-lg shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">Semar</h3>
                <p className="text-sm font-medium text-gold mb-2 tracking-wide">
                  Agent Sehat Waras
                </p>
                <p className="text-white/40 text-xs italic mb-3">&ldquo;Sehat itu pilihan, waras itu tujuan.&rdquo;</p>
                <ul className="text-white/60 text-xs space-y-1.5 mb-4 flex-grow">
                  <li className="flex gap-2"><span className="text-gold">✓</span>Pola makan sehat</li>
                  <li className="flex gap-2"><span className="text-gold">✓</span>Tidur &amp; pikiran tenang</li>
                  <li className="flex gap-2"><span className="text-gold">✓</span>Gerak &amp; kebiasaan harian</li>
                </ul>
                <Link
                  href="/contact?agent=semar"
                  className="mt-auto w-full py-2.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider border border-gold/30 bg-gold/[0.08] text-gold hover:bg-gold hover:text-black transition-all duration-300"
                >
                  Mulai Sesi →
                </Link>
              </div>
            </motion.div>

            {/* Petruk */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={scaleIn}
              className="group card overflow-hidden flex flex-col h-[520px]"
            >
              <div className="h-64 relative overflow-hidden bg-[#1A1A1A]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A] z-10" />
                <div className="absolute inset-0 group-hover:scale-105 transition-all duration-700">
                  <Image
                    src="/assets/agents/petruk.png"
                    alt="Petruk — Agent Pasar Dunia"
                    fill
                    className="object-contain object-top"
                    sizes="300px"
                  />
                </div>
                <div className="absolute top-3 right-3 z-20 bg-blue-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
                  Pasar · Market
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/40 to-transparent z-20" />
              </div>
              <div className="p-6 flex-grow flex flex-col relative z-20 -mt-12">
                <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-4 text-secondary font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">Petruk</h3>
                <p className="text-sm font-medium text-secondary mb-2 tracking-wide">
                  Agent Pasar Dunia
                </p>
                <p className="text-white/40 text-xs italic mb-3">&ldquo;Ngerti pasar, biar tidak asal ikut kabar.&rdquo;</p>
                <ul className="text-white/60 text-xs space-y-1.5 mb-4 flex-grow">
                  <li className="flex gap-2"><span className="text-secondary">✓</span>Pasar saham dasar</li>
                  <li className="flex gap-2"><span className="text-secondary">✓</span>Emas, dolar &amp; aset aman</li>
                  <li className="flex gap-2"><span className="text-secondary">✓</span>Ekonomi dunia &amp; geopolitik</li>
                </ul>
                <Link
                  href="/contact?agent=petruk"
                  className="mt-auto w-full py-2.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider border border-secondary/30 bg-secondary/[0.08] text-secondary hover:bg-secondary hover:text-black transition-all duration-300"
                >
                  Mulai Sesi →
                </Link>
              </div>
            </motion.div>

            {/* Gareng */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={scaleIn}
              className="group card overflow-hidden flex flex-col h-[520px]"
            >
              <div className="h-64 relative overflow-hidden bg-[#1A1A1A]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A] z-10" />
                <div className="absolute inset-0 group-hover:scale-105 transition-all duration-700">
                  <Image
                    src="/assets/agents/gareng.png"
                    alt="Gareng — Agent AI Digital"
                    fill
                    className="object-contain object-top"
                    sizes="300px"
                  />
                </div>
                <div className="absolute top-3 right-3 z-20 bg-amber-400/90 text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
                  AI · Digital
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/40 to-transparent z-20" />
              </div>
              <div className="p-6 flex-grow flex flex-col relative z-20 -mt-12">
                <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-4 text-primary font-bold text-lg shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">Gareng</h3>
                <p className="text-sm font-medium text-primary mb-2 tracking-wide">
                  Agent AI Digital
                </p>
                <p className="text-white/40 text-xs italic mb-3">&ldquo;Saya bukan manusia — tapi bantu manusia jadi tidak tulalit!&rdquo;</p>
                <ul className="text-white/60 text-xs space-y-1.5 mb-4 flex-grow">
                  <li className="flex gap-2"><span className="text-primary">✓</span>Cari info &amp; belajar cepat</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span>Bikin konten &amp; kerja praktis</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span>Ide kreatif &amp; solusi masalah</li>
                </ul>
                <Link
                  href="/contact?agent=gareng"
                  className="mt-auto w-full py-2.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider border border-primary/30 bg-primary/[0.08] text-primary hover:bg-primary hover:text-black transition-all duration-300"
                >
                  Mulai Sesi →
                </Link>
              </div>
            </motion.div>

            {/* Bagong */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={scaleIn}
              className="group card overflow-hidden flex flex-col h-[520px]"
            >
              <div className="h-64 relative overflow-hidden bg-[#1A1A1A]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A] z-10" />
                <div className="absolute inset-0 group-hover:scale-105 transition-all duration-700">
                  <Image
                    src="/assets/agents/bagong.png"
                    alt="Bagong — Agent Bisnis"
                    fill
                    className="object-contain object-top"
                    sizes="300px"
                  />
                </div>
                <div className="absolute top-3 right-3 z-20 bg-emerald-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
                  Bisnis · UMKM
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/40 to-transparent z-20" />
              </div>
              <div className="p-6 flex-grow flex flex-col relative z-20 -mt-12">
                <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-4 text-accent font-bold text-lg shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">Bagong</h3>
                <p className="text-sm font-medium text-accent mb-2 tracking-wide">
                  Agent Bisnis
                </p>
                <p className="text-white/40 text-xs italic mb-3">&ldquo;Cuan boleh, tapi waras harus!&rdquo;</p>
                <ul className="text-white/60 text-xs space-y-1.5 mb-4 flex-grow">
                  <li className="flex gap-2"><span className="text-accent">✓</span>Jago jualan &amp; UMKM naik kelas</li>
                  <li className="flex gap-2"><span className="text-accent">✓</span>Melek keuangan &amp; anti ketipu</li>
                  <li className="flex gap-2"><span className="text-accent">✓</span>Bisnis online &amp; digital marketing</li>
                </ul>
                <Link
                  href="/contact?agent=bagong"
                  className="mt-auto w-full py-2.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider border border-accent/30 bg-accent/[0.08] text-accent hover:bg-accent hover:text-black transition-all duration-300"
                >
                  Mulai Sesi →
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/punokawan" className="btn-secondary inline-flex items-center gap-2">
              <span>Eksplorasi Tim Punokawan</span>
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      <InteractiveCaseStudy />

      {/* ─── Marquee ──────────────────────────────────────────────────── */}
      <section className="py-12 overflow-hidden border-t border-white/5 relative bg-white/[0.01]">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex whitespace-nowrap animate-marquee items-center gap-16 px-8">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex gap-16 items-center text-white/20 font-display text-4xl uppercase tracking-widest opacity-50"
            >
              <span className="flex items-center gap-4">
                KARSA <span className="text-primary">•</span>
              </span>
              <span className="flex items-center gap-4">
                CIPTA <span className="text-secondary">•</span>
              </span>
              <span className="flex items-center gap-4">
                RASA <span className="text-gold">•</span>
              </span>
              <span className="flex items-center gap-4">
                KARYA <span className="text-accent">•</span>
              </span>
              <span className="flex items-center gap-4 text-white">
                INKLUSIF <span className="text-primary">•</span>
              </span>
              <span className="flex items-center gap-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                NUSANTARA PAHAM AI
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
