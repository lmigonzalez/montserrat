import React from 'react';
import { Accordion } from 'flowbite-react';
import type {
  AccordionOptions,
  AccordionItem,
  AccordionInterface,
} from 'flowbite';
const Preguntas = () => {
  // options with default values
  const options: AccordionOptions = {
    alwaysOpen: true,
    activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    inactiveClasses: 'text-gray-500 dark:text-gray-400',
    onOpen: (item) => {
      console.log('accordion item has been shown');
      console.log(item);
    },
    onClose: (item) => {
      console.log('accordion item has been hidden');
      console.log(item);
    },
    onToggle: (item) => {
      console.log('accordion item has been toggled');
      console.log(item);
    },
  };

  return (
    <div className="max-w-full px-4 py-28">
      <div className=" m-auto mb-14 w-fit">
        <h2 className="text-3xl md:text-6xl font-medium">Preguntas frecuentes</h2>
        <div className="ml-auto h-1 md:h-2 w-1/2 rounded-full bg-my_blue"></div>
      </div>

      <div className="text-justify  w-[1200px] max-w-full">
        <h3 className="text-center text-xl md:text-3xl font-medium text-my_yellow mb-8">
        &quot;Encuentra respuestas a tus dudas&quot;
        </h3>
        <div
          tabIndex={0}
          className="collapse-arrow collapse rounded-none border-b-[1px] border-my_yellow bg-white"
        >
          <div className="collapse-title text-lg md:text-xl font-medium">
            ¿Cuál es el costo de las sesiones de asesoría virtual?
          </div>
          <div className="collapse-content">
            <p>
              Los costos de las sesiones de asesoría virtual pueden variar según
              la duración y la frecuencia de las mismas. Asimismo, los costos
              varían de acuerdo al tipo de curso que se desea. Cabe recalcar,
              que las asesorías y/o cursos van desde $150 a $2500 pesos
              mexicanos, respectivamente, para el área de inglés y dentro del
              ámbito pedagógico. Te invito a que me contactes para obtener más
              información y discutir tus necesidades específicas y precios.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse-arrow  collapse rounded-none   border-b-[1px] border-my_yellow bg-white"
        >
          <div className="collapse-title text-lg md:text-xl font-medium">
            ¿Qué método de pago aceptas para los cursos online?
          </div>
          <div className="collapse-content">
            <p>
              Se puede hacer por medio de depósitos y/o transferencias
              electrónicas a mi cuenta.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse-arrow  collapse rounded-none   border-b-[1px] border-my_yellow bg-white"
        >
          <div className="collapse-title text-lg md:text-xl font-medium">
            ¿Cómo puedo acceder al material de estudio y recursos del curso o
            asesoría de inglés?
          </div>
          <div className="collapse-content">
            <p>
              Yo te lo proporciono cuando estemos en las sesiones en vivo. Cabe
              mencionar, que las asesorías virtuales se dan en tiempo real. De
              igual manera, te daré recursos adicionales que puedes hacer en
              casa y por ende, yo los revisaré y te guiaré. Todo los materiales
              que te haré llegar a tu correo o que veamos en las sesiones
              respectivas, puedes quedarte con ellos y acceder a éstos últimos
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse-arrow  collapse rounded-none   border-b-[1px] border-my_yellow bg-white"
        >
          <div className="collapse-title text-lg md:text-xl font-medium">
            ¿Puedo combinar diferentes servicios, como asesoría virtual y cursos
            de regularización?
          </div>
          <div className="collapse-content">
            <p>
              ¡Por supuesto! Puedes combinar diferentes servicios según tus
              necesidades individuales. Si estás interesado/a en recibir
              asesoría virtual y tomar un curso de regularización, podemos
              adaptar un plan de estudio personalizado para ti. Simplemente
              contáctame para discutir tus objetivos y diseñar un plan que se
              ajuste a tus necesidades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preguntas;
