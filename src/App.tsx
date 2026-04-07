import profileImg from "./assets/profile.jpg";
export default function PortfolioSite() {
  const skills = [
    "Customer Service",
    "Basic IT Support",
    "Microsoft Office",
    "Communication",
    "Problem Solving",
    "Fast Learning",
    "Teamwork",
  ];

  const experiences = [
    {
      role: "Kitchen Hand",
      company: "Alcove Cafe",
      period: "Current",
      description:
        "Support daily kitchen operations in a fast-paced café environment, assisting with food preparation, plating, organization, and team coordination.",
    },
    {
      role: "Technology Student / Career Transition",
      company: "Information Systems Background",
      period: "Ongoing",
      description:
        "Building a practical and strong foundation in IT, networking, Linux, cybersecurity tools and in programming languages such as Python, C++, JavaScript and SQL.",
    },
  ];

  const projects = [
    {
      title: "Cybersecurity Learning Journey",
      description:
        "I'm currently studying Networking fundaments and analysis with Wireshark, Nmap scanning experiments, Cybersecurity labs and Linux command practice. Keen to get my first certificates (Google Cybersecurity, Cisco CCST, Security+). ",
      emoji: "🛡️",
    },
    {
      title: "Professional Growth",
      description:
        "Focused on starting my cybersecurity career, looking for a opportunity into IT support, technical admnistrative, networking roles with a long term development mindset.",
      emoji: "💼",
    },
    {
      title: "Academic Background",
      description:
        "Bachelor's degree in Information Systems, with knowledge in networking, data analysis, Python, Java, Javascript, C++, C, TypeScript, HTML, CSS, systems and quality assurance.",
      emoji: "🎓",
    },
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: Inter, Arial, sans-serif;
          background: linear-gradient(180deg, #07111f 0%, #0b1324 100%);
          color: #f8fafc;
        }
        a { text-decoration: none; }
        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(34,211,238,0.18), transparent 28%),
            radial-gradient(circle at 85% 20%, rgba(59,130,246,0.18), transparent 22%),
            radial-gradient(circle at 30% 90%, rgba(168,85,247,0.12), transparent 20%);
        }
        .container {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
        }
        .brand {
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #67e8f9;
        }
        .nav-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .nav-links a {
          color: #cbd5e1;
          font-size: 14px;
        }
        .hero {
          display: grid;
          grid-template-columns: 1.35fr 0.9fr;
          gap: 28px;
          align-items: center;
          padding: 24px 0 72px;
        }
        .card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 28px;
          backdrop-filter: blur(12px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.25);
        }
        .hero-main {
          padding: 44px;
          animation: fadeUp 0.9s ease;
        }
        .badge {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(34,211,238,0.12);
          border: 1px solid rgba(34,211,238,0.24);
          color: #67e8f9;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        h1 {
          font-size: clamp(38px, 6vw, 64px);
          line-height: 1.02;
          margin: 0;
        }
        .lead {
          margin-top: 18px;
          font-size: 18px;
          line-height: 1.8;
          color: #cbd5e1;
          max-width: 720px;
        }
        .buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }
        .btn-primary, .btn-secondary {
          padding: 14px 20px;
          border-radius: 18px;
          font-weight: 700;
          font-size: 14px;
          transition: 0.2s ease;
        }
        .btn-primary {
          background: #67e8f9;
          color: #082032;
        }
        .btn-secondary {
          border: 1px solid rgba(255,255,255,0.12);
          color: white;
          background: rgba(255,255,255,0.03);
        }
        .btn-primary:hover, .btn-secondary:hover, .project:hover, .timeline-item:hover {
          transform: translateY(-3px);
        }
        .side {
          padding: 28px;
          animation: fadeUp 1s ease;
        }
        .avatar {
          width: 72px;
          height: 72px;
          border-radius: 22px;
          display: grid;
          place-items: center;
          font-weight: 800;
          font-size: 24px;
          color: #082032;
          background: linear-gradient(135deg, #67e8f9, #60a5fa);
          margin-bottom: 18px;
        }
        .side h3 {
          margin: 0 0 6px;
          font-size: 22px;
        }
        .muted { color: #94a3b8; }
        .info-list {
          margin-top: 22px;
          display: grid;
          gap: 14px;
          color: #dbeafe;
          line-height: 1.6;
        }
        section.section {
          padding: 18px 0 26px;
        }
        .section-title {
          font-size: 32px;
          margin: 0 0 22px;
        }
        .grid-2, .grid-3, .grid-4 {
          display: grid;
          gap: 22px;
        }
        .grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .grid-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        .content-card {
          padding: 30px;
          animation: fadeUp 0.8s ease;
        }
        .content-card p {
          color: #cbd5e1;
          line-height: 1.8;
        }
        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }
        .skill {
          background: rgba(15,23,42,0.92);
          border: 1px solid rgba(103,232,249,0.12);
          color: #e2e8f0;
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 14px;
        }
        .timeline-item, .project, .contact-box {
          padding: 28px;
          transition: 0.25s ease;
        }
        .item-top {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        .period {
          color: #67e8f9;
          font-size: 14px;
          font-weight: 700;
        }
        .project-emoji {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          background: rgba(34,211,238,0.12);
          font-size: 26px;
          margin-bottom: 16px;
        }
        .contact-wrap {
          background: linear-gradient(135deg, rgba(15,23,42,0.92), rgba(30,41,59,0.92));
          padding: 32px;
        }
        
        .contact-box p:first-child {
          color: #94a3b8;
          font-size: 14px;
          margin: 0 0 8px;
        }
        .contact-box p:last-child {
          margin: 0;
          font-weight: 600;
          word-break: break-word;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .hero, .grid-2, .grid-3, .grid-4 {
            grid-template-columns: 1fr;
          }
          .hero-main, .side, .content-card, .project, .timeline-item, .contact-box, .contact-wrap {
            padding: 22px;
          }
          .nav {
            gap: 16px;
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>

      <div className="page">
        <div className="container">
          <nav className="nav">
            <div className="brand"></div>
            <div className="nav-links">
              <a href="#about">About Me</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <section className="hero">
            <div className="card hero-main">
              <div className="badge">Portfolio / Resume</div>
              <h1>Guilherme Araujo</h1>
              <p className="lead">
                Professional with experience in fast-paced work environments and a growing background in IT, technical support, and cybersecurity fundamentals.
              </p>
              <div className="buttons">
                <a className="btn-primary" href="#contact">Contact Me</a>
                <a className="btn-secondary" href="#experience">View Experience</a>
              </div>
            </div>

            <div className="card side">
              <div className="avatar"><img src={profileImg} alt="Profile" className="avatar" /></div>
              <h3>Profile Summary</h3>
              <div className="muted">Open to new opportunities</div>
              <div className="info-list">
                <div>📍 Brisbane, Australia</div>
                <div>💼 Interested in IT Support, Cybersecurity, and Administrative Roles</div>
                <div>🎓 Background in Information Systems</div>
                <div>✉️ guilhermearaujove69@gmail.com</div>
              </div>
            </div>
          </section>

          <section className="section" id="about">
            <div className="grid-2">
              <div className="card content-card">
                <h2 className="section-title">About Me</h2>
                <p>
                  My name is Guilherme, I'm from Brazil and currently living in Brisbane, Australia. I decided to leave my country looking for new opportunities, focusing to improve my professional and personal life.
                </p>
              </div>

              <div className="card content-card">
                <h2 className="section-title">Core Skills</h2>
                <div className="skills">
                  {skills.map((skill) => (
                    <span key={skill} className="skill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="experience">
            <h2 className="section-title">Experience</h2>
            <div className="grid-2">
              {experiences.map((item) => (
                <div key={item.role + item.company} className="card timeline-item">
                  <div className="item-top">
                    <div>
                      <h3 style={{ margin: 0, fontSize: 22 }}>{item.role}</h3>
                      <p className="muted" style={{ marginTop: 6 }}>{item.company}</p>
                    </div>
                    <span className="period">{item.period}</span>
                  </div>
                  <p style={{ color: '#cbd5e1', lineHeight: 1.8, marginTop: 18 }}>{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section" id="projects">
            <h2 className="section-title">Projects & Goals</h2>
            <div className="grid-3">
              {projects.map((project) => (
                <div key={project.title} className="card project">
                  <div className="project-emoji">{project.emoji}</div>
                  <h3 style={{ margin: 0, fontSize: 22 }}>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section" id="contact" style={{ paddingBottom: 60 }}>
            <div className="card contact-wrap">
              <h2 className="section-title">Contact</h2>
              <p className="lead" style={{ marginTop: 0, maxWidth: 760 }}>

              </p>
              <div className="grid-4">
                <div className="card contact-box">
                  <p>📧 Email</p>
                  <a href="mailto:guilhermearaujove69@gmail.com">Send Email</a>
                </div>
                <div className="card contact-box">
                  <p>💼 LinkedIn</p>
                  <a href="https://linkedin.com/in/guilherme-araujo-sec/" target="_blank" rel="noopener noreferrer">
                    View LinkedIn Profile
                  </a>
                </div>
                <div className="card contact-box">
                  <p>💻 GitHub</p>
                  <a href="https://github.com/GuilhermeArauujo" target="_blank" rel="noopener noreferrer">
                    View GitHub Profile
                  </a>  
                </div>
                <div className="card contact-box">
                  <p>📍 Location</p>
                  <p>Brisbane, Australia</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
