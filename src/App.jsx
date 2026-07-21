import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Calendar, Download, ExternalLink,
  Github, Linkedin, Mail, MapPin, Moon, Sun
} from "lucide-react";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";

/* ============================================
   CSS-only Typewriter (StrictMode-safe)
   Injects a tiny stylesheet and reveals text
   using width animation with steps(n).
   ============================================ */
function TypewriterCSS() {
  return (
    <style>{`
      .tw {
        display:inline-block;
        white-space: nowrap;
        overflow: hidden;
        border-right: .09em solid var(--muted);
      }
      .tw.tw-done { border-right-color: transparent; }
      @keyframes tw-typing {
        from { width: 0 }
        to   { width: var(--tw-width, 0) }
      }
    `}</style>
  );
}
function Typewriter({ text, className = "", ms = 2400 }) {
  const [done, setDone] = useState(false);
  const count = text.length; // characters
  return (
    <span
      className={`${className} tw ${done ? "tw-done" : ""}`}
      style={{
        ["--tw-width"]: `${count}ch`,
        animation: `tw-typing ${ms}ms steps(${count}) forwards`,
        // ensure preserve for re-renders
        WebkitFontSmoothing: "antialiased"
      }}
      onAnimationEnd={() => setDone(true)}
    >
      {text}
    </span>
  );
}

// ---------- Helpers ----------
const cx = (...a) => a.filter(Boolean).join(" ");
const fadeUp = { hidden:{opacity:0, y:24}, show:{opacity:1, y:0, transition:{duration:.6}} };

// ---------- Content ----------
const socials = {
  email: "tasfiaanika17@gmail.com",
  github: "https://github.com/tasfiaanika242",
  linkedin: "https://www.linkedin.com/in/tasfiaanika42",
};

const projects = [
  {
    title: "BRACU CGPA Calculator & AI Study Planner",
    description:
      "Full-stack platform (CGPA calculator, AI study planner, motivation assistant). Planner turns courses, deadlines, and hours into weekly schedules; simple logistic regression intent model on the frontend (no external API cost).",
    tags: ["React", "Node.js", "Express", "MongoDB", "Material-UI", "Logistic Regression"],
    link: "https://github.com/tasfiaanika242/cgpa-study-planner-ai.git",
    repo: "https://github.com/tasfiaanika242/cgpa-study-planner-ai.git",
    image: "/cgpa.jpg",
  },
  {
    title: "Cybercrime Reporting Platform",
    description:
      "Secure web platform to file and track cybercrime complaints. Spring Boot services, DTO validation, token auth (Spring Security), RBAC, password reset, admin approval, routing, evidence uploads, real-time chatbot, global search; Docker Compose for backend+DB; Vercel frontend.",
    tags: ["Spring Boot", "React", "PostgreSQL", "Docker", "Spring Security"],
    link: "https://github.com/sohayab1/thesis-project2.git",
    repo: "https://github.com/sohayab1/thesis-project2.git",
    image: "/cybercrime.jpg",
  },
  {
    title: "Easy Edu Educational Platform",
    description:
      "Django + MySQL app with auth, RBAC (instructor/student), admin CMS. Modeled core entities and optimized indexes; modular templates reduced duplicate UI code.",
    tags: ["Django", "Python", "MySQL"],
    link: "https://github.com/Tashin2098/Easy-Edu-Platform.git",
    repo: "https://github.com/Tashin2098/Easy-Edu-Platform.git",
    image: "/easyedu.jpg",
  },
  {
    title: "Trip Management Web App",
    description:
      "PHP + MySQL app for destination filtering, cost estimation, and itinerary CRUD with prepared statements; normalized schema (3NF) and validated endpoints.",
    tags: ["PHP", "MySQL"],
    link: "#",
    repo: "#",
    image: "/trip.jpg",
  },
  {
    title: "3D Rendering Application",
    description:
      "OpenGL + C++ renderer for cube, sphere, pyramid with Phong lighting and basic camera controls; 60+ FPS on lab hardware via VBO optimizations.",
    tags: ["OpenGL", "C++"],
    link: "#",
    repo: "#",
    image: "/3d.jpg",
  },
];

