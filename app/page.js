import { perfil, habilidades, proyectos } from "../data/config";

export default function Home() {
  return (
    <>
      {/* ---------- NAV ---------- */}
      <nav className="nav">
        <div className="container nav-inner">
          <span className="nav-brand">{perfil.nombre}</span>
          <div className="nav-links">
            <a href="#proyectos">Proyectos</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>

      {/* ---------- HERO ---------- */}
      <header className="hero">
        <div className="container">
          <h1>
            Hola, soy {perfil.nombre}
            <br />
            <span className="role">{perfil.titulo}</span>
          </h1>
          <p>{perfil.resumen}</p>
          <div className="meta">📍 {perfil.ubicacion}</div>
          <div className="actions">
            <a className="btn btn-primary" href="#proyectos">
              Ver proyectos
            </a>
            {perfil.github && (
              <a className="btn btn-ghost" href={perfil.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {perfil.linkedin && (
              <a className="btn btn-ghost" href={perfil.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
            {perfil.cv && (
              <a className="btn btn-ghost" href={perfil.cv} target="_blank" rel="noopener noreferrer">
                Descargar CV
              </a>
            )}
          </div>
        </div>
      </header>

      {/* ---------- PROYECTOS ---------- */}
      <section id="proyectos">
        <div className="container">
          <h2 className="section-title">Proyectos</h2>
          <div className="projects-grid">
            {proyectos.map((p) => (
              <article className="project-card" key={p.nombre}>
                {p.imagen ? (
                  <img className="thumb" src={p.imagen} alt={p.nombre} />
                ) : (
                  <div className="thumb">{p.nombre.charAt(0)}</div>
                )}
                <h3>{p.nombre}</h3>
                <p>{p.descripcion}</p>
                <div className="project-tags">
                  {p.tecnologias.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer">
                      Código →
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      Demo en vivo →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HABILIDADES ---------- */}
      <section id="habilidades">
        <div className="container">
          <h2 className="section-title">Habilidades</h2>
          <div className="skills-grid">
            {habilidades.map((grupo) => (
              <div className="skill-card" key={grupo.categoria}>
                <h3>{grupo.categoria}</h3>
                <div className="tags">
                  {grupo.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CONTACTO ---------- */}
      <section id="contacto" className="contact">
        <div className="container">
          <h2>¿Trabajamos juntos?</h2>
          <p>Estoy disponible para nuevas oportunidades. ¡Hablemos!</p>
          <div className="actions" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary" href={`mailto:${perfil.email}`}>
              {perfil.email}
            </a>
            {perfil.linkedin && (
              <a className="btn btn-ghost" href={perfil.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          © {perfil.nombre} — Hecho con Next.js
        </div>
      </footer>
    </>
  );
}
