// ============================================================
//  EDITA AQUÍ TODA TU INFORMACIÓN
//  Cambia los textos entre comillas por tus datos reales.
// ============================================================

export const perfil = {
  nombre: "Sergio Bland",
  titulo: "Desarrollador de Software",
  // Una frase corta que te describa (aparece debajo de tu nombre)
  resumen:
    "Programador full-stack apasionado por construir aplicaciones web y herramientas con IA. Experiencia con Next.js, Python y C#.",
  ubicacion: "Puerto peñasco, Mexico",
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
    nombre: "StoreApp — Tienda Online",
    descripcion:
      "Tienda online full-stack con pasarela de pagos real (Stripe), autenticación con JWT, panel de productos, subida de imágenes y envío de correos. Backend en Express + PostgreSQL con medidas de seguridad (Helmet, rate limiting y validación con Zod).",
    tecnologias: ["React", "Express", "PostgreSQL", "Stripe", "JWT", "Vite"],
    repo: "https://github.com/appstoreway301/StoreApp",
    demo: "",
    imagen: "/storeapp.png",
    destacado: true,
  },
  {
    nombre: "ClassBland",
    descripcion:
      "Plataforma de gestión escolar en tiempo real con autenticación, roles de usuario y comunicación en vivo. Incluye panel de administración, base de datos con Prisma y notificaciones por WebSockets.",
    tecnologias: ["Next.js", "TypeScript", "Prisma", "WebSockets", "Tailwind"],
    repo: "https://github.com/appstoreway301/classbland",
    demo: "", // link a la demo en vivo si la tienes
    imagen: "/classbland.svg",
    destacado: true,
  },
  {
    nombre: "ChatBot con IA",
    descripcion:
      "Asistente conversacional para Facebook Messenger (Meta API) con IA local (Ollama + Qwen 2.5). Reconoce imágenes por visión, detecta intervención humana y gestiona catálogo de productos con persistencia en SQLite.",
    tecnologias: ["Python", "Ollama", "Meta API", "Visión IA", "SQLite"],
    repo: "https://github.com/appstoreway301/chatbot-ia",
    demo: "",
    imagen: "/chatbot.svg",
    destacado: true,
  },
];
