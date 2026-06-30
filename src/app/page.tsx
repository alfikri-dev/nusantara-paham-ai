import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 md:px-12">
        <div className="absolute inset-0 bg-gradient-hero opacity-10 -z-10"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-sm font-medium text-primary">🇮🇩 Paham Nusantara, Cerdas Digital</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
              AI Pintar yang <span className="text-transparent bg-clip-text bg-gradient-hero">Paham Budaya Nusantara</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-xl">
              Temui Punokawan AI. Karakter abadi dari tanah Jawa, ditenagai model AI terbaru (GPT, Claude, Gemini). Bijak, jenaka, dan siap membantu.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Link href="/punokawan" className="btn-primary text-center">
                🚀 Mulai Ngobrol
              </Link>
              <Link href="#features" className="btn-secondary text-center">
                Pelajari Fitur
              </Link>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full"></div>
            <Image
              src="/assets/gareng.png"
              alt="Gareng - Punokawan AI"
              width={500}
              height={500}
              className="relative rounded-2xl border-2 border-primary/30 shadow-2xl shadow-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Tiga Pilar Punokawan <span className="text-primary">Paham AI</span>
            </h2>
            <p className="text-white/60 text-lg">Pendamping yang memahami cara kamu berpikir dan bercerita</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-8 hover:scale-105">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Bijak (Semar)</h3>
              <p className="text-white/70">Konsultasi strategi, analisis mendalam, dan batasan moral dengan kearifan lokal.</p>
            </div>
            <div className="card p-8 hover:scale-105">
              <div className="text-4xl mb-4">😄</div>
              <h3 className="text-2xl font-bold mb-3 text-secondary">Jenaka (Gareng)</h3>
              <p className="text-white/70">Bikin konten, dapat ide segar, dan temukan solusi masalah dengan sudut pandang jenaka.</p>
            </div>
            <div className="card p-8 hover:scale-105">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-3 text-gold">Sastrawi (Petruk)</h3>
              <p className="text-white/70">Menulis dengan gaya, merangkai kata, dan menggubah narasi panjang penuh makna.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Strip */}
      <section className="px-6 md:px-12 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-white/40 mb-6">Didukung oleh model AI terbaik</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white/50 text-lg font-semibold">
            <span>GPT-4o</span>
            <span>•</span>
            <span>Claude 3.7</span>
            <span>•</span>
            <span>Gemini 2.5</span>
            <span>•</span>
            <span>Llama 3</span>
            <span>•</span>
            <span>DeepSeek</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-white/5 text-center text-white/40 text-sm">
        <p>© 2026 Nusantara Paham AI. Punokawan abadi, ditenagai AI.</p>
      </footer>
    </main>
  );
}
