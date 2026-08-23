import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronRight, Star, Quote, HardHat, ShieldCheck, Wrench, Menu, X, ArrowRight } from 'lucide-react';

const stats = [
  { label: 'Certified Installers', value: '100%' },
  { label: 'Projects Completed', value: '500+' },
  { label: 'Years Experience', value: '15+' },
];

const services = [
  {
    title: 'Overlays & Recovers',
    desc: 'Install a new TPO, PVC, or modified bitumen membrane directly over your existing roof. Saves time, reduces cost, and preserves your manufacturer warranty.'
  },
  {
    title: 'Full Tear-Off & Replacement',
    desc: 'Complete removal and new system installation.'
  },
  {
    title: 'Roof Coatings',
    desc: 'Elastomeric and silicone coating systems.'
  },
  {
    title: 'Leak Detection & Repair',
    desc: 'Emergency and scheduled repair services.'
  },
  {
    title: 'Preventive Maintenance',
    desc: 'Scheduled inspection programs.'
  },
  {
    title: 'Metal Roofing',
    desc: 'Standing seam and architectural metal systems.'
  }
];

const values = [
  {
    title: 'Honesty',
    icon: <ShieldCheck className="w-12 h-12 text-brand-crimson mb-4" />,
    desc: 'We communicate openly and truthfully with every client — clear expectations, straight answers, and no surprises.'
  },
  {
    title: 'Excellence',
    icon: <Star className="w-12 h-12 text-brand-crimson mb-4" />,
    desc: 'We pursue the highest standard in every project, delivering superior craftsmanship, exceptional service, and outstanding results.'
  },
  {
    title: 'Integrity',
    icon: <HardHat className="w-12 h-12 text-brand-crimson mb-4" />,
    desc: 'We do the right thing even when no one is watching, ensuring every action reflects our commitment to fairness and quality.'
  }
];

const reviews = [
  {
    name: 'Micah Marcel',
    date: 'Jul 2026',
    text: "I highly recommend Noble Roofing. They recently completed a commercial reroof project at a property we manage, and they were great to work with. You never have to worry when you're working with Noble."
  },
  {
    name: 'Josh McKibben',
    date: 'Nov 2024',
    text: "John and his professional team just completed a substantial TPO Membrane Roofing System for my property in Dallas. We presented many challenges to Noble Roofing along the way and John was able to address them quickly."
  },
  {
    name: 'charlesdekanter',
    date: 'Jul 2026',
    text: "Working with John and Noble Roofing was a great experience from the very beginning. I called on a whim on Sunday to leave a message for a callback. John (Owner) answered the phone himself and spent almost half an hour answering my questions."
  },
  {
    name: 'Property Manager',
    date: 'Sep 2025',
    text: "I manage a commercial property in Houston but reside in Idaho. When one of my tenants called with a roof leak, I sent several messages to a number of companies and Noble was the 1st to respond."
  },
  {
    name: 'Paula Foore',
    date: 'Dec 2025',
    text: "When we needed a new roof I was concerned about finding a roofer that I could trust. But the crew was SO professional and the owner kept us up to date through the entire process with drone photos."
  }
];

const partners = [
  'GAF Certified',
  'Carlisle SynTec',
  'CertainTeed',
  'Sika Sarnafil',
  'Malarkey',
  'PAC-CLAD',
  'Berridge'
];

