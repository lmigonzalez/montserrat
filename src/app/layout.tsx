import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Montserrat Arreola De la Mora',
  description:
    'Experta profesora de inglés ofrece cursos interactivos en línea para niveles básico e intermedio. También brindo asesoría especializada en inglés de negocios. Mis servicios están diseñados para jóvenes, niños y adultos que deseen mejorar sus habilidades lingüísticas y alcanzar sus metas en el dominio del inglés. ¡Descubre cómo puedo ayudarte a alcanzar la fluidez y la confianza en el idioma inglés!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="relative bg-white text-base text-my_light_black md:text-lg"
    >
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
