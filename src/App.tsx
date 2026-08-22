import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronRight, Shield, Award, Calendar, CheckCircle2, ChevronDown, Wrench, Menu, X } from 'lucide-react';

const TopBar = () => (
  <div className="bg-brand-navy text-white text-sm py-2 px-4 md:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-6 mb-2 md:mb-0">
        <a href="tel:3464964500" className="flex items-center hover:text-red-300 transition-colors">
          <Phone size={16} className="mr-2" />
          (346) 496-4500
        </a>
        <a href="mailto:contact@nobleroofing.co" className="flex items-center hover:text-red-300 transition-colors hidden sm:flex">
          <Mail size={16} className="mr-2" />
          contact@nobleroofing.co
        </a>
      </div>
      <div className="flex items-center text-gray-300">
        <MapPin size={16} className="mr-2" />
        Houston & The Woodlands, TX
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-3xl font-bold text-brand-navy tracking-tighter">NOBLE ROOFING</div>
        </div>
        <div className="hidden md:flex items-center space-x-8 font-semibold text-brand-navy">
          <a href="#services" className="hover:text-brand-crimson transition-colors">Services</a>
          <a href="#calculator" className="hover:text-brand-crimson transition-colors">Estimator</a>
          <a href="#about" className="hover:text-brand-crimson transition-colors">About Us</a>
          <a href="#calculator" className="bg-brand-crimson text-white px-6 py-2 rounded font-bold hover:bg-red-800 transition-colors shadow-lg">
            Instant Estimate
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-navy">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-4 font-semibold text-brand-navy">
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#calculator" onClick={() => setIsOpen(false)}>Estimator</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#calculator" onClick={() => setIsOpen(false)} className="text-brand-crimson font-bold">Instant Estimate</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <div className="relative bg-brand-navy text-white overflow-hidden">
    <div className="absolute inset-0 opacity-40">
      <img 
        src="https://images.unsplash.com/photo-1541888081622-df38d2a58b88?auto=format&fit=crop&q=80&w=2070" 
        alt="Commercial Roof" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent"></div>
    </div>
    
    <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 flex flex-col items-start">
      <div className="inline-block bg-brand-crimson text-white font-bold tracking-widest text-xs px-3 py-1 mb-6 uppercase rounded-sm">
        Service with Integrity
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 max-w-4xl">
        YOUR BUILDING. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-brand-crimson">PROTECTED.</span><br />
        YOUR PROJECT. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-brand-crimson">ON SCHEDULE.</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light">
        Manufacturer-certified commercial roofing systems — TPO, PVC, metal, modified bitumen, and coatings.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <a href="#calculator" className="bg-brand-crimson text-white text-lg font-bold px-8 py-4 rounded shadow-xl shadow-red-900/50 hover:bg-red-800 transition-transform hover:-translate-y-1 flex items-center justify-center">
          Request Instant Estimate <ChevronRight className="ml-2" />
        </a>
        <a href="tel:3464964500" className="bg-white/10 backdrop-blur-md border border-white/30 text-white text-lg font-bold px-8 py-4 rounded hover:bg-white/20 transition-colors flex items-center justify-center">
          <Phone className="mr-2" size={20} /> Call Dispatch
        </a>
      </div>
      <div className="mt-16 flex items-center space-x-6 text-sm text-gray-400 font-medium tracking-wide">
        <span className="flex items-center"><CheckCircle2 className="mr-2 text-brand-crimson" size={18}/> Licensed & Insured</span>
        <span className="flex items-center"><CheckCircle2 className="mr-2 text-brand-crimson" size={18}/> Veteran Supporting</span>
      </div>
    </div>
  </div>
);

const Accreditations = () => (
  <div className="bg-brand-gray py-8 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Certified by Industry Leaders</p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        <span className="text-xl font-bold text-gray-700">GAF Certified</span>
        <span className="text-xl font-bold text-gray-700">Carlisle SynTec</span>
        <span className="text-xl font-bold text-gray-700">CertainTeed Master</span>
        <span className="text-xl font-bold text-gray-700">Sika Sarnafil</span>
        <span className="text-xl font-bold text-gray-700">Malarkey</span>
        <span className="text-xl font-bold text-gray-700">PAC-CLAD</span>
      </div>
    </div>
  </div>
);

