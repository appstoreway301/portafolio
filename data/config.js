// ============================================================
//  EDITA AQUÍ TODA TU INFORMACIÓN
//  Cambia los textos entre comillas por tus datos reales.
// ============================================================

export const perfil = {
  nombre: "Tu Nombre",
  titulo: "Desarrollador de Software",
  // Una frase corta que te describa (aparece debajo de tu nombre)
  resumen:
    "Programador full-stack apasionado por construir aplicaciones web y herramientas con IA. Experiencia con Next.js, Python y C#.",
  ubicacion: "Tu ciudad, País",
  email: "appstoreway301@gmail.com",
  // Deja vacío "" cualquier link que no uses
  github: "https://github.com/appstoreway301",
  linkedin: "https://www.linkedin.com/in/sergio-bland-a40a12303",
  // Ruta a tu CV en PDF (ponlo en la carpeta /public). Deja "" si aún no tienes.
  cv: "",
};

// Tus habilidades técnicas, agrupadas por categoría
export const habilidades = [
  {
    categoria: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    categoria: "Backend",
    items: ["Node.js", "Python", "C#", "Prisma", "REST APIs", "WebSockets"],
  },
  {
    categoria: "Bases de datos",
    items: ["PostgreSQL", "SQLite", "MySQL"],
  },
  {
    categoria: "Herramientas",
    items: ["Git", "GitHub", "Docker", "Vercel"],
  },
];

// Tus proyectos. Añade o quita los que quieras.
// Pon una imagen en /public (ej: /classbland.png) y referénciala en "imagen".
export const proyectos = [
  {
    nombre: "ClassBland",
    descripcion:
      "Plataforma de gestión escolar en tiempo real con autenticación, roles de usuario y comunicación en vivo. Incluye panel de administración, base de datos con Prisma y notificaciones por WebSockets.",
    tecnologias: ["Next.js", "TypeScript", "Prisma", "WebSockets", "Tailwind"],
    repo: "https://github.com/appstoreway301/classbland",
    demo: "", // link a la demo en vivo si la tienes
    imagen: "", // ej: "/classbland.png"
    destacado: true,
  },
  {
    nombre: "ChatBot con IA",
    descripcion:
      "Asistente conversacional integrado con WhatsApp (Meta API) y modelos de lenguaje locales (Ollama). Gestiona conversaciones, catálogo de productos y persistencia en SQLite.",
    tecnologias: ["Python", "Ollama", "Meta API", "SQLite"],
    repo: "https://github.com/appstoreway301/chatbot-ia",
    demo: "",
    imagen: "",
    destacado: true,
  },
  {
    nombre: "Proyecto en C#",
    descripcion:
      "Describe aquí tu aplicación de escritorio o backend en C#. Explica qué problema resuelve y qué tecnologías usaste.",
    tecnologias: ["C#", ".NET"],
    repo: "https://github.com/appstoreway301/proyecto-csharp",
    demo: "",
    imagen: "",
    destacado: false,
  },
];