export default function App() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="bg-brand-navy min-h-screen text-white font-montserrat overflow-hidden">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-brand-navy/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="font-bebas text-3xl tracking-wider text-white">NOBLE<span className="text-brand-crimson">ROOFING</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium hover:text-brand-crimson transition-colors">Services</a>
            <a href="#process" className="text-sm font-medium hover:text-brand-crimson transition-colors">Process</a>
            <a href="#reviews" className="text-sm font-medium hover:text-brand-crimson transition-colors">Reviews</a>
            <a href="tel:3464964500" className="bg-brand-crimson text-white px-6 py-2 rounded-sm font-bold text-sm tracking-wider hover:bg-white hover:text-brand-crimson transition-all flex items-center">
              <Phone className="w-4 h-4 mr-2" /> (346) 496-4500
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-navy p-6 flex flex-col space-y-4 border-b border-white/10">
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)}>Process</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1541889814420-1a741168ebfa?auto=format&fit=crop&q=80&w=2000" 
            alt="Commercial Roofing" 
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-brand-crimson/20 border border-brand-crimson/50 text-brand-crimson px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span>COMMERCIAL ROOFING EXPERTS</span>
              </div>
              <h1 className="font-bebas text-6xl md:text-8xl leading-none mb-6">
                COMMERCIAL ROOFING IN THE WOODLANDS, TX <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson to-red-500">
                  & GREATER HOUSTON AREA
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Property managers, building owners, and general contractors across Greater Houston choose Noble Roofing for one reason: we do what we say. Direct access to ownership. Commercial-scale execution. Certified installations backed by the industry's leading manufacturers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:3464964500" className="bg-brand-crimson hover:bg-white hover:text-brand-crimson text-white px-8 py-4 rounded-sm font-bold text-lg tracking-wider transition-all flex items-center justify-center">
                  CALL FOR INSPECTION <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="border-y border-white/10 bg-brand-navy/50 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="font-bebas text-5xl text-brand-crimson mb-2">{stat.value}</span>
                <span className="text-gray-400 font-medium tracking-widest uppercase text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl mb-4">OUR COMMERCIAL <span className="text-brand-crimson">SERVICES</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Your Trusted Partner for All Commercial Roofing Services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <Wrench className="w-8 h-8 text-brand-crimson mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-bebas text-2xl mb-3 tracking-wide">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-gradient-to-b from-brand-navy to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-bebas text-5xl md:text-6xl mb-4">WORKING WITH NOBLE IS <span className="text-brand-crimson">SIMPLE</span></h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-crimson/30 hidden md:block" />

            <div className="space-y-12">
              {[
                { title: 'Schedule Your Inspection', desc: 'We look, listen, and document every finding with photos — no scare tactics, just facts.' },
                { title: 'Review Your Proposal', desc: 'Clear scope, manufacturer-spec materials, and honest pricing — no hidden costs or surprises.' },
                { title: 'Watch It Get Done Right', desc: 'On schedule and OSHA-compliant, with clear updates at every phase of the job.' }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full md:text-right" style={{ textAlign: i % 2 === 0 ? 'left' : 'right' }}>
                    <div className={`md:hidden font-bebas text-6xl text-brand-crimson/20 mb-2 absolute -z-10 -mt-8 ml-4`}>0{i+1}</div>
                    <h3 className="font-bebas text-3xl mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-brand-crimson text-white font-bebas text-2xl flex items-center justify-center shrink-0 z-10 shadow-[0_0_30px_rgba(185,30,49,0.3)]">
                    {i + 1}
                  </div>
                  <div className="flex-1 w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                {val.icon}
                <h3 className="font-bebas text-3xl mb-4">{val.title}</h3>
                <p className="text-gray-400 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white/5">
        <div className="container mx-auto px-6 overflow-hidden">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl mb-4">WHAT OUR <span className="text-brand-crimson">CLIENTS SAY</span></h2>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="min-w-[300px] md:min-w-[400px] bg-brand-navy p-8 rounded-xl border border-white/10 shrink-0 snap-center relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-brand-crimson fill-brand-crimson" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed relative z-10">"{review.text}"</p>
                <div>
                  <div className="font-bold text-white">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturer Partners */}
      <section className="py-16 border-y border-white/10 bg-black">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-bold tracking-widest text-gray-500 mb-8 uppercase">Certified Installers For</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50">
            {partners.map((partner, i) => (
              <div key={i} className="font-bebas text-2xl md:text-3xl tracking-widest text-white">{partner}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy pt-24 pb-12 border-t border-brand-crimson/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <span className="font-bebas text-4xl tracking-wider text-white mb-6 block">NOBLE<span className="text-brand-crimson">ROOFING</span></span>
              <p className="text-gray-400 mb-8 max-w-md">
                Noble Roofing serves Greater Houston with commercial roofing for industrial, retail, healthcare, and multifamily properties.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.youtube.com/watch?v=pi96wVpE1KY" target="_blank" rel="noreferrer" className="text-white hover:text-brand-crimson transition-colors">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bebas text-xl mb-6 tracking-widest">CONTACT INFO</h4>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-400">
                  <MapPin className="w-5 h-5 mr-3 shrink-0 text-brand-crimson" />
                  <span>1019 Pruitt Rd,<br/>Spring, TX 77380</span>
                </li>
                <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 mr-3 shrink-0 text-brand-crimson" />
                  <a href="tel:3464964500">(346) 496-4500</a>
                </li>
                <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 mr-3 shrink-0 text-brand-crimson" />
                  <a href="mailto:contact@nobleroofing.co">contact@nobleroofing.co</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bebas text-xl mb-6 tracking-widest">QUICK LINKS</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Commercial Services</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Noble Roofing. All rights reserved.</p>
            <p className="italic font-medium text-gray-400">"But the noble make noble plans, and by noble deeds they stand." — Isaiah 32:8</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
