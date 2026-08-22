import { useState, useRef, Suspense } from 'react';
import { Phone, Mail, MapPin, ChevronRight, Shield, Award, Calendar, CheckCircle2, ChevronDown, Menu, X, ArrowUpRight, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';

// --- 3D Scene Components ---
function AbstractStructure() {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <PresentationControls
      global
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 4, tension: 1500 }}
      rotation={[0, 0.3, 0]}
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}
    >
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={meshRef} scale={1.5}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial 
            color="#D92D20" 
            envMapIntensity={1} 
            clearcoat={1} 
            clearcoatRoughness={0.1} 
            metalness={0.8}
            roughness={0.2}
            distort={0.4}
            speed={2}
          />
        </mesh>
      </Float>
    </PresentationControls>
  );
}

function Scene3D() {
  return (
    <div className="absolute inset-0 z-0 h-[120%] -translate-y-[10%] opacity-80 mix-blend-screen pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#D92D20" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#4f46e5" />
        <Suspense fallback={null}>
          <AbstractStructure />
          <Environment preset="city" />
          <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={20} blur={2} far={4.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// --- UI Components ---
const TopBar = () => (
  <div className="bg-brand-navy_light text-gray-400 text-xs py-2 px-4 md:px-8 border-b border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-6 mb-2 md:mb-0">
        <a href="tel:3464964500" className="flex items-center hover:text-white transition-colors">
          <Phone size={14} className="mr-2 text-brand-accent" />
          (346) 496-4500
        </a>
        <a href="mailto:contact@nobleroofing.co" className="flex items-center hover:text-white transition-colors hidden sm:flex">
          <Mail size={14} className="mr-2 text-brand-accent" />
          contact@nobleroofing.co
        </a>
      </div>
      <div className="flex items-center">
        <MapPin size={14} className="mr-2 text-brand-accent" />
        Houston & The Woodlands, TX
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="absolute top-0 w-full z-50 pt-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-black text-white tracking-tighter">NOBLE<span className="text-brand-crimson">ROOFING</span></div>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-300">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#calculator" className="hover:text-white transition-colors">Estimator</a>
          <a href="#about" className="hover:text-white transition-colors">About Us</a>
          <a href="#calculator" className="bg-brand-crimson text-white px-6 py-2.5 rounded-full font-bold hover:bg-brand-crimson_dark transition-all shadow-[0_0_20px_rgba(217,45,32,0.4)] flex items-center">
            Instant Estimate <ArrowUpRight size={16} className="ml-1" />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-panel-dark mx-4 mt-2 rounded-2xl p-4 flex flex-col space-y-4 font-semibold text-gray-300"
        >
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#calculator" onClick={() => setIsOpen(false)}>Estimator</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#calculator" onClick={() => setIsOpen(false)} className="text-brand-crimson font-bold">Instant Estimate</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-brand-navy flex items-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-brand-crimson/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      {/* 3D Scene */}
      <Scene3D />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 w-full z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center glass-panel text-white font-bold tracking-widest text-[10px] px-4 py-2 mb-8 uppercase rounded-full border-brand-crimson/30">
            <Zap size={12} className="mr-2 text-brand-crimson animate-pulse" />
            Service with Integrity
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[1.1] mb-6 tracking-tighter">
            <span className="text-white">YOUR BUILDING.</span><br />
            <span className="text-gradient-crimson">PROTECTED.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light max-w-xl">
            Manufacturer-certified commercial roofing systems. Precision engineering meets unmatched integrity.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pointer-events-auto">
            <a href="#calculator" className="bg-brand-crimson text-white text-lg font-bold px-8 py-4 rounded-full shadow-[0_0_40px_rgba(217,45,32,0.4)] hover:shadow-[0_0_60px_rgba(217,45,32,0.6)] hover:bg-red-600 transition-all flex items-center justify-center hover:-translate-y-1">
              Request Instant Estimate <ArrowUpRight className="ml-2" size={20} />
            </a>
            <a href="tel:3464964500" className="glass-panel text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all flex items-center justify-center hover:-translate-y-1">
              <Phone className="mr-2" size={20} /> Call Dispatch
            </a>
          </div>
          
          <div className="mt-16 flex items-center space-x-8 text-sm text-gray-500 font-medium tracking-wide">
            <span className="flex items-center"><CheckCircle2 className="mr-2 text-brand-accent" size={16}/> Licensed & Insured</span>
            <span className="flex items-center"><CheckCircle2 className="mr-2 text-brand-accent" size={16}/> Veteran Supporting</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Calculator = () => {
  const [projectType, setProjectType] = useState('commercial_flat');
  const [sqft, setSqft] = useState(5000);
  const [urgency, setUrgency] = useState('inspection_only');
  const [showResult, setShowResult] = useState(false);

  const getEstimate = () => {
    let base = 0;
    if (projectType === 'commercial_flat') base = 6;
    if (projectType === 'metal') base = 12;
    if (projectType === 'coatings') base = 4;
    if (projectType === 'residential') base = 5;

    const min = base * sqft;
    const max = (base + 3) * sqft;
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  };

  return (
    <div id="calculator" className="py-32 bg-brand-navy_light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-crimson/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-20 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="inline-block text-brand-crimson font-bold tracking-widest text-sm mb-4 uppercase">AI-Powered Estimator</div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
            Numbers you can <span className="text-gradient-crimson">trust.</span> Instantly.
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
            Skip the waiting game. Use our interactive calculator to get an immediate, data-backed baseline estimate for your commercial project.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start group">
              <div className="glass-panel p-4 rounded-2xl mr-6 text-brand-accent group-hover:scale-110 transition-transform">
                <Calendar size={28} />
              </div>
              <div>
                <h4 className="font-bold text-white text-xl mb-1">1-Click Booking</h4>
                <p className="text-gray-500">Instantly route your inquiry directly to our dispatch team.</p>
              </div>
            </div>
            <div className="flex items-start group">
              <div className="glass-panel p-4 rounded-2xl mr-6 text-brand-accent group-hover:scale-110 transition-transform">
                <Shield size={28} />
              </div>
              <div>
                <h4 className="font-bold text-white text-xl mb-1">Accurate Baselines</h4>
                <p className="text-gray-500">Calculated based on real-time Houston material and labor rates.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 w-full"
        >
          <div className="glass-panel-dark rounded-3xl p-8 md:p-10 relative overflow-hidden">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-crimson/20 via-transparent to-blue-500/10 pointer-events-none" />
            
            <div className="space-y-8 relative z-10">
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">Project Type</label>
                <div className="relative">
                  <select 
                    className="w-full appearance-none bg-white/5 border border-white/10 text-white rounded-xl py-4 px-5 focus:ring-2 focus:ring-brand-crimson focus:border-transparent outline-none font-medium transition-all cursor-pointer backdrop-blur-md"
                    value={projectType}
                    onChange={(e) => {setProjectType(e.target.value); setShowResult(false);}}
                  >
                    <option value="commercial_flat" className="bg-brand-navy text-white">Commercial Flat (TPO/PVC)</option>
                    <option value="metal" className="bg-brand-navy text-white">Architectural/Structural Metal</option>
                    <option value="coatings" className="bg-brand-navy text-white">Roof Coatings / Restoration</option>
                    <option value="residential" className="bg-brand-navy text-white">Residential Replacement</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-4.5 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Estimated Square Footage</label>
                  <span className="text-brand-crimson font-bold">{sqft.toLocaleString()} sq ft</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="100000" 
                  step="1000"
                  value={sqft}
                  onChange={(e) => {setSqft(parseInt(e.target.value)); setShowResult(false);}}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-crimson"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">Timeline / Urgency</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['inspection_only', 'planning_budget', 'emergency_leak'].map((u) => (
                    <button
                      key={u}
                      onClick={() => {setUrgency(u); setShowResult(false);}}
                      className={`py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                        urgency === u 
                        ? 'bg-brand-crimson text-white shadow-[0_0_20px_rgba(217,45,32,0.3)]' 
                        : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {u === 'inspection_only' && 'Routine Insp.'}
                      {u === 'planning_budget' && 'Planning (3-6m)'}
                      {u === 'emergency_leak' && 'Active Leak'}
                    </button>
                  ))}
                </div>
              </div>

              {!showResult ? (
                <button 
                  onClick={() => setShowResult(true)}
                  className="w-full bg-white text-brand-navy font-black py-5 rounded-xl hover:bg-gray-200 transition-all text-lg flex justify-center items-center shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1"
                >
                  Generate Estimate <ArrowUpRight className="ml-2" />
                </button>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-panel bg-brand-crimson/10 border-brand-crimson/30 rounded-2xl p-8 text-center"
                >
                  <p className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-2">Estimated Range</p>
                  <p className="text-5xl font-black text-white mb-8 tracking-tighter">{getEstimate()}</p>
                  
                  <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-crimson outline-none" required />
                    <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-crimson outline-none" required />
                    <button className="w-full bg-brand-crimson text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all flex justify-center items-center shadow-[0_0_20px_rgba(217,45,32,0.4)]">
                      <Calendar className="mr-2" size={20} /> Request Official Proposal
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-3 font-medium">Estimates are subject to field verification.</p>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const SocialProof = () => (
  <div className="bg-brand-navy py-32 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 md:px-8 text-center relative z-10">
      <Award size={48} className="text-brand-accent mx-auto mb-8" />
      <h2 className="text-4xl md:text-6xl font-black mb-16 leading-tight tracking-tighter text-white">
        Trusted by Houston's <span className="text-gray-500">Top Property Managers</span>
      </h2>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-10 md:p-16 rounded-3xl relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-crimson text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
          Featured Review
        </div>
        <div className="flex justify-center text-brand-accent mb-8">
          {[1,2,3,4,5].map(i => <svg key={i} className="w-6 h-6 fill-current mx-1" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
        </div>
        <p className="text-2xl md:text-3xl font-light italic text-gray-300 mb-10 leading-relaxed">
          "Noble Roofing handles our massive portfolios with absolute professionalism. Their team is responsive, their work is meticulous, and they understand the urgency of commercial properties."
        </p>
        <div>
          <p className="font-bold text-xl text-white">Jaime "Junior" Uniati Jr.</p>
          <p className="text-brand-accent font-medium mt-1">Chief Engineer / Property Manager, Colliers International</p>
        </div>
      </motion.div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-[#02050a] text-gray-500 py-16 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-2">
        <div className="text-3xl font-black text-white tracking-tighter mb-6">NOBLE<span className="text-brand-crimson">ROOFING</span></div>
        <p className="mb-6 max-w-sm text-gray-400">Service with Integrity. Greater Houston's premier commercial and residential roofing experts.</p>
        <div className="flex space-x-4">
          <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"><Shield size={18} className="text-white"/></div>
          <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"><Award size={18} className="text-white"/></div>
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
        <ul className="space-y-4">
          <li className="flex items-center hover:text-white transition-colors cursor-pointer"><Phone size={16} className="mr-3 text-brand-accent" /> (346) 496-4500</li>
          <li className="flex items-center hover:text-white transition-colors cursor-pointer"><Mail size={16} className="mr-3 text-brand-accent" /> contact@nobleroofing.co</li>
          <li className="flex items-start hover:text-white transition-colors cursor-pointer"><MapPin size={16} className="mr-3 mt-1 text-brand-accent shrink-0" /> 1019 Pruitt Rd, Spring, TX 77380</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
        <ul className="space-y-3">
          <li className="hover:text-white transition-colors cursor-pointer">Commercial Flat Roofing</li>
          <li className="hover:text-white transition-colors cursor-pointer">Architectural Metal</li>
          <li className="hover:text-white transition-colors cursor-pointer">Roof Coatings</li>
          <li className="hover:text-white transition-colors cursor-pointer">Residential Replacements</li>
        </ul>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="font-sans min-h-screen bg-brand-navy">
      <TopBar />
      <Navbar />
      <Hero />
      <Calculator />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;
