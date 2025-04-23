import { useEffect, useRef } from "react";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import x from "./assets/x.png";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function App() {
  const headerRef = useRef(null);
  const taglineRef = useRef(null);
  const techStackRef = useRef(null);
  const socialLinksRef = useRef(null);
  const containerRef = useRef(null);
  const underlineLeftRef = useRef(null);
  const underlineRightRef = useRef(null);
  const glowRef = useRef(null);

  const socialLinks = [
    {
      logo: github,
      link: "https://github.com/Anjansuman",
      alt: "GitHub",
      label: "GitHub"
    },
    {
      logo: linkedin,
      link: "https://www.linkedin.com/in/anjansuman/",
      alt: "LinkedIn",
      label: "LinkedIn"
    },
    {
      logo: x,
      link: "https://x.com/AnjanSuman8",
      alt: "X",
      label: "Twitter"
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "🔷" },
    { name: "TailwindCSS", icon: "🌊" }
  ];

  useEffect(() => {
    gsap.defaults({ ease: "power3.out" });
    
    // Initial setup
    gsap.set(headerRef.current, { y: -50, opacity: 0 });
    gsap.set(taglineRef.current, { opacity: 1 });
    gsap.set(".tech-item", { opacity: 0, y: 20 });
    gsap.set(".social-link", { scale: 0, opacity: 0, rotation: -90 });
    gsap.set(underlineLeftRef.current, { width: 0, opacity: 0 });
    gsap.set(underlineRightRef.current, { width: 0, opacity: 0 });
    gsap.set(glowRef.current, { opacity: 0, scale: 0.8 });
    
    const tl = gsap.timeline();
    
    gsap.to(containerRef.current, {
      backgroundPosition: "100% 100%",
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    tl.to(headerRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    });
    
    tl.to(glowRef.current, {
      opacity: 0.7,
      scale: 1,
      duration: 1.2,
      ease: "power2.inOut"
    }, "-=0.5");

    tl.to([underlineLeftRef.current, underlineRightRef.current], {
      width: "40%",
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut"
    }, "-=0.8");

    tl.to(taglineRef.current, {
      duration: 1,
      text: "Configured with",
      ease: "none"
    });

    tl.to(".tech-item", {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: "back.out(1.2)"
    }, "-=0.4");

    tl.to(".social-link", {
      scale: 1,
      rotation: 0,
      opacity: 1,
      stagger: 0.1, 
      duration: 0.6,
      ease: "back.out(1.5)"
    }, "-=0.2");

    gsap.to(glowRef.current, {
      opacity: 0.4,
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => {
      tl.kill();
      gsap.killTweensOf(glowRef.current);
      gsap.killTweensOf(".tech-item");
      gsap.killTweensOf(containerRef.current);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen w-full bg-gradient-to-br from-[#050505] via-[#131335] to-[#050505] bg-size-200 text-white flex flex-col justify-center items-center px-6 py-12 gap-20 overflow-hidden relative"
      style={{ backgroundSize: "200% 200%", backgroundPosition: "0% 0%" }}
    >
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-800 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900 rounded-full filter blur-3xl opacity-20"></div>

        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="flex flex-col items-center gap-8 text-center z-10 max-w-4xl">
        <div className="relative">
          <div 
            ref={glowRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-[#6366F180] to-transparent rounded-full filter blur-2xl"
            style={{ width: "120%", height: "300%" }}
          ></div>
          
          <h1 
            ref={headerRef} 
            className="text-6xl md:text-8xl font-light tracking-widest relative"
            style={{ fontFamily: 'sans' }}
          >
            <span 
              className="bg-clip-text font-medium text-transparent bg-gradient-to-b from-white to-[#B8C0FF]"
              style={{ 
                letterSpacing: "0.15em",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
              }}
            > 
              TRUFFLE
            </span>
            
            <div className="flex justify-center items-center gap-2 mt-4">
              <div 
                ref={underlineLeftRef}
                className="h-px bg-gradient-to-l from-white to-transparent"
              ></div>
              <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
              <div 
                ref={underlineRightRef}
                className="h-px bg-gradient-to-r from-white to-transparent"
              ></div>
            </div>
          </h1>
        </div>
        
        <p 
          ref={taglineRef} 
          className="text-xl md:text-2xl text-gray-200 tracking-widest font-light min-h-5"
          style={{ fontFamily: 'serif', letterSpacing: "0.1em" }}
        ></p>
        
        <div ref={techStackRef} className="flex gap-6 flex-wrap justify-center mt-8">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="cursor-pointer tech-item flex items-center gap-2 px-6 py-3 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 shadow-xl hover:border-white/30 transition-all duration-300 group"
            >
              <span className="text-2xl group-hover:rotate-12 transition-transform">{tech.icon}</span>
              <span className="text-lg font-light text-[#e4e4e4] group-hover:text-white tracking-wider">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div ref={socialLinksRef} className="flex gap-8 mt-8">
        {socialLinks.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110 group"
          >
            <div className="p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-xl group-hover:border-white/30 relative">
              {item.alt === "GitHub" && (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#e4e4e4">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              )}
              {item.alt === "LinkedIn" && (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#e4e4e4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              )}
              {item.alt === "X" && (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#e4e4e4">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              )}
            </div>
            <span className="text-sm text-[#e4e4e4] group-hover:text-white tracking-wider">{item.label}</span>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-sm text-gray-400 tracking-wider">
        Built by Anjan using modern WEB-3 technologies
      </div>
    </div>
  );
}

export default App;