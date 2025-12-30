import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Menu, X, MessageCircle, Instagram, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/darwingowtham", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/darwin-gowtham-k", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/rkbro9452/", label: "Instagram" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo space - removed */}
          <div className="w-0" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary transition-all duration-300 relative group px-3 py-2 rounded-lg border-2 border-black hover:border-primary"
              >
                {t(link.key)}
              </motion.button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + 0.1 * index }}
                className={`p-2 rounded-lg border-2 transition-all duration-300 ${
                  social.label === "GitHub" ? "border-black hover:text-white hover:bg-black" :
                  social.label === "Instagram" ? "border-[#f43f5e] hover:text-white hover:bg-[#f43f5e]" : 
                  "border-primary hover:text-white hover:bg-primary"
                } text-foreground/60`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
            {/* WhatsApp Icon (desktop) - official SVG with green border box */}
            <motion.a
              href="https://wa.me/917094939211"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="p-2 rounded-lg border-2 border-[#25D366] text-foreground/60 hover:text-white hover:bg-[#25D366] transition-all duration-300"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.168.566 4.188 1.645 6.001L0 24l6.144-1.605A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.206-1.255-6.214-3.48-8.52zM12 21.5c-1.865 0-3.694-.5-5.29-1.44l-.375-.22L4 20l.161-2.354-.245-.384A9.508 9.508 0 0 1 2.5 12c0-5.247 4.253-9.5 9.5-9.5 2.537 0 4.925.99 6.716 2.79C21.01 7.075 22 9.463 22 12c0 5.247-4.253 9.5-9.5 9.5zM17.1 14.1c-.235-.118-1.39-.685-1.603-.764-.213-.08-.368-.118-.523.118-.155.235-.6.764-.737.92-.137.155-.275.177-.51.059-.235-.118-1.005-.37-1.92-1.186-.71-.631-1.19-1.41-1.327-1.645-.137-.235-.015-.362.103-.48.105-.104.235-.274.353-.411.118-.137.157-.235.235-.392.078-.157.039-.295-.02-.413-.059-.118-.523-1.26-.718-1.724-.189-.455-.382-.394-.523-.4l-.447-.008c-.155 0-.407.059-.62.295-.213.235-.81.79-.81 1.92 0 1.13.83 2.223.947 2.376.118.155 1.64 2.505 3.98 3.51 2.36 1.006 2.36.67 2.787.63.427-.039 1.39-.567 1.586-1.116.196-.548.196-1.016.137-1.116-.059-.098-.213-.157-.448-.275z" />
              </svg>
            </motion.a>
            
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="p-2 rounded-lg border-2 border-foreground/30 hover:border-foreground/60 text-foreground/60 hover:text-foreground transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            {/* Language Toggle Button */}
            <motion.button
              onClick={() => setLanguage(language === "en" ? "ta" : "en")}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="p-2 rounded-lg border-2 border-foreground/30 hover:border-foreground/60 text-foreground/60 hover:text-foreground transition-all duration-300 font-semibold"
              aria-label="Toggle language"
            >
              {language === "en" ? "TA" : "EN"}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
                >
                  {t(link.key)}
                </button>
              ))}
              <div className="flex gap-4 pt-4 border-t border-border items-center">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg border-2 transition-all duration-300 ${
                      social.label === "GitHub" ? "border-black hover:text-black hover:bg-black/10" :
                      social.label === "Instagram" ? "border-[#f43f5e] hover:text-[#f43f5e] hover:bg-[#f43f5e]/10" : 
                      "border-primary hover:text-primary hover:bg-primary/10"
                    } text-foreground/60`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
                <a
                  href="https://wa.me/917094939211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border-2 border-[#25D366] text-foreground/60 hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.168.566 4.188 1.645 6.001L0 24l6.144-1.605A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.206-1.255-6.214-3.48-8.52zM12 21.5c-1.865 0-3.694-.5-5.29-1.44l-.375-.22L4 20l.161-2.354-.245-.384A9.508 9.508 0 0 1 2.5 12c0-5.247 4.253-9.5 9.5-9.5 2.537 0 4.925.99 6.716 2.79C21.01 7.075 22 9.463 22 12c0 5.247-4.253 9.5-9.5 9.5zM17.1 14.1c-.235-.118-1.39-.685-1.603-.764-.213-.08-.368-.118-.523.118-.155.235-.6.764-.737.92-.137.155-.275.177-.51.059-.235-.118-1.005-.37-1.92-1.186-.71-.631-1.19-1.41-1.327-1.645-.137-.235-.015-.362.103-.48.105-.104.235-.274.353-.411.118-.137.157-.235.235-.392.078-.157.039-.295-.02-.413-.059-.118-.523-1.26-.718-1.724-.189-.455-.382-.394-.523-.4l-.447-.008c-.155 0-.407.059-.62.295-.213.235-.81.79-.81 1.92 0 1.13.83 2.223.947 2.376.118.155 1.64 2.505 3.98 3.51 2.36 1.006 2.36.67 2.787.63.427-.039 1.39-.567 1.586-1.116.196-.548.196-1.016.137-1.116-.059-.098-.213-.157-.448-.275z" />
                  </svg>
                </a>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg border-2 border-foreground/30 hover:border-foreground/60 text-foreground/60 hover:text-foreground transition-all duration-300"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setLanguage(language === "en" ? "ta" : "en")}
                  className="p-2 rounded-lg border-2 border-foreground/30 hover:border-foreground/60 text-foreground/60 hover:text-foreground transition-all duration-300 font-semibold"
                  aria-label="Toggle language"
                >
                  {language === "en" ? "TA" : "EN"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
