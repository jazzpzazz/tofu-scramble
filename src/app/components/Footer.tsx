export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
        <p className="font-mono">
          <span className="text-emerald-400">tofu-scramble</span> © {year} — built with ☕ &amp; curiosity
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/jazzpzazz/tofu-scramble"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            Source
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
      </div>
    </footer>
  );
}
