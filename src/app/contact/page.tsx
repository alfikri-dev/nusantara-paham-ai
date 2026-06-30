"use client";

import { motion } from "framer-motion";
import { fadeInUp, springs } from "@/lib/motion";
import { useState } from "react";

const AGENT_RESPONSES: Record<string, string[]> = {
  partnership: [
    "Rogoh Gareng Online... 📡",
    "Gareng menganalisa peluang kolaborasi Anda.",
    "Serahkan form ini pada Semar untuk arahan strategis.",
  ],
  technical: [
    "Memanggil Petruk ke terminal... ⚙️",
    "Petruk sedang meninjau detail teknis Anda.",
    "Laporan akan diteruskan ke tim engineer.",
  ],
  business: [
    "Bagong siap eksekusi bisnis! 💼",
    "Menghitung potensi revenue dan growth trajectory...",
    "Tim bisnis kami akan merespons dalam 24 jam.",
  ],
  general: [
    "Semar menerima pesanmu... 🧿",
    "Memproses konteks dan menentukan agen terbaik...",
    "Kami akan membalas dalam waktu dekat.",
  ],
};

const TOPICS = [
  { id: "general", label: "Pertanyaan Umum", agent: "Semar", icon: "🧿", color: "text-gold border-gold/30 bg-gold/5" },
  { id: "partnership", label: "Kerjasama & Partnership", agent: "Gareng", icon: "🎨", color: "text-primary border-primary/30 bg-primary/5" },
  { id: "technical", label: "Integrasi Teknis", agent: "Petruk", icon: "📊", color: "text-secondary border-secondary/30 bg-secondary/5" },
  { id: "business", label: "Solusi Bisnis", agent: "Bagong", icon: "💼", color: "text-accent border-accent/30 bg-accent/5" },
];

export default function ContactPage() {
  const [topic, setTopic] = useState("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<"form" | "typing" | "done">("form");
  const [typingMsgs, setTypingMsgs] = useState<string[]>([]);

  const selectedTopic = TOPICS.find((t) => t.id === topic)!;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const messages = AGENT_RESPONSES[topic] ?? AGENT_RESPONSES.general;
    setTypingMsgs([]);
    setStep("typing");

    for (let i = 0; i < messages.length; i++) {
      await new Promise((res) => setTimeout(res, 900));
      setTypingMsgs((prev) => [...prev, messages[i]]);
    }

    await new Promise((res) => setTimeout(res, 600));
    setStep("done");
  };

  return (
    <main className="min-h-screen pt-28 pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Nusantara SVG deco */}
      <svg
        className="absolute top-16 right-8 opacity-5 w-64 h-auto pointer-events-none hidden md:block"
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 100 C 40 80, 80 70, 120 90 C 160 110, 200 80, 240 100 C 280 120, 320 90, 360 100 C 380 106, 390 112, 400 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary" />
        <circle cx="60" cy="90" r="8" fill="currentColor" className="text-secondary opacity-50" />
        <circle cx="200" cy="80" r="5" fill="currentColor" className="text-primary opacity-50" />
        <circle cx="330" cy="95" r="6" fill="currentColor" className="text-accent opacity-50" />
      </svg>

      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Dipandu AI Agent</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Us</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Pesan kamu akan diterima dan diarahkan ke Agen Punokawan yang paling tepat menanganinya.
          </p>
        </motion.div>

        {step === "form" && (
          <motion.form
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Topic selector */}
            <div>
              <p className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">01 — Pilih topik</p>
              <div className="grid grid-cols-2 gap-3">
                {TOPICS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTopic(t.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-semibold text-left transition-all duration-200 ${
                      topic === t.id
                        ? t.color + " shadow-glow-primary"
                        : "border-white/10 bg-white/[0.03] text-white/40 hover:bg-white/[0.06] hover:text-white/70"
                    }`}
                  >
                    <span className="text-xl">{t.icon}</span>
                    <div>
                      <div>{t.label}</div>
                      <div className="text-xs font-normal opacity-60">Diterima oleh {t.agent}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Name + Email */}
            <div>
              <p className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">02 — Identitas</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/40 mb-2 font-medium">Nama</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Siapa kamu?"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 mb-2 font-medium">Email</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@kamu.com"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <p className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">03 — Pesan</p>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Ceritakan apa yang kamu butuhkan..."
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all resize-none"
              />
            </div>

            {/* Agent preview */}
            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${selectedTopic.color}`}>
              <span className="text-2xl">{selectedTopic.icon}</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider opacity-60">Agen yang menangani</p>
                <p className="font-bold">{selectedTopic.agent} — {selectedTopic.label}</p>
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2 text-base"
            >
              <span>Kirim ke {selectedTopic.agent}</span>
              <span>→</span>
            </button>
          </motion.form>
        )}

        {/* Typing animation — agent processing */}
        {step === "typing" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4 py-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{selectedTopic.icon}</span>
              <div>
                <p className="font-bold text-lg">{selectedTopic.agent}</p>
                <p className="text-xs text-white/40">Sedang memproses pesanmu...</p>
              </div>
              <div className="ml-auto flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>

            <div className="space-y-3">
              {typingMsgs.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3"
                >
                  <span className="text-lg mt-0.5">{selectedTopic.icon}</span>
                  <p className="text-sm text-white/80">{msg}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Done */}
        {step === "done" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={springs.bouncy}
            className="text-center py-12 space-y-6"
          >
            <div className="text-7xl mb-2">{selectedTopic.icon}</div>
            <h2 className="text-3xl font-display font-bold">Pesan Diterima!</h2>
            <p className="text-white/50 max-w-md mx-auto">
              <strong>{selectedTopic.agent}</strong> sudah menerima pesanmu dan akan mengarahkan ke tim yang tepat. Cek email{" "}
              <span className="text-primary">{email}</span> untuk konfirmasi.
            </p>
            <button
              onClick={() => { setStep("form"); setName(""); setEmail(""); setMessage(""); }}
              className="btn-secondary mx-auto"
            >
              Kirim Pesan Lain
            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
