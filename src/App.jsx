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
    role: "Mentee, Womentor 6.0",
    org: "Banglalink",
    orgLogo: "/Bg.webp",     // <-- put logo file here
    period: "Dec 2024 – Jun 2025",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Completed mentorship on digital product workflows, stakeholder comms, and structured reporting.",
      "Mapped communication pipelines and produced concise leadership updates for mini-projects.",
    ],
  },
  {
    role: "Mathematics Teacher (SAT)",
    org: "College Mastermind",
    orgLogo: "/Ms.jpg", // <-- and here
    period: "Mar 2024 – Sep 2024",
    location: "Remote, USA",
    bullets: [
      "Raised average SAT Math scores by ~20% for 15+ students with targeted remediation plans.",
      "Authored 30+ practice sets; tracked weekly metrics to reduce repeated errors and time overruns.",
    ],
  },
];


const education = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
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
];

const skills = {
  languages: ["Python", "JavaScript", "Java", "C/C++", "C#", "PHP", "SQL", "HTML", "CSS"],
  frameworks: ["React", "Node.js", "Express", "Django", "Flask", "Material-UI", "OpenGL"],
  databases: ["MongoDB", "MySQL", "PostgreSQL"],
  concepts: ["OOP", "DSA", "REST APIs", "MVC", "Authentication", "RBAC", "Unit Testing", "Logistic Regression (NLP intent)"],
  tools: ["Git & GitHub", "Linux", "VS Code", "PyCharm", "Postman", "Excel/Word/PowerPoint"],
};

const skillData = [
  { month:"Jan", score:45 }, { month:"Mar", score:55 }, { month:"May", score:62 },
  { month:"Jul", score:70 }, { month:"Sep", score:78 }, { month:"Nov", score:85 }
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
            Computer Science graduate with a solid foundation in software engineering and AI/ML — experienced in
            building, testing, and deploying scalable applications and intelligent systems across full-stack and backend workflows.
            Focused on reliability, performance, security, and real-world impact.
          </p>
          <div style={{display:'flex',flexWrap:'wrap',gap:12,alignItems:'center'}}>
            <a href="#projects" className="btn btn-primary">View Projects <ArrowRight size={18}/></a>
            <a href="/Tasfia_Anika_Resume.pdf" className="btn btn-ghost"><Download size={18}/> Resume</a>
            <a className="icon-btn" href={socials.github} aria-label="GitHub"><Github size={18}/></a>
            <a className="icon-btn" href={socials.linkedin} aria-label="LinkedIn"><Linkedin size={18}/></a>
            <a className="icon-btn" href={`mailto:${socials.email}`} aria-label="Email"><Mail size={18}/></a>
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
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="text-muted">
            I build clean, maintainable software and data-driven features using Python, JavaScript, and modern web frameworks.
            I enjoy translating real requirements into robust systems, writing reliable tests, and collaborating with cross-functional teams.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}>
            <div className="card">
              <div className="card-inner">
                <h3 style={{margin:'0 0 12px', fontWeight:600}}>Learning Velocity (sample)</h3>
                <div style={{height:200}}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={skillData} margin={{top:8,right:8,left:0,bottom:0}}>
                      <CartesianGrid strokeOpacity={0.15} />
                      <XAxis dataKey="month" tickMargin={6} fontSize={12} />
                      <YAxis domain={[0,100]} tickMargin={6} fontSize={12} />
                      <Tooltip />
                      <Line type="monotone" dataKey="score" strokeWidth={3} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
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
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="mb-6" style={{fontSize:28, fontWeight:700}}>Skills</motion.h2>
        <div className="grid-2">
          <div className="card"><div className="card-inner">
            <h3 style={{marginTop:0}}>Languages</h3>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              {skills.languages.map(s => <span key={s} className="pill">{s}</span>)}
            </div>
            <h3 style={{marginTop:16}}>Frameworks</h3>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              {skills.frameworks.map(s => <span key={s} className="pill">{s}</span>)}
            </div>
          </div></div>
          <div className="card"><div className="card-inner">
            <h3 style={{marginTop:0}}>Databases</h3>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              {skills.databases.map(s => <span key={s} className="pill">{s}</span>)}
            </div>
            <h3 style={{marginTop:16}}>Concepts</h3>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              {skills.concepts.map(s => <span key={s} className="pill">{s}</span>)}
            </div>
            <h3 style={{marginTop:16}}>Tools</h3>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              {skills.tools.map(s => <span key={s} className="pill">{s}</span>)}
            </div>
          </div></div>
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
          <a href={`mailto:${socials.email}`} className="btn btn-primary"><Mail size={18}/> {socials.email}</a>
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