const Calculator = () => {
  const [projectType, setProjectType] = useState('commercial_flat');
  const [sqft, setSqft] = useState(5000);
  const [urgency, setUrgency] = useState('inspection_only');
  const [showResult, setShowResult] = useState(false);

  // Rough estimation logic for demo
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
    <div id="calculator" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-extrabold text-brand-navy mb-6 leading-tight">
            Instant Commercial Roof Cost Estimator
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Property managers and GCs need numbers fast. Use our interactive calculator to get an immediate baseline estimate for your upcoming project, then seamlessly book a specialized inspection.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-full mr-4 text-brand-crimson">
                <Calendar size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy text-xl">1-Click Booking</h4>
                <p className="text-gray-600">Instantly route your inquiry to our dispatch team.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-full mr-4 text-brand-crimson">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy text-xl">Accurate Baselines</h4>
                <p className="text-gray-600">Calculated based on current Houston material and labor rates.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-crimson"></div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Project Type</label>
                <div className="relative">
                  <select 
                    className="w-full appearance-none border border-gray-300 rounded-lg py-3 px-4 bg-gray-50 focus:ring-2 focus:ring-brand-crimson focus:border-brand-crimson outline-none font-medium transition-shadow"
                    value={projectType}
                    onChange={(e) => {setProjectType(e.target.value); setShowResult(false);}}
                  >
                    <option value="commercial_flat">Commercial Flat (TPO/PVC)</option>
                    <option value="metal">Architectural/Structural Metal</option>
                    <option value="coatings">Roof Coatings / Restoration</option>
                    <option value="residential">Residential Replacement</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Estimated Square Footage</label>
                <div className="flex items-center space-x-4">
                  <input 
                    type="range" 
                    min="1000" 
                    max="100000" 
                    step="1000"
                    value={sqft}
                    onChange={(e) => {setSqft(parseInt(e.target.value)); setShowResult(false);}}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-crimson"
                  />
                  <div className="w-24 text-right font-bold text-brand-navy text-lg">{sqft.toLocaleString()}</div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Timeline / Urgency</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['inspection_only', 'planning_budget', 'emergency_leak'].map((u) => (
                    <button
                      key={u}
                      onClick={() => {setUrgency(u); setShowResult(false);}}
                      className={`py-2 px-3 border rounded-lg text-sm font-semibold transition-all ${
                        urgency === u 
                        ? 'bg-brand-navy border-brand-navy text-white shadow-md' 
                        : 'bg-white border-gray-300 text-gray-600 hover:border-brand-navy'
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
                  className="w-full bg-brand-crimson text-white font-bold py-4 rounded-lg hover:bg-red-800 transition-colors shadow-lg shadow-red-900/20 text-lg flex justify-center items-center"
                >
                  Calculate Estimate <ChevronRight className="ml-2" />
                </button>
              ) : (
                <div className="bg-brand-gray border border-gray-200 rounded-lg p-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Estimated Range</p>
                  <p className="text-4xl font-extrabold text-brand-navy mb-6">{getEstimate()}</p>
                  
                  <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded py-2 px-3 focus:ring-1 focus:ring-brand-crimson outline-none" required />
                    <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded py-2 px-3 focus:ring-1 focus:ring-brand-crimson outline-none" required />
                    <button className="w-full bg-brand-navy text-white font-bold py-3 rounded-lg hover:bg-gray-900 transition-colors flex justify-center items-center">
                      <Calendar className="mr-2" size={18} /> Book On-Site Verification
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-2">No commitment required. Estimates are subject to field verification.</p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialProof = () => (
  <div className="bg-brand-navy text-white py-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-crimson/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
      <Award size={48} className="text-brand-crimson mx-auto mb-8" />
      <h2 className="text-3xl md:text-5xl font-extrabold mb-10 leading-tight">Trusted by Houston's Top Property Managers</h2>
      
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl">
        <div className="flex justify-center text-yellow-400 mb-6">
          {[1,2,3,4,5].map(i => <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
        </div>
        <p className="text-xl md:text-2xl font-medium italic text-gray-300 mb-8 leading-relaxed">
          "Noble Roofing handles our massive portfolios with absolute professionalism. Their team is responsive, their work is meticulous, and they understand the urgency of commercial properties."
        </p>
        <div>
          <p className="font-bold text-lg">Jaime "Junior" Uniati Jr.</p>
          <p className="text-brand-crimson font-medium">Chief Engineer / Property Manager, Colliers International</p>
        </div>
      </div>
    </div>
  </div>
);

const Mission = () => (
  <div id="about" className="py-24 bg-brand-gray">
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-16 items-center">
      <div className="md:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1593182440959-9d5165b29b59?auto=format&fit=crop&q=80&w=1470" 
          alt="Noble Roofing Team" 
          className="rounded-2xl shadow-2xl"
        />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-brand-crimson font-bold tracking-widest uppercase mb-2">Our Foundation</h3>
        <h2 className="text-4xl font-extrabold text-brand-navy mb-6">Built on Noble Plans</h2>
        <p className="text-lg text-gray-600 mb-6 italic border-l-4 border-brand-crimson pl-4">
          "But the noble make noble plans, and by noble deeds they stand." — Isaiah 32:8
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          At Noble Roofing, our name isn't just a label; it's a standard. Founded by John Austin Earles, we believe in delivering uncompromising quality with absolute integrity. We treat every commercial property and residential home as if it were our own.
        </p>
        
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h4 className="font-bold text-brand-navy text-xl mb-3 flex items-center">
            <Shield className="mr-2 text-brand-crimson" /> Community Impact
          </h4>
          <p className="text-gray-600 leading-relaxed">
            We are proud to give back to those who served. Noble Roofing actively partners with the <strong>Mighty Oaks Foundation</strong> to support veteran service programs and mental health initiatives.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12">
    <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div className="text-2xl font-bold text-white tracking-tighter mb-4">NOBLE ROOFING</div>
        <p className="mb-4">Service with Integrity. Greater Houston's premier commercial and residential roofing experts.</p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Contact</h4>
        <ul className="space-y-2">
          <li className="flex items-center"><Phone size={16} className="mr-2 text-brand-crimson" /> (346) 496-4500</li>
          <li className="flex items-center"><Mail size={16} className="mr-2 text-brand-crimson" /> contact@nobleroofing.co</li>
          <li className="flex items-center"><MapPin size={16} className="mr-2 text-brand-crimson" /> 1019 Pruitt Rd, Spring, TX 77380</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Services</h4>
        <ul className="space-y-2">
          <li>Commercial Flat Roofing (TPO/PVC)</li>
          <li>Architectural Metal Systems</li>
          <li>Roof Coatings & Restoration</li>
          <li>Residential Roof Replacements</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-gray-800 text-sm text-center">
      &copy; {new Date().getFullYear()} Noble Roofing. All rights reserved. Prototype for demonstration purposes.
    </div>
  </footer>
);

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 selection:bg-brand-crimson selection:text-white">
      <TopBar />
      <Navbar />
      <Hero />
      <Accreditations />
      <Calculator />
      <SocialProof />
      <Mission />
      <Footer />
    </div>
  );
}

export default App;
