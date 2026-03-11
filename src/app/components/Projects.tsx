const projects = [
  {
    title: "tofu-scramble",
    emoji: "🥚",
    description:
      "This very website — built with Next.js, TypeScript, and Tailwind CSS. A personal playground for AI experiments and project showcases.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/jazzpzazz/tofu-scramble",
    status: "Active",
  },
  {
    title: "AI Chat Assistant",
    emoji: "🤖",
    description:
      "A conversational AI assistant built using large language model APIs. Experiments with prompt engineering, context management, and response quality.",
    tags: ["Python", "LLMs", "OpenAI API"],
    href: "https://github.com/jazzpzazz",
    status: "In Progress",
  },
  {
    title: "Creative Text Generator",
    emoji: "✍️",
    description:
      "Leverages generative AI to assist with creative writing. Explores fine-tuning, style transfer, and few-shot prompting techniques.",
    tags: ["Python", "Transformers", "HuggingFace"],
    href: "https://github.com/jazzpzazz",
    status: "Exploring",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-2">
          What I&apos;ve Built
        </p>
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <p className="mt-3 text-slate-400 max-w-xl">
          A mix of AI experiments, web apps, and creative tools. Always building, always learning.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-emerald-500/60 hover:bg-slate-800 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">{project.emoji}</span>
              <span
                className={`text-xs font-mono px-2 py-1 rounded-full border ${
                  project.status === "Active"
                    ? "text-emerald-400 border-emerald-400/30 bg-emerald-400/10"
                    : project.status === "In Progress"
                    ? "text-amber-400 border-amber-400/30 bg-amber-400/10"
                    : "text-blue-400 border-blue-400/30 bg-blue-400/10"
                }`}
              >
                {project.status}
              </span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-emerald-400 transition-colors font-mono">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm flex-1 leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded bg-slate-700/60 text-slate-300 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
