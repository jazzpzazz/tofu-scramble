export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50">
      <a href="#" className="text-xl font-bold text-emerald-400 font-mono">
        tofu-scramble
      </a>
      <div className="flex gap-6 text-sm text-slate-300">
        <a href="#projects" className="hover:text-emerald-400 transition-colors">
          Projects
        </a>
        <a href="#skills" className="hover:text-emerald-400 transition-colors">
          Skills
        </a>
        <a href="#about" className="hover:text-emerald-400 transition-colors">
          About
        </a>
        <a
          href="https://github.com/jazzpzazz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition-colors"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
