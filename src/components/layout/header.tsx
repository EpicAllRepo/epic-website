"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Code2,
  ShieldCheck,
  TrendingUp,
  Brain,
  Headphones,
  Smartphone,
  Users,
  Phone,
  Bot,
  Star,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export default function HeaderNavigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productsItems = [
    {
      icon: Users,
      title: "HRMS 360",
      description: "Complete HR management and payroll system",
      href: "#services",
      image:
        "https://images.unsplash.com/photo-1668511237388-404cc7e56e9d?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    },
    {
      icon: Phone,
      title: "CABX",
      description: "Cloud-based telephony and call center solution",
      href: "#services",
      image:
        "https://images.unsplash.com/photo-1616711248662-666c8aa10308?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    },
    {
      icon: Bot,
      title: "Troxi AI",
      description: "AI-powered automation and intelligent assistant",
      href: "#services",
      image:
        "https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    },
    {
      icon: Star,
      title: "Astrojyotish",
      description: "Vedic astrology and horoscope platform",
      href: "#services",
      image:
        "https://images.unsplash.com/photo-1614089254151-676cc373b01e?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    },
    {
      icon: GraduationCap,
      title: "Coach Axis",
      description: "Professional coaching and training platform",
      href: "#services",
      image:
        "https://images.unsplash.com/photo-1554686177-87b3c0e1a575?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    },
  ];

  const servicesItems = [
    {
      icon: Code2,
      title: "Custom Web Development",
      description:
        "Scalable web applications, e-commerce platforms, and custom software solutions",
      href: "/web-development",
      image:
        "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices",
      href: "/mobile-app-development",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description:
        "Cloud infrastructure, automation, CI/CD pipelines, and containerization",
      href: "/cloud-devops",
      image:
        "https://images.unsplash.com/photo-1668854096784-3ce7679fa841?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity Services",
      description:
        "Security audits, threat detection, penetration testing, and compliance solutions",
      href: "/cybersecurity",
      image:
        "https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    },
    {
      icon: Brain,
      title: "AI & Data Analytics",
      description:
        "Machine learning, predictive analytics, business intelligence, and AI integration",
      href: "/ai-data-analytics",
      image:
        "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    },
    {
      icon: Headphones,
      title: "IT Consulting & Support",
      description:
        "Technical consulting, infrastructure planning, and 24/7 IT support services",
      href: "/it-consulting",
      image:
        "https://images.unsplash.com/photo-1758273240360-76b908e7582a?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & SEO",
      description:
        "SEO optimization, content strategy, social media marketing, and PPC campaigns",
      href: "/digital-marketing",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    },
    
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setActiveMegaMenu(null);
    }
  };

  const MegaMenuContent = ({
    items,
  }: {
    items: typeof productsItems;
  }) => {
    const FeaturedIcon = items[0].icon;

    return (
      <div className="p-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-4 relative min-h-[300px] group">
            <Image
              src={items[0].image}
              alt={items[0].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <div className="w-12 h-12 bg-[#E53935] flex items-center justify-center mb-3">
                <FeaturedIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2 text-left">{items[0].title}</h4>
              <p className="text-sm text-white/80 text-left">{items[0].description}</p>
            </div>
          </div>

          <div className="col-span-8 grid grid-cols-2 gap-3">
            {items.map((item) => {
              const ItemIcon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                //   onClick={() => scrollToSection(item.href)}
                  className="group flex items-start gap-4 p-4 hover:bg-black/[0.02] transition-all border border-transparent hover:border-[#E53935]/20"
                >
                  <div className="w-10 h-10 bg-[#E53935] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ItemIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-black mb-1 group-hover:text-[#E53935] text-left">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-600 text-left">{item.description}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg border-b border-black/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Image
                src="/logo.png"
                alt="Epic Global"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Products */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("products")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="px-4 py-2 text-sm text-gray-600 hover:text-black flex items-center gap-1 group">
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeMegaMenu === "products" ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E53935] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>

              <AnimatePresence>
                {activeMegaMenu === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-white border border-black/10 shadow-xl"
                  >
                    <MegaMenuContent items={productsItems} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("services")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="px-4 py-2 text-sm text-gray-600 hover:text-black flex items-center gap-1 group">
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeMegaMenu === "services" ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E53935] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>

              <AnimatePresence>
                {activeMegaMenu === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1100px] bg-white border border-black/10 shadow-xl"
                  >
                    <MegaMenuContent items={servicesItems} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Links */}
            <Link
              href="/industries"
              className={`px-4 py-2 text-sm font-medium relative group ${
                pathname === "/about" ? "text-[#E53935]" : "text-gray-600"
              }`}
            >
              Industries
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#E53935] ${
                  pathname === "/industries"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform origin-left`}
              />
            </Link>

            <Link
              href="/about-us"
              className={`px-4 py-2 text-sm font-medium relative group ${
                pathname === "/about" ? "text-[#E53935]" : "text-gray-600"
              }`}
            >
              About
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#E53935] ${
                  pathname === "/about-us"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform origin-left`}
              />
            </Link>

            <Link
              href="/contact-us"
              className={`px-4 py-2 text-sm font-medium relative group ${
                pathname === "/contact" ? "text-[#E53935]" : "text-gray-600"
              }`}
            >
              Contact Us
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#E53935] ${
                  pathname === "/contact-us"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform origin-left`}
              />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-black hover:text-[#E53935]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
 </div>
            <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-black/10 bg-white"
            >
              <nav className="py-6 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
                {/* Products */}
                <div className="px-4 py-2">
                  <div className="text-xs text-[#E53935] uppercase tracking-widest font-semibold mb-2">Products</div>
                  {productsItems.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <button
                        key={item.title}
                        onClick={() => scrollToSection(item.href)}
                        className="w-full flex items-center gap-3 py-2 text-left text-gray-600 hover:text-black transition-colors"
                      >
                        <ItemIcon className="w-4 h-4 text-[#E53935]" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Services */}
                <div className="px-4 py-2 border-t border-black/5">
                  <div className="text-xs text-[#E53935] uppercase tracking-widest font-semibold mb-2">Services</div>
                  {servicesItems.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <Link
                      href={item.href}
                        key={item.title}
                        onClick={() => scrollToSection(item.href)}
                        className="w-full flex items-center gap-3 py-2 text-left text-gray-600 hover:text-black transition-colors"
                      >
                        <ItemIcon className="w-4 h-4 text-[#E53935]" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Regular Links */}
                <div className="border-t border-black/5">
                  <button
                    onClick={() => scrollToSection('/industries')}
                    className="w-full px-4 py-3 text-left hover:text-black hover:bg-black/5 transition-all font-medium block text-gray-600"
                  >
                    Industries
                  </button>
                  <Link
                    href="/about-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`w-full px-4 py-3 text-left hover:text-black hover:bg-black/5 transition-all font-medium block ${
                      location.pathname === '/about-us' ? 'text-[#E53935] bg-black/5' : 'text-gray-600'
                    }`}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`w-full px-4 py-3 text-left hover:text-black hover:bg-black/5 transition-all font-medium block ${
                      location.pathname === '/contact-us' ? 'text-[#E53935] bg-black/5' : 'text-gray-600'
                    }`}
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
       
      </div>
    </motion.header>
  );
}
