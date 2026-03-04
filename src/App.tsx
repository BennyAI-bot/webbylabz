import { motion, AnimatePresence } from "motion/react";
import { 
  Globe, 
  Code, 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  Github, 
  Instagram, 
  Linkedin,
  Menu,
  X,
  MapPin,
  Phone,
  User
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/244937538903";

  return (
    <div className="min-h-screen selection:bg-webblabz-green selection:text-webblabz-dark">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-webblabz-dark/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-webblabz-green to-webblabz-cyan rounded-lg flex items-center justify-center font-bold text-webblabz-dark text-xl">
              W
            </div>
            <span className="text-2xl font-bold tracking-tighter">Webblab<span className="text-webblabz-green">Z</span></span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Início", "Serviços", "Sobre", "Contacto"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium hover:text-webblabz-green transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="bg-webblabz-green text-webblabz-dark px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
            >
              Orçamento Grátis
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-webblabz-dark pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {["Início", "Serviços", "Sobre", "Contacto"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold"
                >
                  {item}
                </a>
              ))}
              <a 
                href={whatsappLink}
                className="bg-webblabz-green text-webblabz-dark py-4 rounded-xl font-bold text-lg"
              >
                WhatsApp: 937 538 903
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="início" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-webblabz-green/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-webblabz-cyan/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-webblabz-green text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={14} /> Especialistas em Desenvolvimento Web
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Transformamos Ideias em <span className="gradient-text">Experiências Digitais</span> de Impacto.
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg text-white/60 mb-8 max-w-lg">
              A WebblabZ cria sites profissionais, velozes e optimizados para converter visitantes em clientes. Sediada em Luanda, Angola.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <a 
                href={whatsappLink}
                className="bg-webblabz-green text-webblabz-dark px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:gap-4 transition-all"
              >
                Começar Projecto <ArrowRight size={20} />
              </a>
              <a 
                href="#serviços"
                className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
              >
                Ver Serviços
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 glass-card p-4 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/webdev/800/600" 
                alt="Web Development" 
                className="rounded-xl w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-webblabz-yellow rounded-full -z-10 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-webblabz-cyan rounded-full -z-10 opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossos <span className="text-webblabz-green">Serviços</span></h2>
            <p className="text-white/60 max-w-2xl mx-auto">Soluções completas para a sua presença online, desde o design até a manutenção.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="text-webblabz-green" />,
                title: "Sites Institucionais",
                desc: "Sites elegantes e profissionais para empresas que buscam autoridade no mercado angolano."
              },
              {
                icon: <Smartphone className="text-webblabz-cyan" />,
                title: "Lojas Online",
                desc: "E-commerce robusto e seguro para vender seus produtos em Luanda e em todo o mundo."
              },
              {
                icon: <Code className="text-webblabz-yellow" />,
                title: "Sistemas Web",
                desc: "Desenvolvimento de aplicações personalizadas para gerir o seu negócio com eficiência."
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-8 hover:border-webblabz-green/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">A Mente por Trás da <span className="text-webblabz-green">WebblabZ</span></h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-webblabz-green/20 flex items-center justify-center">
                <User className="text-webblabz-green" size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold">Nsunda Afonso Panda Miguel</h4>
                <p className="text-webblabz-green font-medium">Fundador & CEO</p>
              </div>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Com uma visão focada na inovação tecnológica em Angola, Nsunda Miguel fundou a WebblabZ para elevar o padrão do desenvolvimento web em Luanda.
            </p>
            <p className="text-white/60 mb-8 leading-relaxed">
              Nossa missão é fornecer ferramentas digitais que permitam às empresas locais competir em pé de igualdade no mercado global, utilizando as tecnologias mais modernas do sector.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-webblabz-green" size={18} />
                <span className="text-sm font-medium">Foco em Performance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-webblabz-green" size={18} />
                <span className="text-sm font-medium">Design Exclusivo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-webblabz-green" size={18} />
                <span className="text-sm font-medium">Suporte em Luanda</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-webblabz-green" size={18} />
                <span className="text-sm font-medium">SEO Optimizado</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
              <img 
                src="https://picsum.photos/seed/founder/600/600" 
                alt="Nsunda Afonso Panda Miguel" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 flex flex-col items-center">
              <span className="text-4xl font-bold text-webblabz-green">100%</span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/40">Foco em Angola</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-webblabz-green/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-webblabz-green/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Vamos Criar Algo <span className="text-webblabz-green">Incrível?</span></h2>
                <p className="text-white/60 mb-8">Estamos prontos para tirar o seu projecto do papel. Entre em contacto directo com a nossa equipa em Luanda.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-webblabz-green/10 flex items-center justify-center">
                      <Phone className="text-webblabz-green" />
                    </div>
                    <div>
                      <p className="text-sm text-white/40">Telefone / WhatsApp</p>
                      <p className="text-xl font-bold">937 538 903</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-webblabz-cyan/10 flex items-center justify-center">
                      <MapPin className="text-webblabz-cyan" />
                    </div>
                    <div>
                      <p className="text-sm text-white/40">Localização</p>
                      <p className="text-xl font-bold">Luanda, Angola</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-webblabz-green hover:text-webblabz-dark transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-webblabz-green hover:text-webblabz-dark transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-webblabz-green hover:text-webblabz-dark transition-all">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium mb-2">Seu Nome</label>
                    <input type="text" className="w-full bg-webblabz-dark border border-white/10 rounded-xl px-4 py-3 focus:border-webblabz-green outline-none transition-all" placeholder="Ex: João Silva" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Seu E-mail</label>
                    <input type="email" className="w-full bg-webblabz-dark border border-white/10 rounded-xl px-4 py-3 focus:border-webblabz-green outline-none transition-all" placeholder="exemplo@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem</label>
                    <textarea className="w-full bg-webblabz-dark border border-white/10 rounded-xl px-4 py-3 focus:border-webblabz-green outline-none transition-all h-32" placeholder="Como podemos ajudar?"></textarea>
                  </div>
                  <button className="w-full bg-webblabz-green text-webblabz-dark py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                    Enviar Mensagem <MessageSquare size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-webblabz-green to-webblabz-cyan rounded flex items-center justify-center font-bold text-webblabz-dark text-lg">
              W
            </div>
            <span className="text-xl font-bold tracking-tighter">Webblab<span className="text-webblabz-green">Z</span></span>
          </div>
          
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} WebblabZ. Todos os direitos reservados. 
            <br className="md:hidden" /> Desenvolvido por Nsunda Afonso Panda Miguel.
          </p>

          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white"
      >
        <MessageSquare size={32} />
      </motion.a>
    </div>
  );
}
