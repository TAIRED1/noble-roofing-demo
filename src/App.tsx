import { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';

// --- AnimeJS Interactive Background ---
const AnimeGrid = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let columns = 0, rows = 0;
    
    const handleResize = () => {
      columns = Math.floor(window.innerWidth / 60);
      rows = Math.floor(window.innerHeight / 60);
      
      wrapper.style.setProperty("--columns", columns.toString());
      wrapper.style.setProperty("--rows", rows.toString());
      
      createGrid();
    }
    
    const createGrid = () => {
      wrapper.innerHTML = "";
      const quantity = columns * rows;
      
      for(let i = 0; i < quantity; i++) {
        const tile = document.createElement("div");
        tile.className = "tile border-[0.5px] border-white/[0.03] bg-transparent cursor-pointer relative overflow-hidden transition-colors hover:bg-white/[0.02]";
        
        const inner = document.createElement("div");
        inner.className = "tile-inner w-full h-full bg-brand-crimson opacity-0 absolute inset-0";
        
        tile.appendChild(inner);
        
        tile.onclick = () => {
          anime({
            targets: '.tile-inner',
            opacity: [
              { value: 0.8, duration: 100, easing: 'easeOutSine' },
              { value: 0, duration: 1000, easing: 'easeInOutQuad' }
            ],
            scale: [
              { value: 0.1, duration: 100, easing: 'easeOutSine' },
              { value: 1, duration: 800, easing: 'easeInOutQuad' }
            ],
            borderRadius: [
              { value: '50%', duration: 100 },
              { value: '0%', duration: 800 }
            ],
            delay: anime.stagger(50, {
              grid: [columns, rows],
              from: i
            })
          });
        };
        
        wrapper.appendChild(tile);
      }
    }
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    // Initial animation cascade
    setTimeout(() => {
      if(wrapper.children.length > 0) {
         const centerIndex = Math.floor((columns * rows) / 2) + Math.floor(columns / 2);
         const target = wrapper.children[centerIndex] || wrapper.children[0];
         (target as HTMLElement).click();
      }
    }, 800);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div 
      ref={wrapperRef}
      className="absolute inset-0 z-0 h-screen w-screen overflow-hidden grid"
      style={{
        gridTemplateColumns: `repeat(var(--columns), 1fr)`,
        gridTemplateRows: `repeat(var(--rows), 1fr)`
      }}
    />
  );
};

// --- UI Components ---
const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full z-50 pt-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center"
        >
          <div className="text-2xl font-black text-white tracking-tighter mix-blend-difference">
            NOBLE<span className="text-brand-crimson">ROOFING</span>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:flex items-center space-x-12 text-sm font-bold text-gray-400 tracking-widest uppercase mix-blend-difference"
        >
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">Integrity</a>
          <a href="#calculator" className="text-brand-crimson hover:text-white transition-colors">Estimator</a>
        </motion.div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#02050a] flex items-center justify-center overflow-hidden">
      {/* The AnimeJS Grid */}
      <AnimeGrid />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full z-10 pointer-events-none flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#D92D20_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-xs font-bold text-white backdrop-blur-3xl uppercase tracking-widest">
              Commercial Excellence
            </span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-[9rem] font-black leading-[0.9] tracking-tighter mb-8 text-white mix-blend-difference"
        >
          PRECISION<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-brand-crimson">ENGINEERED.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl text-gray-400 font-light max-w-2xl mb-12 mix-blend-difference"
        >
          Manufacturer-certified commercial roofing systems. 
          Tap the background to visualize our speed.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pointer-events-auto flex flex-col sm:flex-row gap-4"
        >
          <a href="#calculator" className="bg-white text-black text-sm uppercase tracking-widest font-black px-10 py-5 rounded-none hover:bg-brand-crimson hover:text-white transition-all duration-300 flex items-center justify-center">
            Instant Estimate <ArrowUpRight className="ml-2" size={18} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

const Calculator = () => {
  const [projectType, setProjectType] = useState('commercial_flat');
  const [sqft, setSqft] = useState(5000);
  const [showResult, setShowResult] = useState(false);

  return (
    <div id="calculator" className="py-32 bg-[#02050a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter"
          >
            DATA<br/>
            <span className="text-gray-600">DRIVEN.</span>
          </motion.h2>
          <p className="text-lg text-gray-500 mb-10 max-w-md">
            Stop waiting for callbacks. Get an immediate, algorithmically calculated baseline for your commercial project.
          </p>
        </div>

        <div className="lg:w-1/2 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#050a15] border border-white/10 p-10 relative group"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-crimson" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-crimson" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-crimson" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-crimson" />
            
            <div className="space-y-8">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-3 uppercase tracking-widest">System Type</label>
                <select 
                  className="w-full bg-transparent border-b border-white/20 text-white py-3 focus:border-brand-crimson outline-none font-bold text-xl cursor-pointer"
                  value={projectType}
                  onChange={(e) => {setProjectType(e.target.value); setShowResult(false);}}
                >
                  <option value="commercial_flat" className="bg-[#050a15]">TPO / PVC Flat Roof</option>
                  <option value="metal" className="bg-[#050a15]">Structural Metal</option>
                  <option value="coatings" className="bg-[#050a15]">Elastomeric Coatings</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Square Footage</label>
                  <span className="text-brand-crimson font-bold">{sqft.toLocaleString()} SQ FT</span>
                </div>
                <input 
                  type="range" min="1000" max="100000" step="1000" value={sqft}
                  onChange={(e) => {setSqft(parseInt(e.target.value)); setShowResult(false);}}
                  className="w-full h-1 bg-white/10 appearance-none cursor-pointer accent-brand-crimson"
                />
              </div>

              {!showResult ? (
                <button 
                  onClick={() => setShowResult(true)}
                  className="w-full bg-white text-black font-black uppercase tracking-widest py-5 hover:bg-brand-crimson hover:text-white transition-colors duration-300"
                >
                  Compute
                </button>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-crimson/10 border border-brand-crimson/30 p-8 text-center"
                >
                  <p className="text-[10px] font-bold text-brand-crimson uppercase tracking-widest mb-2">Calculated Baseline</p>
                  <p className="text-4xl font-black text-white mb-8 tracking-tighter">
                    ${(sqft * (projectType === 'metal' ? 12 : 6)).toLocaleString()} - ${(sqft * (projectType === 'metal' ? 15 : 9)).toLocaleString()}
                  </p>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="COMPANY NAME" className="w-full bg-transparent border-b border-white/20 text-white placeholder-gray-600 py-3 text-sm focus:border-brand-crimson outline-none font-bold uppercase tracking-wider" required />
                    <button className="w-full bg-brand-crimson text-white font-black uppercase tracking-widest py-4 hover:bg-white hover:text-black transition-colors duration-300">
                      Request Official Bid
                    </button>
                  </form>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="font-sans min-h-screen bg-[#02050a] selection:bg-brand-crimson selection:text-white">
      <Navbar />
      <Hero />
      <Calculator />
    </div>
  );
}

export default App;
