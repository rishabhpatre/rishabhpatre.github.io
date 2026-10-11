import React from "react";
import fs from "fs/promises";
import path from "path";
import { PortfolioData } from "./portfolio";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { StickyCaseStudyButton } from "../components/StickyButton/StickyCaseStudyButton";

async function getData(): Promise<PortfolioData> {
  const dataPath = path.join(process.cwd(), "src/data/portfolio.json");
  const file = await fs.readFile(dataPath, "utf8");
  return JSON.parse(file);
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-[#101922]/70 border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <a href="#" className="size-8 bg-primary hover:bg-[#a94a1d] rounded-lg flex items-center justify-center text-white transition-colors">
                <span className="material-symbols-outlined text-xl">home</span>
              </a>
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">Rishabh Patre</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">About</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#experience">Experience</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#roles">Roles</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#onsite-projects">Onsite</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#showcase">Showcase</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#ai-projects">AI Projects</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#education">Education</a>
            </div>
            <div className="flex items-center gap-4">
              <a className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary hover:bg-[#a94a1d] text-white text-sm font-semibold rounded-lg transition-colors shadow-sm shadow-primary/30" href="#">
                <span className="material-symbols-outlined text-lg">download</span>
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 auto-rows-min">

          {/* --- LEFT COLUMN (Sidebar) --- */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4 flex flex-col gap-6">

            {/* Profile Section */}
            <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col gap-6 items-center text-center relative group overflow-hidden" id="about">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

              {/* Avatar */}
              <div className="relative w-32 h-32 shrink-0 mx-auto">
                <div className="w-full h-full rounded-2xl bg-slate-200 dark:bg-slate-700 overflow-hidden shadow-inner bg-cover bg-center" style={{ backgroundImage: `url('${data.profile.avatar}')` }}></div>
                <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 p-1.5 rounded-xl shadow-md border border-slate-100 dark:border-slate-700">
                  <div className="size-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg">⚡</span>
                  </div>
                </div>
              </div>

              {/* Basic Info */}
              <div className="flex flex-col gap-3 relative z-10 w-full">
                <div>
                  <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                    {data.profile.name}
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                    {data.profile.role}
                  </p>
                </div>

                {/* Social Buttons */}
                <div className="flex items-center justify-center gap-3 mt-4 w-full">
                  <a
                    href={`mailto:${data.profile.email}`}
                    className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm border border-slate-200 dark:border-slate-700 group/icon"
                    title="Email"
                  >
                    <Mail size={18} className="group-hover/icon:scale-110 transition-transform" />
                  </a>
                  <a
                    href={`tel:${data.profile.phone}`}
                    className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-sm border border-slate-200 dark:border-slate-700 group/icon"
                    title="Phone"
                  >
                    <Phone size={18} className="group-hover/icon:scale-110 transition-transform" />
                  </a>
                  {data.profile.linkedin && (
                    <a
                      href={data.profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-sm border border-slate-200 dark:border-slate-700 group/icon"
                      title="LinkedIn"
                    >
                      <Linkedin size={18} className="group-hover/icon:scale-110 transition-transform" />
                    </a>
                  )}
                  {data.profile.github && (
                    <a
                      href={data.profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#333] hover:text-white transition-all duration-300 shadow-sm border border-slate-200 dark:border-slate-700 group/icon"
                      title="GitHub"
                    >
                      <Github size={18} className="group-hover/icon:scale-110 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Mantra (Moved Here) */}
            <div className="bg-gradient-to-br from-primary to-[#8c4018] rounded-2xl p-6 shadow-sm flex flex-col justify-center relative overflow-hidden group min-h-[160px]">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-8xl text-white">format_quote</span>
              </div>
              <h3 className="text-white/80 font-bold uppercase tracking-wider text-xs mb-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">lightbulb</span> My Mantra
              </h3>
              <p className="text-white text-lg font-bold leading-snug relative z-10">{data.mantra}</p>
            </div>


            {/* Key Skills */}
            <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">psychology</span>
                Key Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Stack (Moved to Left) */}
            <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400">handyman</span>
                Tools Stack
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {data.tools.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
                    <span className={`material-symbols-outlined text-sm ${tool.color}`}>{tool.icon}</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300 font-medium truncate" title={tool.name}>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education (Moved Higher) */}
            <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800" id="education">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400">school</span>
                Education
              </h3>
              <div className="space-y-4">
                {data.education.map((edu, idx) => (
                  <div key={idx}>
                    <div className="flex flex-col items-start gap-1 group">
                      <div className="flex justify-between w-full items-start">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-lg">{edu.icon}</span>
                          {edu.degree}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 pl-7">{edu.school}</p>
                    </div>
                    {idx !== data.education.length - 1 && <hr className="border-slate-100 dark:border-slate-800 my-2" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications (Moved Lower) */}
            <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow-500">workspace_premium</span>
                Certifications
              </h3>
              <ul className="space-y-3">
                {data.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <div className="size-8 rounded bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-green-500 text-sm">verified</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-snug">{cert.name}</span>
                      <span className="text-xs text-slate-500 leading-snug">{cert.issuer}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>




          </div>

          {/* --- RIGHT COLUMN (Main Content) --- */}
          <div className="col-span-1 md:col-span-4 lg:col-span-8 flex flex-col gap-6">

            {/* Professional Summary */}
            <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">summarize</span>
                  Professional Summary
                </h2>
              </div>
              <ul className="space-y-3">
                {data.summary.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">check_circle</span>
                    <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {point.split('**').map((part, i) =>
                        i % 2 === 1 ? <strong key={i} className="font-bold text-slate-900 dark:text-white">{part}</strong> : part
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Experience */}
            <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden" id="experience">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">work_history</span>
                  Professional Experience
                </h2>
              </div>

              <div className="flex flex-col gap-10 relative">
                {/* Timeline Line (Background) */}
                <div className="absolute left-[19px] md:left-[23px] top-6 bottom-6 w-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>

                {/* Group consecutive experiences by company */}
                {(() => {
                  interface Group {
                    company: string;
                    logo?: string;
                    roles: typeof data.experience;
                  }
                  const groups: Group[] = [];
                  let currentGroup: Group | null = null;

                  data.experience.forEach((exp) => {
                    if (!currentGroup || currentGroup.company !== exp.company) {
                      currentGroup = {
                        company: exp.company,
                        logo: exp.logo,
                        roles: [exp]
                      };
                      groups.push(currentGroup);
                    } else {
                      currentGroup.roles.push(exp);
                    }
                  });

                  return groups.map((group, groupIndex) => (
                    <div key={groupIndex} className="relative md:pl-0">
                      {/* Company Header */}
                      <div className="flex items-center gap-4 mb-6 relative z-10">
                        <div className="size-10 md:size-12 rounded-xl bg-white p-1 border border-slate-100 shadow-sm shrink-0 flex items-center justify-center overflow-hidden">
                          {group.logo ? (
                            <img src={group.logo} alt={group.company} className="w-full h-full object-contain" />
                          ) : (
                            <span className="material-symbols-outlined text-slate-400">business</span>
                          )}
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">{group.company}</h3>
                      </div>

                      {/* Roles */}
                      <div className="flex flex-col gap-8 md:ml-[23px] md:pl-10 border-l-2 border-slate-200 dark:border-slate-800 md:border-none">
                        {group.roles.map((role) => (
                          <div key={role.id} className="relative pl-6 md:pl-0">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] md:-left-[6px] top-2 size-3 rounded-full bg-white border-2 border-slate-300 dark:border-slate-600 dark:bg-slate-900 z-10"></div>

                            <div className="md:pl-4">
                              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <h4 className="font-bold text-base text-slate-800 dark:text-slate-200">{role.role}</h4>
                                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded self-start md:self-auto">
                                  {role.period}
                                </span>
                              </div>
                              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                {role.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>

            {/* AI Projects */}
            <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800" id="ai-projects">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-purple-600">smart_toy</span>
                  AI Projects
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Justdial Column */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2 mb-2">
                    <span className="material-symbols-outlined text-base">business_center</span> WORK / JUSTDIAL
                  </h3>
                  {data.aiProjects && data.aiProjects.filter(p => p.type === 'Justdial').map((proj) => (
                    <div key={proj.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-purple-500/30 transition-colors h-full">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className={`size-8 rounded-lg flex items-center justify-center font-bold text-xs ${proj.badge}`}>
                            {proj.code}
                          </span>
                          <h3 className="font-bold text-slate-900 dark:text-white">{proj.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        {proj.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Personal Column */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2 mb-2">
                    <span className="material-symbols-outlined text-base">person</span> Personal / GitHub
                  </h3>
                  {data.aiProjects && data.aiProjects.filter(p => p.type !== 'Justdial').map((proj) => (
                    <div key={proj.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-purple-500/30 transition-colors h-full">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className={`size-8 rounded-lg flex items-center justify-center font-bold text-xs ${proj.badge}`}>
                            {proj.code}
                          </span>
                          <h3 className="font-bold text-slate-900 dark:text-white">{proj.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        {proj.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>






          </div>

          {/* --- Bottom Full Width Items --- */}
          <div className="col-span-1 md:col-span-4 lg:col-span-12 flex flex-col gap-6">

            {/* Onsite Projects (Full Width) */}
            <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800" id="onsite-projects">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">store</span>
                  Noteworthy Client On-site Projects
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">Vinculum</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.onsiteProjects && data.onsiteProjects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-primary/30 transition-colors h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`size-8 rounded-lg flex items-center justify-center font-bold text-xs ${proj.badge} shrink-0`}>
                        {proj.code}
                      </span>
                      <h3 className="font-bold text-slate-900 dark:text-white leading-tight">{proj.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Role & Responsibilities (Expanded Full Width) */}
            <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col" id="roles">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">description</span>
                  Role &amp; Responsibilities
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">A detailed breakdown of key contributions and achievements across previous roles.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {data.rolesDetails.slice(0, -1).map((role, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700/50">
                    <div className="mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg leading-tight mb-1">{role.role}</h4>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-primary font-bold">{role.company}</p>
                        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 bg-white dark:bg-slate-700 px-2 py-1 rounded shadow-sm">
                          {role.period}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {role.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                          <span className="material-symbols-outlined text-primary text-[16px] leading-none mt-1 shrink-0">check_circle</span>
                          <span>
                            {pt.split('**').map((part, k) =>
                              k % 2 === 1 ? <strong key={k} className="font-bold text-slate-900 dark:text-white">{part}</strong> : part
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {role.images && (
                      <div className="mt-6 flex gap-4 overflow-x-auto pb-4 pt-2 px-1 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
                        {role.images.map((img, i) => (
                          <a
                            key={i}
                            href={img}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-48 w-auto shrink-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:z-10 cursor-zoom-in block"
                          >
                            <img src={img} alt={`${role.role} highlight ${i + 1}`} className="h-full w-auto object-contain bg-white dark:bg-slate-900" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Last Role (BA) - Full Width with 2-Column Points */}
              {data.rolesDetails.length > 0 && (() => {
                const lastRole = data.rolesDetails[data.rolesDetails.length - 1];
                const midpoint = Math.ceil(lastRole.points.length / 2);
                return (
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700/50 mt-8">
                    <div className="mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg leading-tight mb-1">{lastRole.role}</h4>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-primary font-bold">{lastRole.company}</p>
                        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 bg-white dark:bg-slate-700 px-2 py-1 rounded shadow-sm">
                          {lastRole.period}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      <ul className="space-y-3">
                        {lastRole.points.slice(0, midpoint).map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                            <span className="material-symbols-outlined text-primary text-[16px] leading-none mt-1 shrink-0">check_circle</span>
                            <span>
                              {pt.split('**').map((part, k) =>
                                k % 2 === 1 ? <strong key={k} className="font-bold text-slate-900 dark:text-white">{part}</strong> : part
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-3">
                        {lastRole.points.slice(midpoint).map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                            <span className="material-symbols-outlined text-primary text-[16px] leading-none mt-1 shrink-0">check_circle</span>
                            <span>
                              {pt.split('**').map((part, k) =>
                                k % 2 === 1 ? <strong key={k} className="font-bold text-slate-900 dark:text-white">{part}</strong> : part
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Project Showcase */}
            <div className="space-y-8" id="showcase">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">rocket_launch</span>
                  Project Showcase
                </h3>
              </div>

              {data.projectShowcase && data.projectShowcase.map((project, index) => (
                <div key={index} className="bg-card-light dark:bg-card-dark rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        Featured Project
                      </div>
                      {project.tags && project.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech && project.tech.map((tech, idx) => (
                        <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.impact && (
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-base">trending_up</span>
                          Business Impact
                        </h4>
                        <ul className="space-y-2">
                          {project.impact.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <span className="text-[16px] leading-none mt-0.5">{point.split(' ')[0]}</span>
                              <span>{point.substring(point.indexOf(' ') + 1)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.highlights && (
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-base">favorite</span>
                          What I’m Proud Of
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <span className="material-symbols-outlined text-primary text-[18px] leading-none mt-0.5">check_circle</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4 mb-6">
                      {project.stats.map((stat, idx) => (
                        <div key={idx} className="flex">
                          <div className="flex flex-col">
                            <span className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</span>
                            <span className="text-xs text-slate-500 uppercase tracking-wide">{stat.label}</span>
                          </div>
                          {idx !== project.stats.length - 1 && <div className="w-px bg-slate-200 dark:bg-slate-700 h-10 ml-4 mr-4 hidden md:block"></div>}
                        </div>
                      ))}
                    </div>

                    {project.quote && (
                      <div className="mb-8 bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl border border-slate-100 dark:border-slate-700 relative">
                        <span className="absolute top-4 left-4 material-symbols-outlined text-4xl text-slate-200 dark:text-slate-600 -z-10">format_quote</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300 italic mb-3 relative z-10 leading-relaxed">
                          "{project.quote.text}"
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center overflow-hidden">
                            <span className="material-symbols-outlined text-slate-400 text-sm">person</span>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">{project.quote.author}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{project.quote.role}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.link && project.link !== '#' && (
                      <a className="inline-flex items-center font-semibold text-primary hover:text-[#a94a1d] transition-colors" href={project.link} target="_blank">
                        View Project <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                      </a>
                    )}
                  </div>
                  {project.images && project.images.length > 0 ? (
                    <div className="w-full md:w-1/3 flex flex-col gap-3 md:mt-16">
                      {project.images.map((img, idx) => (
                        <a
                          key={idx}
                          href={img}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full aspect-video md:aspect-auto h-48 md:flex-1 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 overflow-hidden relative transition-all duration-300 hover:scale-110 hover:shadow-lg hover:z-10 cursor-zoom-in block"
                        >
                          <img src={img} alt={`${project.title} - ${idx + 1}`} className="w-full h-full object-cover" />
                        </a>
                      ))}
                    </div>
                  ) : project.image ? (
                    <a
                      href={project.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-1/3 aspect-video md:aspect-auto h-48 md:h-full bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 overflow-hidden relative transition-all duration-300 hover:scale-110 hover:shadow-lg hover:z-10 cursor-zoom-in block md:mt-16"
                    >
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </a>
                  ) : (
                    <div className="w-full md:w-1/3 aspect-video md:aspect-auto h-48 md:h-full bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 overflow-hidden relative">
                      <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600">code</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-white dark:bg-[#101922] border-t border-slate-200 dark:border-slate-800 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">© 2024 {data.profile.name}. Built with Tailwind CSS.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a className="text-slate-400 hover:text-primary transition-colors" href="#">LinkedIn</a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#">GitHub</a>
            <a className="text-slate-400 hover:text-primary transition-colors" href={`mailto:${data.profile.email}`}>Email</a>
          </div>
        </div>
      </footer>

      {/* Sticky Case Study Button */}
      {/* Sticky Case Study Button - Updated at 2026-01-14 T03:07 */}
      <StickyCaseStudyButton />
    </>
  );
}
