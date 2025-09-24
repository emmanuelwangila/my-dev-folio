import { 
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillGithub, 
  AiFillHeart 
} from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FaCode, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = ({ darkMode = true }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: AiFillTwitterCircle,
      href: "https://twitter.com/manuelwangila",
      label: "Twitter",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-400/10"
    },
    {
      icon: AiFillLinkedin,
      href: "https://linkedin.com/in/emmanuel-wangila",
      label: "LinkedIn",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-600/10"
    },
    {
      icon: AiFillGithub,
      href: "https://github.com/emmanuelwangila",
      label: "GitHub",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-300/10"
    },
    {
      icon: BiLogoGmail,
      href: "mailto:emmanuelwangila1@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-400/10"
    }
  ];

  const contactInfo = [
    {
      icon: FaPhone,
      label: "Phone",
      value: "+254 798 719 417",
      href: "tel:+254798719417"
    },
    {
      icon: BiLogoGmail,
      label: "Email",
      value: "emmanuelwangila1@gmail.com",
      href: "mailto:emmanuelwangila1@gmail.com"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#"
    }
  ];

  return (
    <footer className={`relative overflow-hidden transition-colors duration-300 ${
      darkMode 
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900" 
        : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, ${darkMode ? '#ffffff' : '#000000'} 2%, transparent 0%)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
              <h3 className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
                Emmanuel Wangila
              </h3>
            </div>
            <p className={`text-lg leading-relaxed mb-6 max-w-md ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Full-Stack Developer passionate about creating innovative digital solutions. 
              Let's build something amazing together!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 rounded-2xl transition-all duration-300 transform hover:scale-110 ${
                    darkMode 
                      ? "bg-gray-800/50 border border-gray-700/50" 
                      : "bg-white/80 border border-white/50 shadow-lg"
                  } ${social.bgColor}`}
                  aria-label={social.label}
                >
                  <social.icon className={`text-2xl ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  } ${social.color} transition-colors`} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              Get In Touch
            </h4>
            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className={`flex items-center gap-3 group transition-all duration-300 ${
                    contact.href !== "#" ? "cursor-pointer hover:translate-x-2" : "cursor-default"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    darkMode 
                      ? "bg-blue-600/20 text-blue-400" 
                      : "bg-blue-500/20 text-blue-600"
                  }`}>
                    <contact.icon className="text-lg" />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}>
                      {contact.label}
                    </p>
                    <p className={`font-medium ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}>
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              Quick Links
            </h4>
            <div className="space-y-3">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`block transition-all duration-300 hover:translate-x-2 ${
                    darkMode 
                      ? "text-gray-400 hover:text-white" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t ${
          darkMode ? "border-gray-700" : "border-gray-200"
        } mb-8`}></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className={`text-sm ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}>
            <p>© {currentYear} Emmanuel Wangila. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-2">
            <span className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}>
              Made with
            </span>
            <AiFillHeart className="text-red-500 animate-pulse" />
            <span className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}>
              and lots of
            </span>
            <FaCode className={`${darkMode ? "text-blue-400" : "text-blue-600"}`} />
          </div>

          <div className={`text-sm ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}>
            <p>Built with Next.js & Tailwind CSS</p>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-8 right-8 p-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
            darkMode
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-blue-500/25"
              : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-blue-400/25"
          }`}
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;