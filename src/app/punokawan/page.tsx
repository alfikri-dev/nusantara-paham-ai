import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Karakter Punokawan - Nusantara Paham AI",
};

const punokawanList = [
  {
    name: "Gareng",
    role: "Agent AI Digital (Jenaka)",
    description: "Si cerdik yang penuh ide segar. Bantu kamu bikin konten, cari ide kreatif, dan pecahkan masalah dengan gaya.",
    image: "/assets/gareng.png",
    accent: "bg-secondary",
    features: ["Ide Kreatif", "Konten", "Solusi Praktis"]
  },
  {
    name: "Semar",
    role: "Sang Pamong (Bijak)",
    description: "Kebijaksanaan Nusantara. Ahli strategi, pemberi nasehat filosofis, dan penjaga nilai moral dalam teknologi.",
    image: "/assets/semar.png",
    accent: "bg-primary",
    features: ["Strategi", "Filosofi", "Nasihat Bijak"]
  },
  {
    name: "Petruk",
    role: "Si Sastrawan (Kreatif)",
    description: "Pujangga AI. Jago merangkai kata, membuat puisi, cerita panjang, atau presentasi yang memukau.",
    image: "/assets/petruk.png",
    accent: "bg-gold",
    features: ["Copywriting", "Storytelling", "Sastra"]
  },
  {
    name: "Bagong",
    role: "Si Polos (Kritis)",
    description: "Kritis dan jujur. Dia akan mempertanyakan asumsimu, mencari bug, dan memberikan sudut pandang tak terduga.",
    image: "/assets/bagong.png",
    accent: "bg-accent",
    features: ["Review Code", "QA Testing", "Kritik Solutif"]
  }
];

export default function Punokawan() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link href="/" className="text-white/50 hover:text-white transition-colors">
            ← Kembali
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Pilih <span className="text-primary">Punokawan AI</span>-mu
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {punokawanList.map((agent) => (
            <div key={agent.name} className="card p-6 md:p-8 flex flex-col md:flex-row gap-8 group">
              {/* Avatar Column */}
              <div className="w-full md:w-48 h-64 md:h-auto relative shrink-0 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  width={400}
                  height={400}
                  className="object-cover group-hover:scale-105 transition-transform duration-500 w-full h-full"
                />
              </div>

              {/* Info Column */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className={`w-2 h-2 rounded-full ${agent.accent}`} />
                    <span className="text-sm uppercase tracking-wider text-white/60 font-medium">
                      {agent.role}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-3">{agent.name}</h2>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {agent.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {agent.features.map(feat => (
                      <span key={feat} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full py-3 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                  Ngobrol dengan {agent.name} <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
