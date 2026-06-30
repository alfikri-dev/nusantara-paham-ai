"use client";

import { motion } from "framer-motion";
import { fadeInUp, springs } from "@/lib/motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none -z-10" />
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full">
            <span className="text-sm font-medium text-white/70">Tentang Proyek Ini</span>
          </div>
          <h1 className="text-display-lg md:text-display-xl font-display font-bold mb-6">
            Menghidupkan <span className="text-primary italic">Kearifan Lokal</span> di Era AI
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed">
            Nusantara Paham AI lahir dari satu keresahan: mengapa semua asisten AI terasa seperti birokrat dari Silicon Valley?
          </p>
        </motion.div>

        <div className="grid gap-12 md:gap-24">
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springs.gentle}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="flex-1">
              <h2 className="text-3xl font-display font-bold mb-4">Filosofi Punokawan</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                Dalam pewayangan Jawa, Punokawan bukanlah ksatria atau raja. Mereka adalah pamong (pengasuh) yang menemani para ksatria. Mereka sakti, tapi memilih wujud rakyat jelata. Mereka kritis, jenaka, namun sarat akan kebijaksanaan.
              </p>
              <p className="text-white/60 leading-relaxed">
                Kami percaya inilah sosok ideal sebuah AI: pendamping yang pintar, tidak menggurui, memahami konteks lokal, dan siap membantu manusia mencapai tujuannya.
              </p>
            </div>
            <div className="flex-1 w-full h-64 relative rounded-2xl overflow-hidden glass p-4">
              <Image 
                src="/assets/punokawan_group.webp" 
                alt="Punokawan Group" 
                fill 
                className="object-cover opacity-80 mix-blend-screen"
              />
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springs.gentle}
            className="card p-8 md:p-12 border-primary/20 bg-primary/5"
          >
            <h2 className="text-3xl font-display font-bold mb-6 text-center">Teknologi di Balik Layar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">1. Sistem Persona Multi-Layer</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Bukan sekadar system prompt sederhana. Setiap karakter memiliki basis pengetahuan, tone of voice, dan batasan etika yang disuntikkan sebelum terhubung ke LLM.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-secondary mb-2">2. LLM Agnostik</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Platform ini dapat di-route ke berbagai model (GPT-4o, Claude 3.7, Gemini) tergantung kompleksitas tugas yang diminta pengguna.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gold mb-2">3. Visual Generation</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Didukung oleh pipeline image generation (Stable Diffusion / Flux) untuk menciptakan aset visual bernuansa Nusantara secara real-time.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-2">4. UI/UX Modern</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Dibangun dengan Next.js 14, Tailwind CSS, dan Framer Motion. Menggabungkan CSS-Art dan performa tinggi (60fps) untuk pengalaman imersif.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
