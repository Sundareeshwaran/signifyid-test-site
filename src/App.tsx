import { ProtectedRoute, useSignifyAuth } from "signifyid-client";

const App = () => {
  const { isAuthenticated, logout } = useSignifyAuth();
  return (
    <ProtectedRoute>
      <div className="app">
        <header className="header">
          <div className="container">
            <h1 className="logo">Portfolio</h1>
            <nav>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
              {isAuthenticated && (
                <button onClick={logout} className="logout-button">
                  Logout
                </button>
              )}
            </nav>
          </div>
        </header>

        <section id="about" className="hero">
          <div className="container">
            <h1 className="hero-title">Hi, I'm Sanjay!</h1>
            <p className="hero-subtitle">Full Stack Developer</p>
            <p className="hero-description">
              I create beautiful, functional websites and applications.
              Passionate about clean code and exceptional user experiences.
            </p>
            <a href="#contact" className="cta-button">
              Get In Touch
            </a>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>Project One</h3>
                <p>A full-stack web application built with React and Node.js</p>
                <div className="tech-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
              <div className="project-card">
                <h3>Project Two</h3>
                <p>E-commerce platform with payment integration</p>
                <div className="tech-tags">
                  <span>TypeScript</span>
                  <span>Express</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
              <div className="project-card">
                <h3>Project Three</h3>
                <p>Mobile-responsive portfolio website</p>
                <div className="tech-tags">
                  <span>React</span>
                  <span>CSS</span>
                  <span>Vite</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>React / TypeScript</li>
                  <li>HTML5 / CSS3</li>
                  <li>Responsive Design</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js / Express</li>
                  <li>REST APIs</li>
                  <li>Database Design</li>
                  <li>Authentication</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools</h3>
                <ul>
                  <li>Git / GitHub</li>
                  <li>VS Code</li>
                  <li>Docker</li>
                  <li>Vite / Webpack</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-description">
              I'm always open to discussing new projects and opportunities.
            </p>
            <div className="contact-links">
              <a href="mailto:your.email@example.com" className="contact-link">
                📧 Email
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                🔗 GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2025 Your Name. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ProtectedRoute>
  );
};

export default App;
