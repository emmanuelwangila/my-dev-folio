import developer from "../public/Developer.png";
import Image from "next/image";
import {
  SiReact,
  SiBootstrap,
  SiDjango,
  SiNetlify,
  SiVuedotjs,
  SiJavascript,
  SiPhp,
  SiPython,
  SiNextdotjs,
  SiNuxtdotjs,
  SiTailwindcss,
  SiSpring,
  SiAngular,
  SiOracle,
  SiPostgresql,
  SiDocker,
  SiJenkins,
  SiGithubactions,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const About = ({ darkMode = true }) => {
  const technologies = [
    {
      category: "Frontend",
      icon: FaCode,
      color: "from-blue-500 to-cyan-500",
      items: [
        { icon: SiReact, name: "React", level: 90 },
        { icon: SiNextdotjs, name: "Next.js", level: 85 },
        { icon: SiVuedotjs, name: "Vue.js", level: 80 },
        { icon: SiNuxtdotjs, name: "Nuxt.js", level: 75 },
        { icon: SiAngular, name: "Angular", level: 70 },
        { icon: SiTailwindcss, name: "Tailwind CSS", level: 95 },
        { icon: SiBootstrap, name: "Bootstrap", level: 85 },
      ]
    },
    {
      category: "Backend",
      icon: FaServer,
      color: "from-purple-500 to-pink-500",
      items: [
        { icon: SiDjango, name: "Django", level: 88 },
        { icon: SiNodedotjs, name: "Node.js", level: 82 },
        { icon: SiExpress, name: "Express.js", level: 80 },
        { icon: SiSpring, name: "Spring Boot", level: 75 },
        { icon: SiPhp, name: "PHP", level: 70 },
        { icon: SiPython, name: "Python", level: 90 },
      ]
    },
    {
      category: "Database",
      icon: FaDatabase,
      color: "from-green-500 to-emerald-500",
      items: [
        { icon: SiOracle, name: "Oracle", level: 80 },
        { icon: SiPostgresql, name: "PostgreSQL", level: 85 },
        { icon: SiJavascript, name: "MongoDB", level: 75 },
      ]
    },
    {
      category: "DevOps & Tools",
      icon: FaTools,
      color: "from-orange-500 to-red-500",
      items: [
        { icon: SiDocker, name: "Docker", level: 78 },
        { icon: SiJenkins, name: "Jenkins", level: 72 },
        { icon: SiGithubactions, name: "GitHub Actions", level: 80 },
        { icon: SiNetlify, name: "Netlify", level: 85 },
        { icon: SiJavascript, name: "JavaScript", level: 90 },
      ]
    }
  ];

  const SkillBar = ({ level, color }) => (
    <div className={`w-full h-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"} overflow-hidden`}>
      <div 
        className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
        style={{ width: `${level}%` }}
      />
    </div>
  );

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            {/* <div className={`w-3 h-3 rounded-full ${
              darkMode ? "bg-blue-500" : "bg-blue-600"
            }`}></div> */}
            <span className={`text-sm font-semibold uppercase tracking-wider {
              darkMode ? "text-blue-400" : "text-blue-600"
            `}>
              About Me
            </span>
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
            darkMode 
              ? "from-blue-400 to-purple-400" 
              : "from-blue-600 to-purple-600"
          } bg-clip-text text-transparent`}>
            Technologies & Skills
          </h1>
          
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            I specialize in creating robust, scalable applications using modern technologies. 
            From immersive frontend experiences to powerful backend systems, I bring ideas to life 
            with clean code and best practices.
          </p>
        </div>

        {/* Profile Section */}
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-12 mb-20 p-8 rounded-3xl ${
          darkMode ? "bg-gray-800/50" : "bg-white/50"
        } backdrop-blur-sm border ${
          darkMode ? "border-gray-700/50" : "border-white/50"
        }`}>
          <div className="flex-1 text-center lg:text-left">
            <h2 className={`text-3xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              Emmanuel Wangila
            </h2>
            <p className={`text-lg mb-6 leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Full-Stack Developer with expertise in modern web technologies. Passionate about 
              building seamless user experiences and scalable solutions that make a difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className={`px-4 py-2 rounded-full ${
                darkMode ? "bg-blue-600/20 text-blue-400" : "bg-blue-500/20 text-blue-600"
              }`}>
                🚀 3+ Years Experience
              </div>
              <div className={`px-4 py-2 rounded-full ${
                darkMode ? "bg-green-600/20 text-green-400" : "bg-green-500/20 text-green-600"
              }`}>
                💼 20+ Projects Completed
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className={`w-64 h-64 rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-x`}>
              <div className={`w-full h-full rounded-full ${
                darkMode ? "bg-gray-900" : "bg-white"
              } p-2`}>
                <Image
                  src={developer}
                  alt="Emmanuel Wangila"
                  className="w-full h-full rounded-full object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center animate-bounce">
              <FaCode className="text-white text-2xl" />
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technologies.map((category, index) => (
            <div
              key={category.category}
              className={`group rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 ${
                darkMode 
                  ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50" 
                  : "bg-white/80 backdrop-blur-sm border border-white/50 shadow-2xl"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color}`}>
                  <category.icon className="text-white text-2xl" />
                </div>
                <h3 className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}>
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.items.map((tech, techIndex) => (
                  <div key={tech.name} className="group/item">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <tech.icon className={`text-2xl ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        } group-hover/item:scale-110 transition-transform`} />
                        <span className={`font-medium ${
                          darkMode ? "text-gray-200" : "text-gray-700"
                        }`}>
                          {tech.name}
                        </span>
                      </div>
                      <span className={`text-sm font-semibold ${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      }`}>
                        {tech.level}%
                      </span>
                    </div>
                    <SkillBar level={tech.level} color={category.color} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-12 p-8 rounded-3xl text-center ${
          darkMode ? "bg-gray-800/50" : "bg-white/50"
        } backdrop-blur-sm border ${
          darkMode ? "border-gray-700/50" : "border-white/50"
        }`}>
          <h3 className={`text-2xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            Continuous Learning & Growth
          </h3>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            I believe in staying updated with the latest technologies and best practices. 
            Currently exploring AI/ML integration, advanced cloud architectures, and 
            performance optimization techniques to deliver even better solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { label: "Responsive Design", emoji: "📱" },
              { label: "Performance", emoji: "⚡" },
              { label: "Clean Code", emoji: "✨" },
              { label: "User Experience", emoji: "🎨" },
            ].map((item, index) => (
              <div key={index} className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                darkMode ? "bg-gray-700/50" : "bg-white/50"
              }`}>
                <span className="text-xl">{item.emoji}</span>
                <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-6 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Ready to bring your next project to life?
          </p>
          <a
            href="#contact"
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
              darkMode
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-500/25"
                : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-2xl hover:shadow-blue-400/25"
            }`}
          >
            Let's Build Something Amazing
            <FaCode className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;