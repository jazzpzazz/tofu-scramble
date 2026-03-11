export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-5xl mx-auto">
      <div className="mb-4 text-emerald-400 font-mono text-sm tracking-widest uppercase">
        Hello, world 👋
      </div>
      <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
        I&apos;m{" "}
        <span className="text-emerald-400">Jazz</span>
        <span className="block text-3xl sm:text-5xl mt-2 text-slate-300 font-semibold">
          AI Explorer &amp; Creative Tinkerer
        </span>
      </h1>
      <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
        Welcome to <span className="text-emerald-400 font-mono">tofu-scramble</span> — my little corner
        of the internet where AI experiments meet personal projects. I build things to learn,
        to have fun, and to show what I&apos;m capable of. Grab a fork 🍴
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-lg transition-colors"
        >
          See My Projects ↓
        </a>
        <a
          href="#about"
          className="px-6 py-3 border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 font-semibold rounded-lg transition-colors"
        >
          More About Me
        </a>
      </div>

      <div className="mt-20 flex flex-wrap gap-6 text-slate-500 text-sm font-mono">
        {["Python", "TypeScript", "LLMs", "Next.js", "AI/ML"].map((tag) => (
          <span key={tag} className="px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
