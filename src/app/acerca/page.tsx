import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Acerca de mí | Montserrat Arreola De la Mora',
};

const Acerca = () => {
  return (
    <main className="pt-40">
      <div className=" m-auto mb-14 w-fit">
        <h2 className="text-3xl font-medium md:text-6xl">Acerca de mí</h2>
        <div className="ml-auto h-1 w-1/2 rounded-full bg-my_blue md:h-2"></div>
      </div>
      <Image
        src="/CON MIS ESTUDIANTES..jpg"
        alt=""
        width={920}
        height={480}
        className="m-auto mb-14"
      />

      <div className="m-auto mb-8 w-[1200px] max-w-full space-y-4 px-4 text-justify">
        <p>
          ¡Hola! Mi nombre es Montserrat Arreola De la Mora y soy una apasionada
          profesora con amplia experiencia en la enseñanza educativa. Soy
          Licenciada en Comercio Internacional con cédula profesional No.
          7819464. Terminé mi maestría en Educación. Asimismo, cuento con un
          Diplomado en Docencia de Inglés (Teacher’s Diploma Course) y estoy
          estudiando la Licenciatura en Pedagogía por la Universidad Virtual del
          Estado de Guanajuato, el cual me falta poco tiempo de terminarla.
        </p>
        <p>
          También cuento con diversos cursos en el ámbito educativo y con un
          certificado de lectura y comprensión de textos en inglés (competencia
          lectora equivalente a un nivel B1 del MCER), expedida por la
          Universidad Autónoma del Estado de México.
        </p>
        <p>
          En lo personal, siempre me ha gustado mucho el brindar mis
          conocimientos a los estudiantes y en encaminarlos o guiarlos al
          desarrollo de sus habilidades y capacidades. Asimismo, me gusta
          transformar vidas y en comprometerme a ayudar a las personas en la
          enseñanza del inglés y en los aspectos pedagógicos que han tenido en
          los contextos donde se desenvuelven.
        </p>
        <p>
          Me encanta hacer una diferencia en el ámbito educativo y dejarles una
          huella profunda a cada persona que se convierte en mi estudiante y que
          sé que les ayudará en un futuro.
        </p>
      </div>

      <div className="mb-24 flex justify-center">
        <Link href="/contact" className="flex gap-2 text-2xl text-my_blue">
          Hablemos
          <Image src="/right-arrow (3).png" alt="" width={25} height={25} />
        </Link>
      </div>
    </main>
  );
};

export default Acerca;
