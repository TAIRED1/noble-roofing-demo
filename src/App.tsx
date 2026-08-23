import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Shield, Star, Menu, X, Headphones, AlertTriangle, Calendar } from 'lucide-react';

const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Radial gradients
      const grad1 = ctx.createRadialGradient(width * 0.2, height * 0.2, 0, width * 0.2, height * 0.2, width * 0.5);
      grad1.addColorStop(0, 'rgba(158, 27, 39, 0.15)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(width * 0.8, height * 0.8, 0, width * 0.8, height * 0.8, width * 0.5);
      grad2.addColorStop(0, 'rgba(15, 30, 60, 0.2)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(158, 27, 39, ${0.2 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[-1]" />;
};

const EmberParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="ember"
          style={{
            left: `${Math.random() * 100}%`,
            top: '100%',
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

const TopBar = () => (
  <div className="w-full bg-white/[0.02] border-b border-white/[0.05] text-[11px] text-gray-400 py-1.5 px-4 flex justify-between items-center z-50 relative">
    <div className="flex items-center gap-4">
      <span className="flex items-center gap-1.5"><Phone size={12} className="text-[#9e1b27]"/> (346) 496-4500</span>
      <span className="flex items-center gap-1.5"><Mail size={12} className="text-[#9e1b27]"/> contact@nobleroofing.co</span>
    </div>
    <div className="flex items-center gap-1.5">
      <MapPin size={12} className="text-[#9e1b27]"/> The Woodlands & Greater Houston, TX
    </div>
  </div>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 glass border-b-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center relative">
        <div className="flex items-center gap-2">
          <span className="font-bebas text-2xl tracking-widest text-white">NOBLE</span>
          <span className="font-bebas text-2xl tracking-widest text-[#9e1b27]">ROOFING</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#services" className="hover:text-[#9e1b27] transition-colors">Services</a>
          <a href="#" className="hover:text-[#9e1b27] transition-colors">Credentials</a>
          <a href="#" className="hover:text-[#9e1b27] transition-colors">Mission</a>
        </div>

        <div className="hidden md:flex items-center">
          <button className="glass border border-[#9e1b27] text-white px-5 py-2 text-sm font-semibold hover:bg-[#9e1b27]/10 transition-colors flex items-center gap-2 relative">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] radar-pulse relative z-10" />
            Dispatch Concierge
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass-strong border-b border-white/[0.05] p-4 flex flex-col gap-4"
          >
            <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
            <a href="#">Credentials</a>
            <a href="#">Mission</a>
            <button className="border border-[#9e1b27] text-white px-5 py-2 text-sm font-semibold flex items-center gap-2 w-max">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] radar-pulse relative z-10" />
              Dispatch Concierge
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 md:px-8 z-10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-strong w-max px-4 py-1.5 rounded-full flex items-center gap-3 border-[#22c55e]/30 border"
        >
          <div className="w-2 h-2 rounded-full bg-[#22c55e] radar-pulse relative" />
          <span className="text-xs font-semibold tracking-wider text-[#22c55e]">Greater Houston & The Woodlands — Commercial Dispatch Active</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-6xl md:text-8xl font-bebas leading-[0.9] tracking-tight">
            BUILT WITH PRECISION.<br />
            <span className="bg-gradient-to-r from-[#9e1b27] to-[#ff4d5e] bg-clip-text text-transparent text-glow">BACKED BY NOBLE PLANS.</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-gray-300 text-lg md:text-xl font-light leading-relaxed"
        >
          Manufacturer-certified commercial roofing systems — TPO, PVC, metal, modified bitumen, and elastomeric coatings. Direct ownership access. OSHA-compliant execution.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-4"
        >
          <button className="bg-[#9e1b27] glow-crimson text-white px-8 py-4 font-semibold hover:bg-[#b01e2c] transition-colors">
            Schedule Urgent Inspection
          </button>
          <button className="glass border border-white/20 px-8 py-4 font-semibold hover:bg-white/5 transition-colors flex items-center gap-2">
            <Phone size={18} /> Call Dispatch (346) 496-4500
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 glass-strong p-6"
        >
          {[
            { value: "30-Year", label: "Manufacturer Warranty" },
            { value: "100%", label: "On-Schedule Delivery" },
            { value: "< 60 Min", label: "Emergency Response" },
            { value: "Carlisle & GAF", label: "Certified Installer" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1 border-l border-white/10 pl-4 first:border-l-0 first:pl-0">
              <span className="font-bebas text-2xl md:text-3xl text-[#9e1b27]">{stat.value}</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState<'commercial' | 'residential'>('commercial');

  const commercialServices = [
    {
      title: "TPO & PVC Single-Ply",
      desc: "Industry-leading thermoplastic membranes for flat and low-slope commercial applications. Energy-efficient, UV-resistant, and backed by manufacturer warranties up to 30 years."
    },
    {
      title: "Architectural Standing Seam Metal",
      desc: "Premium metal roofing systems engineered for longevity. Concealed fastener panels rated for 140+ mph wind uplift with integrated snow and water management."
    },
    {
      title: "Liquid Applied Membranes",
      desc: "Seamless elastomeric and silicone coating systems. Ideal for roof restoration, extending service life by 15-20 years without full tear-off."
    }
  ];

  const residentialServices = [
    {
      title: "Composition Shingles",
      desc: "GAF HDZ and CertainTeed Landmark premium shingle systems with manufacturer-certified installation and extended warranty coverage."
    },
    {
      title: "Metal Roofing",
      desc: "Standing seam and exposed fastener metal systems for residential applications. Durable, energy-efficient, and architecturally striking."
    },
    {
      title: "Storm Damage Restoration",
      desc: "Full-service storm damage assessment, insurance claim support, and rapid restoration for hail, wind, and hurricane-impacted homes."
    }
  ];

  const currentServices = activeTab === 'commercial' ? commercialServices : residentialServices;

  return (
    <section id="services" className="py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bebas mb-12 text-center text-glow">ENGINEERED ROOFING SYSTEMS</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('commercial')}
            className={`px-6 py-3 font-semibold transition-all ${activeTab === 'commercial' ? 'bg-[#9e1b27] glow-crimson' : 'glass border border-white/10'}`}
          >
            Commercial Systems
          </button>
          <button 
            onClick={() => setActiveTab('residential')}
            className={`px-6 py-3 font-semibold transition-all ${activeTab === 'residential' ? 'bg-[#9e1b27] glow-crimson' : 'glass border border-white/10'}`}
          >
            Residential Solutions
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {currentServices.map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="glass p-8 relative group hover:glow-crimson transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#9e1b27] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bebas mb-4 tracking-wider">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => (
  <section className="py-24 px-4 md:px-8 relative z-10 bg-black/50">
    <div className="max-w-4xl mx-auto flex flex-col gap-12">
      <h2 className="text-3xl md:text-4xl font-bebas text-center">TRUSTED BY HOUSTON'S TOP PROPERTY MANAGERS</h2>
      
      <div className="glass-strong glow-crimson p-8 md:p-12 relative">
        <div className="flex gap-1 text-yellow-400 mb-6">
          {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
        </div>
        <p className="text-lg md:text-xl italic font-light text-gray-200 mb-8 leading-relaxed">
          "I've been in commercial property engineering for over 30 years. Noble Roofing handles our portfolios at Colliers with absolute professionalism — responsive, meticulous, and they understand the urgency of commercial properties. I trust them completely."
        </p>
        <div>
          <h4 className="font-bebas text-xl text-[#9e1b27]">Jaime 'Junior' Uniati Jr.</h4>
          <p className="text-sm text-gray-400">Chief Engineer / Property Manager</p>
          <p className="text-sm text-gray-500 font-semibold mt-1">Colliers International</p>
        </div>
      </div>

      <div className="glass p-6 flex items-center gap-6 border-l-4 border-[#22c55e]">
        <Shield size={32} className="text-[#22c55e] shrink-0" />
        <p className="text-sm text-gray-300 leading-relaxed">
          <strong className="text-white block mb-1">Community Impact</strong>
          Proud partner of the Mighty Oaks Foundation, supporting veteran service programs and mental health initiatives.
        </p>
      </div>
    </div>
  </section>
);

const Accreditations = () => (
  <section className="py-12 border-y border-white/5 relative z-10 glass">
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-6">
      <h2 className="text-center text-sm tracking-widest text-gray-500 uppercase font-semibold">CERTIFIED BY INDUSTRY LEADERS</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {['Carlisle SynTec', 'GAF Certified', 'CertainTeed Master', 'Sika Sarnafil', 'PAC-CLAD'].map((brand, i) => (
          <span key={i} className="font-bebas text-2xl md:text-3xl text-gray-400 opacity-60 hover:opacity-100 hover:text-[#9e1b27] hover:text-glow transition-all cursor-default">
            {brand}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="pt-24 pb-8 px-4 md:px-8 relative z-10 glass-strong">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <span className="font-bebas text-3xl tracking-widest text-white">NOBLE</span>
          <span className="font-bebas text-3xl tracking-widest text-[#9e1b27]">ROOFING</span>
        </div>
        <p className="text-sm text-gray-400 max-w-md leading-relaxed">
          Engineered commercial and residential roofing systems for Greater Houston and The Woodlands. Built with precision, backed by Noble plans.
        </p>
        <div className="flex flex-col gap-3 text-sm text-gray-300 mt-4">
          <span className="flex items-center gap-3"><Phone size={16} className="text-[#9e1b27]" /> (346) 496-4500</span>
          <span className="flex items-center gap-3"><Mail size={16} className="text-[#9e1b27]" /> contact@nobleroofing.co</span>
          <span className="flex items-center gap-3"><MapPin size={16} className="text-[#9e1b27]" /> The Woodlands, TX</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-8 md:justify-self-end">
        <div className="flex flex-col gap-4">
          <h4 className="font-bebas text-xl text-white tracking-widest">Services</h4>
          <a href="#" className="text-sm text-gray-400 hover:text-[#9e1b27] transition-colors">Commercial Roofing</a>
          <a href="#" className="text-sm text-gray-400 hover:text-[#9e1b27] transition-colors">Residential Roofing</a>
          <a href="#" className="text-sm text-gray-400 hover:text-[#9e1b27] transition-colors">Storm Restoration</a>
          <a href="#" className="text-sm text-gray-400 hover:text-[#9e1b27] transition-colors">Maintenance</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bebas text-xl text-white tracking-widest">Quick Links</h4>
          <a href="#" className="text-sm text-gray-400 hover:text-[#9e1b27] transition-colors">About Us</a>
          <a href="#" className="text-sm text-gray-400 hover:text-[#9e1b27] transition-colors">Credentials</a>
          <a href="#" className="text-sm text-gray-400 hover:text-[#9e1b27] transition-colors">Contact</a>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
      <p className="italic font-serif">"But the noble make noble plans, and by noble deeds they stand." — Isaiah 32:8</p>
      <p>&copy; {new Date().getFullYear()} Noble Roofing. All rights reserved.</p>
    </div>
  </footer>
);

const ConciergeModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#9e1b27] rounded-full glow-crimson flex items-center justify-center hover:bg-[#b01e2c] transition-colors group"
      >
        <span className="absolute inset-0 rounded-full bg-[#9e1b27] animate-ping opacity-20" />
        <Headphones size={24} className="text-white group-hover:scale-110 transition-transform" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-md glass-strong border-t md:border border-white/20 p-6 md:p-8 relative rounded-t-2xl sm:rounded-2xl shadow-2xl"
            >
              <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#22c55e] radar-pulse relative" />
                <h3 className="font-bebas text-3xl tracking-widest text-white">24/7 DISPATCH CONCIERGE</h3>
              </div>
              <p className="text-sm text-gray-400 mb-8">Route your urgent request directly to our commercial team.</p>
              
              <div className="flex flex-col gap-4">
                <button className="w-full bg-[#9e1b27] glow-crimson text-white py-4 font-semibold flex items-center justify-center gap-2 hover:bg-[#b01e2c] transition-colors">
                  <AlertTriangle size={18} /> Report Active Leak
                </button>
                <button className="w-full glass border border-white/20 text-white py-4 font-semibold flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
                  <Calendar size={18} /> Schedule Inspection
                </button>
              </div>

              <div className="mt-8 text-center border-t border-white/10 pt-6">
                <p className="text-sm text-gray-400">Or call directly:</p>
                <a href="tel:3464964500" className="text-2xl font-bebas text-[#9e1b27] text-glow mt-1 inline-block hover:scale-105 transition-transform">
                  (346) 496-4500
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-[#9e1b27] selection:text-white">
      <ParticleCanvas />
      <EmberParticles />
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <SocialProof />
      <Accreditations />
      <Footer />
      <ConciergeModal />
    </div>
  );
}
