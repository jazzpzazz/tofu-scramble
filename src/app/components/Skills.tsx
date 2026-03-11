const skillCategories = [
  {
    category: "AI & Machine Learning",
    icon: "🧠",
    skills: [
      { name: "Prompt Engineering", level: 90 },
      { name: "Large Language Models", level: 85 },
      { name: "Python", level: 80 },
      { name: "HuggingFace Transformers", level: 70 },
    ],
  },
  {
    category: "Web Development",
    icon: "🌐",
    skills: [
      { name: "TypeScript / JavaScript", level: 85 },
      { name: "React & Next.js", level: 80 },
      { name: "Tailwind CSS", level: 75 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    category: "Tools & Practices",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Docker (learning)", level: 50 },
      { name: "CI/CD", level: 65 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-2">
          What I Know
        </p>
        <h2 className="text-4xl font-bold text-white">Skills</h2>
        <p className="mt-3 text-slate-400 max-w-xl">
          A growing toolkit — from AI APIs to frontend frameworks, I love picking up new skills.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="text-white font-semibold">{cat.category}</h3>
            </div>
            <ul className="space-y-4">
              {cat.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-slate-500 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
