const funFacts = [
  { emoji: "🍳", text: "The name \"tofu-scramble\" is both a breakfast staple and a metaphor — mixing ingredients until something delicious emerges." },
  { emoji: "🎵", text: "The \"jazz\" in jazzpzazz isn't just a name — it's a philosophy: improvise, experiment, and make it swing." },
  { emoji: "🤖", text: "I genuinely believe AI is the most exciting technology of our generation, and I want to be right there building with it." },
  { emoji: "🌱", text: "I'm always learning. \"Done\" is never done — there's always a new model, framework, or idea worth exploring." },
  { emoji: "😄", text: "Life's too short to take yourself too seriously. I build projects that are both useful AND a little fun." },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-2">
          The Human Behind the Code
        </p>
        <h2 className="text-4xl font-bold text-white">About Me</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Hey! I&apos;m Jazz — a developer, AI enthusiast, and lifelong tinkerer. I built this site
            to share what I&apos;m working on, show what I can do, and hopefully give you a glimpse
            into what makes me <em className="text-emerald-400">me</em>.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            Whether it&apos;s building a new AI-powered tool, exploring the latest in machine learning,
            or just hacking together something fun over the weekend — I&apos;m always in the mix.
            This portfolio is a living document of that journey.
          </p>
          <p className="text-slate-400 leading-relaxed">
            If you&apos;re a future employer, collaborator, or just someone curious — welcome!
            Take a look around, and don&apos;t hesitate to reach out.
          </p>

          <div className="mt-8">
            <a
              href="https://github.com/jazzpzazz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 font-semibold rounded-lg transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View GitHub Profile
            </a>
          </div>
        </div>

        <div className="space-y-4">
          {funFacts.map((fact, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 bg-slate-800/40 border border-slate-700/60 rounded-lg hover:border-emerald-500/30 transition-colors"
            >
              <span className="text-2xl flex-shrink-0">{fact.emoji}</span>
              <p className="text-slate-400 text-sm leading-relaxed">{fact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
