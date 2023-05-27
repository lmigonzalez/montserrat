import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Services = () => {
  const services = [
    {
      image: '/videoconference.png',
      title: 'Tutoría virtual personalizada:',
      description:
        'Ofrezco asesoría individualizada y personalizada a través de sesiones virtuales, adaptadas a las necesidades específicas de cada estudiante. Ya sea que necesites ayuda con la gramática, la pronunciación o la comprensión oral. Asimismo, te brindaré el apoyo necesario para mejorar tus habilidades en inglés.',
    },
    {
      image: '/eng.png',
      title: 'Cursos interactivos de inglés básico e intermedio en línea:',
      description:
        'Mis cursos en línea te permitirán aprender inglés de forma interactiva y dinámica, desde la comodidad de tu hogar. A través de lecciones estructuradas, ejercicios prácticos y material multimedia, te ayudaré a desarrollar las habilidades fundamentales del idioma, como la escritura, la lectura, la comprensión y la comunicación oral.',
    },
    {
      image: '/dictionary.png',
      title: 'Regularización para alumnos con dificultades en inglés:',
      description:
        'Si estás lidiando con dificultades en la materia de inglés y te encuentras en riesgo de reprobar o llevas una calificación baja, te ofrezco un curso o asesoría de regularización, donde identificaré y trabajaré en tus áreas débiles y específicas por medio de métodos pedagógicos acordes a tus necesidades y trabajaremos juntos para mejorar tus conocimientos y competencias en inglés.',
    },
    {
      image: '/eng (1).png',
      title: 'Asesoría para inglés de negocios: ',
      description:
        'Te auxiliaré en brindarte las herramientas necesarias para la ortografía y gramática de un inglés más técnico. Nos enfocaremos en las reglas y estructuras a seguir; así como un vocabulario a emplear.',
    },
    {
      image: '/teach.png',
      title:
        'Asesoría o cursos de inglés, dirigidos a jóvenes, niños y/o adultos:',
      description:
        'Te ayudaré a hacer una evaluación sistemática, en base a lo que requieras y trabajaremos en ello para lograr el objetivo que deseas alcanzar en inglés.',
    },
    {
      image: '/classroom.png',
      title:
        'Cursos y asesorías en el ámbito de la pedagogía dirigidos a niños, jóvenes, adultos, padres de familia, estudiantes, profesores y toda persona que lo requiera:',
      description:
        'Además de mis servicios de enseñanza del idioma inglés, también ofrezco cursos y asesorías en el ámbito de la pedagogía.',
    },
    {
      image: '/elearning.png',
      title:
        'Cursos y asesorías motivacionales basados en el ámbito de la pedagogía dirigidos a niños, jóvenes, padres de familia, adultos, estudiantes, profesores o toda persona que lo requiera:',
      description:
        'Puedo emplear corrientes pedagógicas en base a tus necesidades para ayudarte a desenvolverte de mejor manera en todos los ámbitos que lo requieras (laboral, dentro del hogar, etc). Por ejemplo, si eres una persona que te estresas demasiado, nervioso o nerviosa, o que quieres mejorar en lo didáctico, te ayudaré; siempre enfocado al ámbito pedagógico.',
    },
  ];

  return (
    <div className="max-w-full px-4 py-28">
      <div className=" m-auto mb-14 w-fit">
        <h2 className="text-4xl font-medium md:text-7xl">Services</h2>
        <div className="ml-auto h-1 w-1/2 rounded-full bg-my_blue md:h-2"></div>
      </div>

      <div className="m-auto w-[1200px] max-w-full space-y-12">
        {services.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center space-x-0 space-y-4 md:flex-row  md:space-x-10  md:space-y-0 "
            >
              <Image src={item.image} alt="" width={150} height={150} />
              <p className="text-justify ">
                <span className="font-bold">{item.title}</span>{' '}
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-16 flex justify-center">
        <Link href="/servicios" className="flex gap-2 text-2xl text-my_blue">
          Aprende más{' '}
          <Image src="/right-arrow (3).png" alt="" width={25} height={25} />{' '}
        </Link>
      </div>
    </div>
  );
};

export default Services;
