import React from 'react';
import Image from 'next/image';
export const metadata = {
  title: 'Mis servicios | Montserrat Arreola De la Mora',
};
const Servicios = () => {
  const firstContent = [
    'Atención personalizada en inglés de acuerdo a tus requerimientos y adapto mis métodos de enseñanza a lo que deseas lograr. ',
    'Me enfoco en las 4 competencias de inglés: Listening, speaking, reading y writing.',
    'Las clases son de manera virtual, donde quiera que te encuentres y pueden ser por google meet o acordar con el estudiante.',
    'Apoyo continuo: Estaré disponible para responder tus preguntas y brindarte apoyo adicional, incluso en el inglés de negocios.',
    'Lecciones estructuradas: Mis cursos están diseñados con una estructura clara y progresiva para facilitar tu aprendizaje. Cada lección aborda temas y conceptos clave, siguiendo una secuencia lógica que te permite construir tus habilidades en inglés de manera sólida y coherente.',
    'Ejercicios prácticos: A lo largo del curso y/o asesorías, encontrarás una amplia variedad de ejercicios diseñados para reforzar lo aprendido.',
    'Material multimedia: Para hacer el aprendizaje más interesante y atractivo, utilizo material multimedia en mis cursos en línea. Esto incluye audios, videos, ejemplos de conversaciones reales y otros recursos visuales que te ayudarán a desarrollar una comprensión más profunda del idioma y a familiarizarte con diferentes contextos de uso del inglés.',
  ];

  const secondContent = [
    {
      title: 'Recursos pedagógicos:',
      description:
        'En mis cursos y asesorías en pedagogía, proporciono una amplia gama de recursos y herramientas pedagógicas para enriquecer tus métodos de enseñanza. Estos recursos incluyen materiales didácticos, actividades interactivas, estrategias de enseñanza innovadoras y técnicas de evaluación efectivas.',
    },
    {
      title: 'Desarrollo de habilidades didácticas:',
      description:
        'Mi enfoque se centra en ayudarte a mejorar tus habilidades didácticas y pedagógicas. ',
    },
    {
      title: '',
      description:
        'A través de sesiones interactivas y materiales de capacitación, te proporcionaré las habilidades necesarias para planificar lecciones efectivas, adaptar tu enseñanza a diferentes estilos de aprendizaje y mantener un ambiente de aprendizaje estimulante y motivador.',
    },
    {
      title: 'Personalización y adaptabilidad:',
      description:
        'Reconozco que cada persona tiene necesidades y objetivos diferentes. Por lo tanto, mis cursos y asesorías en pedagogía se adaptarán a tus requerimientos específicos. Trabajaremos juntos para identificar tus áreas de mejora y desarrollar un plan de acción personalizado que se adapte a ti y obtener buenos resultados.',
    },
  ];

  return (
    <main className="pt-40">
      <div className=" m-auto mb-14 w-fit">
        <h2 className="text-3xl font-medium md:text-6xl">Mis servicios</h2>
        <div className="ml-auto h-1 w-1/2 rounded-full bg-my_blue md:h-2"></div>
      </div>

      <div className="m-auto w-[1200px] max-w-full px-8 ">
        <div className=" mb-24">
          <Image
            src="/like.png"
            alt=""
            width={150}
            height={150}
            className="m-auto"
          />
          <h3 className="my-8 text-center text-xl font-medium text-my_yellow md:text-3xl">
            Ventajas de tomar clases de inglés conmigo
          </h3>
          <ul className="space-y-4 text-justify">
            {' '}
            {firstContent.map((item, index) => {
              return (
                <li className="list-disc" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mb-24">
          <Image
            src="/advantage.png"
            alt=""
            width={150}
            height={150}
            className="m-auto"
          />
          <h3 className="my-8 text-center text-xl font-medium text-my_yellow md:text-3xl">
            Ventajas de tomar clases de inglés conmigo
          </h3>

          <div className="text-justify">
            <ul className="space-y-4">
              {secondContent.map((item, index) => {
                return (
                  <li key={index}>
                    {' '}
                    <span className="font-bold">{item.title}</span>{' '}
                    {item.description}{' '}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Servicios;
