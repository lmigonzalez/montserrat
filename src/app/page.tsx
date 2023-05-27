'use client'
import Image from 'next/image';
import Head from 'next/head';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import Experiencia from '@/sections/Experiencia';
import Preguntas from '@/sections/Preguntas';
import Testimonios from '@/sections/Testimonios';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Montserrat Arreola De la Mora</title>

        <meta
          name="description"
          content="Experta profesora de inglés ofrece cursos interactivos en línea para niveles básico e intermedio. También brindo asesoría especializada en inglés de negocios. Mis servicios están diseñados para jóvenes, niños y adultos que deseen mejorar sus habilidades lingüísticas y alcanzar sus metas en el dominio del inglés. ¡Descubre cómo puedo ayudarte a alcanzar la fluidez y la confianza en el idioma inglés!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex min-h-screen max-w-full flex-col items-center justify-between ">
        <Hero />
        <Services />
        <Experiencia />
        <Preguntas />
        <Testimonios />
      </main>
    </>
  );
}
