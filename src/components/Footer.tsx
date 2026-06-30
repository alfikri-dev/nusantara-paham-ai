import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-hero rounded-lg opacity-80" />
                <span className="relative text-white font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-sm">
                Nusantara <span className="text-primary">Paham AI</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Platform AI pertama yang menggabungkan kearifan lokal Nusantara dengan kecanggihan model AI modern.
              Bijak, jenaka, dan siap membantu.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm text-white/60 mb-4 uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2">
              {[
                { href: "/punokawan", label: "Punokawan AI" },
                { href: "/about", label: "Tentang" },
                { href: "/chat", label: "Chat" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Powered by */}
          <div>
            <h4 className="font-semibold text-sm text-white/60 mb-4 uppercase tracking-wider">Tenaga AI</h4>
            <ul className="space-y-2 text-sm text-white/40">
              {["GPT-4o", "Claude Sonnet", "Gemini 2.5", "Llama 3", "DeepSeek"].map((model) => (
                <li key={model}>{model}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Nusantara Paham AI. Punokawan abadi, ditenagai AI.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <span>🇮🇩 Bangga Buatan Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
