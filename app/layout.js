import "./globals.css";
import { perfil } from "../data/config";

export const metadata = {
  title: `${perfil.nombre} — ${perfil.titulo}`,
  description: perfil.resumen,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
