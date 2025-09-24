import React, { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaFilter } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiVuedotjs, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

// Project images
import forlio from "../public/forlio.jpg";
import tender from "../public/tender.jpg";
import anime from "../public/anime.jpg";
import manu from "../public/manu.jpg";
import ayepo from "../public/ayepo-logo.jpg";
import kaziquest from "../public/KaziQuest.png";

const projects = [
  {
    id: 1,
    title: "3D Meta",
    image: forlio,
    link: "https://metacom.vercel.app/",
    description: "A 3D Meta Landing Page for Virtual Reality (VR) experiences with immersive design",
    technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    featured: true,
    github: "https://github.com/yourusername/metacom"
  },
  {
    id: 2,
    title: "TenderHub",
    image: tender,
    link: "https://mern-tender-system.onrender.com/",
    description: "Full-stack platform for managing and submitting tenders online with real-time updates",
    technologies: ["MERN Stack", "JWT", "Redux", "Material UI"],
    category: "fullstack",
    featured: true,
    github: "https://github.com/yourusername/tenderhub"
  },
  {
    id: 3,
    title: "AnimeStream",
    image: anime,
    link: "https://animation-clone-xi.vercel.app/",
    description: "Streaming service for watching anime series and movies with personalized recommendations",
    technologies: ["Vue.js", "Pinia", "TypeScript", "Vite"],
    category: "frontend",
    featured: false,
    github: "https://github.com/yourusername/anime-stream"
  },
  {
    id: 4,
    title: "TaskMaster Pro",
    image: manu,
    link: "https://pinia-tasks-iota.vercel.app/",
    description: "Advanced task management application with priority-based sorting and team collaboration",
    technologies: ["Vue 3", "Pinia", "Firebase", "Tailwind CSS"],
    category: "frontend",
    featured: false,
    github: "https://github.com/yourusername/taskmaster"
  },
  {
    id: 5,
    title: "KaziQuest",
    image: kaziquest,
    link: "https://kaziquest.com/",
    description: "Comprehensive job search platform connecting job seekers with employers across Africa",
    technologies: ["Nuxt.js", "Django", "PostgreSQL", "Docker"],
    category: "fullstack",
    featured: true,
    github: "https://github.com/yourusername/kaziquest"
  },
  {
    id: 6,
    title: "Ayepo Africa",
    image: ayepo,
    link: "https://ayepoafrica.org/",
    description: "Youth empowerment organization platform with program management and community features",
    technologies: ["Next.js", "Strapi", "Stripe", "Cloudinary"],
    category: "fullstack",
    featured: true,
    github: "https://github.com/yourusername/ayepo-africa"
  },
];

const technologyIcons = {
  "React": SiReact,
  "Vue.js": SiVuedotjs,
  "Vue 3": SiVuedotjs,
  "Next.js": SiNextdotjs,
  "Nuxt.js": SiVuedotjs,
  "Three.js": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "MERN Stack": SiNodedotjs,
  "Django": SiNodedotjs,
  "PostgreSQL": SiNodedotjs,
  "Firebase": SiNodedotjs,
  "TypeScript": SiReact,
  "JWT": SiNodedotjs,
  "Redux": SiReact,
  "Pinia": SiVuedotjs,
  "Material UI": SiReact,
  "Strapi": SiNextdotjs,
  "Stripe": SiNodedotjs,
  "Cloudinary": SiNextdotjs,
  "Docker": SiNodedotjs,
  "Vite": SiVuedotjs,
};

const Projects = ({ darkMode = true }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "featured", label: "Featured", count: projects.filter(p => p.featured).length },
    { id: "fullstack", label: "Full Stack", count: projects.filter(p => p.category === "fullstack").length },
    { id: "frontend", label: "Frontend", count: projects.filter(p => p.category === "frontend").length },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;
    return project.category === activeFilter;
  });

  const TechnologyIcon = ({ tech }) => {
    const IconComponent = technologyIcons[tech];
    return IconComponent ? <IconComponent className="inline mr-1" size={14} /> : null;
  };

  return (
    <div className={`min-h-screen rounded-md py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 $
      darkMode 
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900" 
        : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
    `}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className={`w-3 h-3 rounded-full ${
              darkMode ? "bg-blue-500" : "bg-blue-600"
            }`}></div>
            <span className={`text-sm font-semibold uppercase tracking-wider ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}>
              Portfolio
            </span>
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
            darkMode 
              ? "from-blue-400 to-purple-400" 
              : "from-blue-600 to-purple-600"
          } bg-clip-text text-transparent`}>
            My Projects
          </h1>
          
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Here are some of my recent works that showcase my skills in modern web development, 
            from immersive frontend experiences to robust fullstack applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 group ${
                activeFilter === filter.id
                  ? darkMode
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl shadow-blue-400/25"
                  : darkMode
                    ? "bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-500 hover:text-blue-400"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600 shadow-lg"
              }`}
            >
              <span className="flex items-center gap-2">
                {filter.label}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === filter.id
                    ? "bg-white/20"
                    : darkMode
                      ? "bg-gray-700"
                      : "bg-gray-100"
                }`}>
                  {filter.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 transform hover:scale-105 ${
                darkMode 
                  ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50" 
                  : "bg-white/80 backdrop-blur-sm border border-white/50 shadow-2xl"
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    darkMode
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900"
                      : "bg-gradient-to-r from-yellow-300 to-orange-400 text-gray-900"
                  }`}>
                    ⭐ Featured
                  </span>
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  placeholder="blur"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  darkMode 
                    ? "from-gray-900/80 via-gray-900/20 to-transparent" 
                    : "from-white/80 via-white/20 to-transparent"
                }`} />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 ${
                      darkMode ? "bg-white/20" : "bg-black/20"
                    } backdrop-blur-sm hover:scale-110`}
                  >
                    <FaExternalLinkAlt className={darkMode ? "text-white" : "text-white"} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200 ${
                      darkMode ? "bg-white/20" : "bg-black/20"
                    } backdrop-blur-sm hover:scale-110`}
                  >
                    <FaGithub className={darkMode ? "text-white" : "text-white"} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}>
                  {project.title}
                </h3>
                
                <p className={`mb-4 leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode
                          ? "bg-gray-700/50 text-gray-300 border border-gray-600/50"
                          : "bg-white/50 text-gray-700 border border-gray-200/50"
                      }`}
                    >
                      <TechnologyIcon tech={tech} />
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      darkMode
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  >
                    View Project
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  
                  <span className={`text-xs uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500/30 transition-all duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className={`text-center py-16 rounded-3xl ${
            darkMode ? "bg-gray-800/50" : "bg-white/50"
          } backdrop-blur-sm`}>
            <div className="text-6xl mb-4 opacity-50">🔍</div>
            <h3 className={`text-xl font-semibold mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              No projects found
            </h3>
            <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
              Try selecting a different filter to see more projects.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className={`text-center mt-16 p-8 rounded-3xl ${
          darkMode ? "bg-gray-800/50" : "bg-white/50"
        } backdrop-blur-sm border ${
          darkMode ? "border-gray-700/50" : "border-white/50"
        }`}>
          <h2 className={`text-2xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            Like what you see?
          </h2>
          <p className={`mb-6 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            I'm always open to discussing new opportunities and creative projects.
          </p>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              darkMode
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-500/25"
                : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-2xl hover:shadow-blue-400/25"
            }`}
          >
            Let's Work Together
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;