const experience = [
    {
    role: "Digitalyst - Cyber Security Intern",
    org: "Banglalink",
    orgLogo: "/Bg.webp.jpeg",     // <-- put logo file here
    period: "Feb 2026 – May 2026",
    location: "Dhaka, Bangladesh",
  bullets: [
    "Led enterprise-scale phishing simulations and security awareness training for 1,100+ employees, strengthening organizational resilience to social engineering.",
    "Performed vulnerability assessments and SIEM/UEBA-based threat monitoring, including simulated attack scenarios and 30+ new detection use cases.",
  ],
  },
  {
    role: "Mentee, Womentor 6.0",
    org: "Banglalink",
    orgLogo: "/Bg.webp.jpeg",     // <-- put logo file here
    period: "Dec 2024 – Jun 2025",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Completed mentorship on digital product workflows, stakeholder comms, and structured reporting.",
      "Mapped communication pipelines and produced concise leadership updates for mini-projects.",
    ],
  },

];


const education = [
  {
    degree: "B.Sc. in Computer Science and Engineering (CGPA 3.41/4.00)",
    inst: "BRAC University",
    where: "Dhaka, Bangladesh",
    when: "Oct 2021 – Oct 2025",
  },
  {
    degree: "HSC, Science (GPA 5.00/5.00)",
    inst: "Holy Cross College",
    where: "Dhaka, Bangladesh",
    when: "Jul 2018 – Sep 2020",
  },
  {
    degree: "SSC, Science (GPA 5.00/5.00)",
    inst: "Holy Cross Girls' High School",
    where: "Dhaka, Bangladesh",
    when: "Jan 2016 - May 2018",
  },
];

const skills = {
  languages: [
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "SQL", level: 75 },
    { name: "Java", level: 65 },
    { name: "PHP", level: 60 },
    { name: "C/C++", level: 55 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "C#", level: 40 },
  ],
  frameworks: [
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express", level: 80 },
    { name: "Django", level: 75 },
    { name: "Spring Boot", level: 65 },
    { name: "Flask", level: 60 },
    { name: "Material-UI", level: 75 },
    { name: "OpenGL", level: 40 },
  ],
  databases: [
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 75 },
  ],
  cybersecurity: [
    { name: "Tenable Nessus", level: 75 },
    { name: "CrowdStrike / SIEM", level: 70 },
    { name: "UEBA & Threat Detection", level: 72 },
    { name: "Vulnerability Assessment", level: 78 },
    { name: "Phishing Simulation", level: 80 },
    { name: "WAF / OWASP", level: 65 },
    { name: "Incident Response", level: 68 },
  ],
  concepts: [
    { name: "REST APIs", level: 85 },
    { name: "OOP", level: 85 },
    { name: "Authentication & RBAC", level: 80 },
    { name: "DSA", level: 70 },
    { name: "MVC", level: 75 },
    { name: "HCI & Usability Research", level: 78 },
    { name: "Unit Testing", level: 65 },
    { name: "NLP / ML Basics", level: 55 },
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "Docker", level: 70 },
    { name: "Linux / Parrot OS", level: 72 },
    { name: "Postman", level: 80 },
    { name: "VS Code / PyCharm", level: 85 },
    { name: "Excel / Word / PPT", level: 75 },
  ],
};

const skillData = [
  { label: "Full-Stack Dev",         detail: "React, Django, Spring Boot, REST APIs",     score: 1 },
  { label: "Security Operations",    detail: "Nessus, SIEM, UEBA, Phishing Simulation",   score: 2 },
  { label: "HCI Research",           detail: "Usability testing, Heuristic evaluation",   score: 3 },
  { label: "RAG & LLM APIs",         detail: "FAISS, SentenceTransformers, Groq, OpenAI", score: 4 },
  { label: "AI Automation",          detail: "n8n workflows, API chaining, agents",        score: 5 },
  { label: "ML Training & Tuning",   detail: "Model training, fine-tuning, inference",     score: 6 },
];
// ---------- Hooks ----------
function useActiveSection(ids){
  const [active, setActive] = useState(ids[0]);
  useEffect(()=>{
    const observers=[];
    ids.forEach((id)=>{
      const el = document.getElementById(id);
      if(!el) return;
      const obs = new IntersectionObserver((entries)=>{
        entries.forEach(e=>{ if(e.isIntersecting) setActive(id); })
      }, { threshold:.35 });
      obs.observe(el); observers.push(obs);
    });
    return ()=> observers.forEach(o=>o.disconnect());
  }, [ids]);
  return active;
}

