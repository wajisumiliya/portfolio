import React from 'react';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar 
} from 'recharts';

const Skills: React.FC = () => {
  const chartData = [
    { subject: 'Frontend', A: 95, fullMark: 100 },
    { subject: 'Backend', A: 85, fullMark: 100 },
    { subject: 'Architecture', A: 80, fullMark: 100 },
    { subject: 'Database', A: 85, fullMark: 100 },
    { subject: 'Systems', A: 75, fullMark: 100 },
    { subject: 'Logic', A: 90, fullMark: 100 },
  ];

  const skillCategories = [
    { title: "Front-End", skills: ["HTML5", "CSS3", "JavaScript", "React.js"] },
    { title: "Back-End", skills: ["Python", "Node.js", "ASP.Net", "C#"] },
    { title: "Database", skills: ["MySQL", "MongoDB", "Postgres", "Redis"] },
    { title: "Cloud", skills: ["AWS", "Docker", "Git", "CI/CD"] }
  ];

  return (
    <section id="skills" className="py-16 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">Technical Mastery</h2>
          <div className="w-16 h-1 bg-sky-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
             A multidimensional view of core engineering capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="h-[300px] md:h-[350px] bg-slate-900/30 rounded-2xl border border-slate-800 p-4 flex items-center justify-center backdrop-blur-sm">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#1e293b" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Exp" dataKey="A" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.15} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skillCategories.map((category) => (
              <div key={category.title} className="p-4 bg-slate-900/30 border border-slate-800 rounded-xl hover:bg-slate-900/50 transition-all group">
                <h3 className="text-sky-400 font-bold mb-3 text-[10px] uppercase tracking-widest flex items-center">
                  <span className="w-1 h-1 bg-sky-500 rounded-full mr-1.5"></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map(skill => (
                    <span key={skill} className="text-[9px] font-bold px-1.5 py-0.5 bg-slate-800 text-slate-400 rounded border border-slate-700 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;