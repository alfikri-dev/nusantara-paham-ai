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
          style={{ y: circle1Y }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] -z-10"
          style={{ y: circle2Y }}
        />

        {/* Corner ornaments */}
        <div className="absolute top-28 left-8 w-16 h-16 border-t-2 border-l-2 border-primary/20 opacity-40 -z-10" />
        <div className="absolute top-28 right-8 w-16 h-16 border-t-2 border-r-2 border-primary/20 opacity-40 -z-10" />
        <div className="absolute bottom-16 left-8 w-16 h-16 border-b-2 border-l-2 border-primary/20 opacity-40 -z-10" />
        <div className="absolute bottom-16 right-8 w-16 h-16 border-b-2 border-r-2 border-primary/20 opacity-40 -z-10" />

        <div className="mx-auto max-w-7xl flex flex-col items-center justify-center text-center w-full relative z-10 pt-10">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={springs.bouncy}
              className="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse-glow" />
              <span className="text-xs md:text-sm font-semibold tracking-widest text-amber-500/90 uppercase">
                {totalProvinsi} Provinsi · Satu Nusantara
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-display-lg md:text-display-xl lg:text-[5.5rem] font-display font-bold leading-[1.05] mb-8 tracking-tight"
            >
              Nusantara
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-primary to-secondary">
                  Paham AI
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-primary/20 blur-xl -z-10" />
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl font-medium leading-relaxed"
            >
              Bukan sekadar mesin penjawab. Kecerdasan buatan yang dibangun di
              atas fondasi Karsa, Cipta, Rasa, dan Karya — menyatukan kearifan
              lokal 17.000 pulau dengan kekuatan Agentic AI.
            </motion.p>

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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Nusantara Province Map Section ──────────────────────────── */}
      <section
        id="nusantara"
        className="px-6 md:px-12 py-24 relative bg-black/40 border-y border-white/5 backdrop-blur-xl"
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

      {/* ─── Core Agents (Punokawan) Section ──────────────────────────── */}
      <section className="px-6 md:px-12 py-32 relative">
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
                Tim Eksekutor
              </span>
            </div>
            <h2 className="text-display-md md:text-display-lg font-display font-bold mb-6">
              Punokawan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                Core Agents
              </span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
              Empat AI Agent yang mewarisi sifat dan peran Punokawan Jawa.
              Orkestrasi cerdas untuk menyelesaikan tugas kompleks secara
              paralel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Semar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={scaleIn}
              className="group card overflow-hidden flex flex-col h-[420px]"
            >
              <div className="h-48 relative overflow-hidden bg-[#1A1A1A]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A] z-10" />
                <div className="absolute inset-0 opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700">
                  <Image
                    src="/assets/semar.png"
                    alt="Semar"
                    fill
                    className="object-cover object-top mix-blend-screen"
                    sizes="300px"
                  />
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col relative z-20 -mt-12">
                <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-4 text-gold font-bold text-lg">
                  S
                </div>
                <h3 className="text-2xl font-bold mb-1">Semar</h3>
                <p className="text-sm font-medium text-gold mb-3">
                  Sehat Waras · Master Agent
                </p>
                <p className="text-white/50 text-sm leading-relaxed mb-4 flex-grow">
                  Sang Orkestrator. Mengatur koordinasi semua sub-agent. Bijak
                  dan memastikan arah solusi sesuai konteks etis &amp; tujuan
                  utama.
                </p>
                <Link
                  href="/punokawan#semar"
                  className="text-xs font-bold text-white/40 hover:text-white uppercase tracking-wider transition-colors"
                >
                  Lihat Detail →
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
              className="group card overflow-hidden flex flex-col h-[420px]"
            >
              <div className="h-48 relative overflow-hidden bg-[#1A1A1A]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A] z-10" />
                <div className="absolute inset-0 opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700">
                  <Image
                    src="/assets/petruk.png"
                    alt="Petruk"
                    fill
                    className="object-cover object-top mix-blend-screen"
                    sizes="300px"
                  />
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col relative z-20 -mt-12">
                <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-4 text-secondary font-bold text-lg">
                  P
                </div>
                <h3 className="text-2xl font-bold mb-1">Petruk</h3>
                <p className="text-sm font-medium text-secondary mb-3">
                  Pasar Dunia · Analyst Agent
                </p>
                <p className="text-white/50 text-sm leading-relaxed mb-4 flex-grow">
                  Fokus pada analitik, riset tren, dan pengolahan data. Intuisi
                  tajam membaca probabilitas pasar global.
                </p>
                <Link
                  href="/punokawan#petruk"
                  className="text-xs font-bold text-white/40 hover:text-white uppercase tracking-wider transition-colors"
                >
                  Lihat Detail →
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
              className="group card overflow-hidden flex flex-col h-[420px]"
            >
              <div className="h-48 relative overflow-hidden bg-[#1A1A1A]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A] z-10" />
                <div className="absolute inset-0 opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700">
                  <Image
                    src="/assets/gareng_anak.webp"
                    alt="Gareng"
                    fill
                    className="object-cover object-top mix-blend-screen"
                    sizes="300px"
                  />
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col relative z-20 -mt-12">
                <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-4 text-primary font-bold text-lg">
                  G
                </div>
                <h3 className="text-2xl font-bold mb-1">Gareng</h3>
                <p className="text-sm font-medium text-primary mb-3">
                  Ahli AI · Creative Agent
                </p>
                <p className="text-white/50 text-sm leading-relaxed mb-4 flex-grow">
                  Ide luar kotak. Spesialis copywriting, generasi konten, dan
                  desain. Hasilnya selalu jenius dan tepat sasaran.
                </p>
                <Link
                  href="/punokawan#gareng"
                  className="text-xs font-bold text-white/40 hover:text-white uppercase tracking-wider transition-colors"
                >
                  Lihat Detail →
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
              className="group card overflow-hidden flex flex-col h-[420px]"
            >
              <div className="h-48 relative overflow-hidden bg-[#1A1A1A]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A] z-10" />
                <div className="absolute inset-0 opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700">
                  <Image
                    src="/assets/bagong.png"
                    alt="Bagong"
                    fill
                    className="object-cover object-top mix-blend-screen"
                    sizes="300px"
                  />
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col relative z-20 -mt-12">
                <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-4 text-accent font-bold text-lg">
                  B
                </div>
                <h3 className="text-2xl font-bold mb-1">Bagong</h3>
                <p className="text-sm font-medium text-accent mb-3">
                  Tukang Bisnis · Executor
                </p>
                <p className="text-white/50 text-sm leading-relaxed mb-4 flex-grow">
                  Praktis dan lugas. Eksekutor andal yang langsung bertindak
                  tanpa basa-basi. Cocok untuk automasi dan optimasi sistem.
                </p>
                <Link
                  href="/punokawan#bagong"
                  className="text-xs font-bold text-white/40 hover:text-white uppercase tracking-wider transition-colors"
                >
                  Lihat Detail →
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/punokawan" className="btn-secondary inline-flex">
              Eksplorasi Tim Punokawan
            </Link>
          </div>
        </div>
      </section>

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
              <span className="flex items-center gap-4">
                38 PROVINSI <span className="text-white">•</span>
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