// ---------- UI ----------
function ThemeToggle({ theme, setTheme }){
  const Icon = theme === "dark" ? Sun : Moon;
  const next = theme === "dark" ? "light" : "dark";
  return (
    // btn-toggle class ensures this pill remains solid white per your request
    <button className="btn btn-toggle" onClick={()=> setTheme(next)} aria-label="Toggle theme">
      <Icon size={18}/> {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

function Nav({ sections, active }){
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <a href="#home" className="brand">tasfiaanika</a>
        <div className="links">
          {sections.map(s=> (
            <a key={s.id} href={`#${s.id}`} className={cx(active===s.id && "active")}>{s.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero({ theme, setTheme }){
  return (
    <header id="home" className="hero">
      <TypewriterCSS />
      <div className="blob" />
      <div className="container grid-2">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          {/* Typewritten headline with your name (CSS-only) */}
          <Typewriter
            text={"Hi, I’m Tasfia Shobnom Anika"}
            className="title"
            ms={2400}
          />
          <p className="mb-6 text-muted" style={{maxWidth:640}}>
            Computer Science graduate building at the intersection of full-stack engineering, cybersecurity, and AI —
            from shipping production applications and running enterprise security operations to researching
            human-centered systems and integrating LLMs. I take ownership, stay curious, and care about
            work that actually matters.
          </p>
          <div style={{display:'flex',flexWrap:'wrap',gap:12,alignItems:'center'}}>
            <a href="#projects" className="btn btn-primary">View Projects <ArrowRight size={18}/></a>
            <a href="/Tasfia_Anika_Resume.pdf" className="btn btn-ghost"><Download size={18}/> Resume</a>
            <a className="icon-btn" href={socials.github} aria-label="GitHub"><Github size={18}/></a>
            <a className="icon-btn" href={socials.linkedin} aria-label="LinkedIn"><Linkedin size={18}/></a>
            <a 
              className="icon-btn" 
              href={`https://mail.google.com/mail/?view=cm&to=${socials.email}`}
              target="_blank" 
              rel="noreferrer" 
              aria-label="Email"
            >
              <Mail size={18}/>
            </a>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </motion.div>

        {/* Fade-only (no scale) + intrinsic dimensions for sharper image */}
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.6}}>
          <div className="card" style={{maxWidth:460, margin:"0 auto", overflow:"hidden", borderRadius:20}}>
            <img
              alt="Tasfia Shobnom Anika"
              src="/Profile.jpg"          // put Profile.jpg in /public
              width={920} height={920}    // helps HiDPI displays (crisp)
              loading="eager"
              decoding="async"
              style={{ display:"block", width:"100%", height:"auto", objectFit:"cover" }}
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}

function About(){
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="mb-6" style={{fontSize:28, fontWeight:700}}>About</motion.h2>
        <div className="grid-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}>
            <p style={{fontSize:15, lineHeight:1.8, marginBottom:16}}>
              I'm a Computer Science graduate who sits at the intersection of
              <span style={{color:'var(--accent, #6366f1)', fontWeight:600}}> software engineering</span>,
              <span style={{color:'var(--accent, #6366f1)', fontWeight:600}}> cybersecurity</span>, and
              <span style={{color:'var(--accent, #6366f1)', fontWeight:600}}> AI</span> — and I genuinely
              enjoy working across all three. I don't just write code to make things run, I think about
              why systems are built the way they are, where they break, and how to make them more reliable,
              secure, and useful for real people.
            </p>
            <p style={{fontSize:15, lineHeight:1.8, marginBottom:16, color:'var(--muted)'}}>
              I've shipped full-stack applications, run enterprise-scale security operations for 1,100+ users,
              and conducted HCI research that bridges technical design with human behavior. I take ownership of whatever I'm working on and push it further than what's asked.
            </p>
            <p style={{fontSize:15, lineHeight:1.8, color:'var(--muted)'}}>
              Right now I'm deep into the AI space — building with RAG pipelines, LLM APIs, n8n automation,
              and exploring fine-tuning and inference optimization. I'm the kind of person who gets genuinely
              excited when a new paper drops or a new tool breaks something I thought I understood. That
              curiosity is what keeps me sharp and is the most honest thing I can tell you about how I work.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}>
            <div className="card">
              <div className="card-inner">
                <h3 style={{margin:'0 0 16px', fontWeight:600}}>My Journey</h3>
                <div style={{ padding: '8px 0' }}>
                  {skillData.map((item, i) => (
                    <div key={item.label} style={{
                      display: 'flex',
                      gap: 16,
                      alignItems: 'flex-start',
                      marginBottom: i === skillData.length - 1 ? 0 : 20,
                      position: 'relative'
                    }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 20 }}>
                        <div style={{
                          width: 12, height: 12, borderRadius: '50%', flexShrink: 0, marginTop: 3,
                          background: i === skillData.length - 1 ? 'var(--accent, #6366f1)' : 'var(--muted)',
                          boxShadow: i === skillData.length - 1 ? '0 0 8px var(--accent, #6366f1)' : 'none'
                        }} />
                        {i < skillData.length - 1 && (
                          <div style={{ width: 2, flex: 1, minHeight: 28, background: 'rgba(128,128,128,0.2)', marginTop: 4 }} />
                        )}
                      </div>
                      <div style={{ paddingBottom: 4 }}>
                        <div style={{
                          fontWeight: 600, fontSize: 14,
                          color: i === skillData.length - 1 ? 'var(--accent, #6366f1)' : 'inherit'
                        }}>
                          {item.label}
                          {i === skillData.length - 1 && (
                            <span style={{
                              marginLeft: 8, fontSize: 11, fontWeight: 500,
                              background: 'var(--accent, #6366f1)', color: '#fff',
                              borderRadius: 999, padding: '2px 8px'
                            }}>Currently learning</span>
                          )}
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 3 }}>{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Skills(){
  const SkillBar = ({ name, level }) => {
    const [width, setWidth] = useState(0);
    const ref = React.useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setWidth(level); },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [level]);

    return (
      <div ref={ref} style={{ marginBottom: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ fontSize: 13 }}>{name}</span>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>{level}%</span>
        </div>
        <div style={{ background: 'rgba(128,128,128,0.2)', borderRadius: 9999, height: 6 }}>
          <div style={{
            width: `${width}%`,
            background: 'var(--accent, #6366f1)',
            height: 6,
            borderRadius: 9999,
            transition: 'width 1s ease'
          }} />
        </div>
      </div>
    );
  };

  const categories = [
    { title: "Languages",     data: skills.languages,     icon: "🧑‍💻" },
    { title: "Frameworks",    data: skills.frameworks,    icon: "⚙️" },
    { title: "Databases",     data: skills.databases,     icon: "🗄️" },
    { title: "Cybersecurity", data: skills.cybersecurity, icon: "🛡️" },
    { title: "Concepts",      data: skills.concepts,      icon: "💡" },
    { title: "Tools",         data: skills.tools,         icon: "🔧" },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}
          className="mb-6" style={{fontSize:28, fontWeight:700}}
        >
          Skills
        </motion.h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20
        }}>
          {categories.map(({ title, data, icon }) => (
            <motion.div
              key={title}
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}
              className="card"
            >
              <div className="card-inner">
                <h3 style={{ marginTop: 0, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span>{icon}</span> {title}
                </h3>
                {data.map(s => <SkillBar key={s.name} name={s.name} level={s.level} />)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }){
  return (
    <motion.article variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="card">
      <div className="project-thumb">
        <img src={p.image} alt={p.title} loading="lazy" decoding="async" />
      </div>
      <div className="card-inner">
        <h3 style={{margin:'4px 0 6px', fontWeight:700}}>{p.title}</h3>
        <p className="text-muted" style={{fontSize:14}}>{p.description}</p>
        <div style={{display:'flex', gap:8, flexWrap:'wrap', marginTop:10}}>
          {p.tags.map(t => <span key={t} className="pill">{t}</span>)}
        </div>
        <div style={{display:'flex', gap:12, marginTop:12}}>
          {p.link !== "#" && <a className="btn btn-ghost" href={p.link}>Live <ExternalLink size={16}/></a>}
          {p.repo !== "#" && <a className="btn btn-ghost" href={p.repo}>Repo <Github size={16}/></a>}
        </div>
      </div>
    </motion.article>
  );
}

function Projects(){
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="mb-6" style={{fontSize:28, fontWeight:700}}>Projects</motion.h2>
        <div className="grid-3">
          {projects.map(p => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function Experience(){
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="mb-6" style={{fontSize:28, fontWeight:700}}>Experience</motion.h2>
        <div style={{display:'grid', gap:16}}>
          {experience.map(e => (
            <motion.div key={e.role+e.org} variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="card">
              <div className="card-inner">
                <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', gap:12}}>
                  <div style={{display:'flex', gap:12, alignItems:'flex-start'}}>
                    {/* Company logo (if available) */}
                    {e.orgLogo ? (
                      <img
                        src={e.orgLogo}
                        alt={`${e.org} logo`}
                        style={{
                          width:40,
                          height:40,
                          borderRadius:8,
                          objectFit:'cover',
                          boxShadow:'0 6px 18px rgba(2,6,23,0.12)'
                        }}
                      />
                    ) : null}

                    <div>
                      <h3 style={{margin:0, fontWeight:700, display:'flex', alignItems:'center', gap:8}}>
                        {e.role}
                        <span style={{fontWeight:500, color:'var(--muted)', fontSize:13, marginLeft:8}}>· {e.org}</span>
                      </h3>
                      <div className="text-muted" style={{display:'flex', gap:16, fontSize:14, marginTop:6}}>
                        <span style={{display:'inline-flex', alignItems:'center', gap:6}}><Calendar size={16}/> {e.period}</span>
                        <span style={{display:'inline-flex', alignItems:'center', gap:6}}><MapPin size={16}/> {e.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul style={{marginTop:10, paddingLeft:18, color:'var(--muted)', fontSize:14}}>
                  {e.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education(){
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="mb-6" style={{fontSize:28, fontWeight:700}}>Education</motion.h2>
        <div style={{display:'grid', gap:16}}>
          {education.map(ed => (
            <motion.div key={ed.degree+ed.inst} variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="card">
              <div className="card-inner">
                <h3 style={{margin:'0 0 4px', fontWeight:700}}>{ed.degree}</h3>
                <div className="text-muted" style={{display:'flex', gap:16, fontSize:14}}>
                  <span>{ed.inst}</span>
                  <span>{ed.where}</span>
                  <span>{ed.when}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact(){
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="mb-6" style={{fontSize:28, fontWeight:700}}>Contact</motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="text-muted" style={{maxWidth:720}}>
          I’m open to full-time roles, internships, and collaborations. The fastest way to reach me is by email.
        </motion.p>
        <div className="mt-8" style={{display:'flex', gap:12, flexWrap:'wrap'}}>
          <a 
              className="icon-btn" 
              href={`https://mail.google.com/mail/?view=cm&to=${socials.email}`}
              target="_blank" 
              rel="noreferrer" 
              aria-label="Email"
            >
              <Mail size={18}/>
            </a>
          <a href={socials.linkedin} className="btn btn-ghost"><Linkedin size={18}/> Connect</a>
          <a href={socials.github} className="btn btn-ghost"><Github size={18}/> GitHub</a>
        </div>
      </div>
    </section>
  );
}

function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="footer">© {year} Tasfia Shobnom Anika. Built with React, Framer Motion & Recharts.</footer>
  );
}

export default function App(){
  const sections = useMemo(()=> [
    { id:"home", label:"Home" },
    { id:"about", label:"About" },
    { id:"skills", label:"Skills" },
    { id:"projects", label:"Projects" },
    { id:"experience", label:"Experience" },
    { id:"education", label:"Education" },
    { id:"contact", label:"Contact" },
  ], []);
  const active = useActiveSection(sections.map(s=> s.id));
  const [theme, setTheme] = useState("dark");

  useEffect(()=>{
    const root = document.documentElement;
    if(theme === "dark") root.classList.add("dark"); else root.classList.remove("dark");
  }, [theme]);

  return (
    <div>
      <Nav sections={sections} active={active} />
      <Hero theme={theme} setTheme={setTheme} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
