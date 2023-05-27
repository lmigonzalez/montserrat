'use client';
import React, { useState } from 'react';
import Image from 'next/image';
const Preguntas = () => {
  const FAQ = [
    {
      id: 1,
      question: '¿Cuál es el costo de las sesiones de asesoría virtual?',
      description:
        'Los costos de las sesiones de asesoría virtual pueden variar según la duración y la frecuencia de las mismas. Asimismo, los costos varían de acuerdo al tipo de curso que se desea. Cabe recalcar, que las asesorías y/o cursos van desde $150 a $2500 pesos mexicanos, respectivamente, para el área de inglés y dentro del ámbito pedagógico. Te invito a que me contactes para obtener más información y discutir tus necesidades específicas y precios.',
      active: false,
    },
    {
      id: 2,
      question: '¿Qué método de pago aceptas para los cursos online?',
      description:
        'Se puede hacer por medio de depósitos y/o transferencias electrónicas a mi cuenta.',
      active: false,
    },
    {
      id: 3,
      question:
        '¿Cómo puedo acceder al material de estudio y recursos del curso o asesoría de inglés?',
      description:
        'Yo te lo proporciono cuando estemos en las sesiones en vivo. Cabe mencionar, que las asesorías virtuales se dan en tiempo real. De igual manera, te daré recursos adicionales que puedes hacer en casa y por ende, yo los revisaré y te guiaré. Todo los materiales que te haré llegar a tu correo o que veamos en las sesiones respectivas, puedes quedarte con ellos y acceder a éstos últimos.',
      active: false,
    },
    {
      id: 4,
      question:
        '¿Puedo combinar diferentes servicios, como asesoría virtual y cursos de regularización?',
      description:
        '¡Por supuesto! Puedes combinar diferentes servicios según tus necesidades individuales. Si estás interesado/a en recibir asesoría virtual y tomar un curso de regularización, podemos adaptar un plan de estudio personalizado para ti. Simplemente contáctame para discutir tus objetivos y diseñar un plan que se ajuste a tus necesidades.',
      active: false,
    },
  ];

  const [questions, setQuestions] = useState(FAQ);

  function handleAnswer(id: number) {

    setQuestions((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, active: !item.active };
        }
        return item;
      })
    );
  }

  return (
    <div className="max-w-full px-4 py-28">
      <div className=" m-auto mb-14 w-fit">
        <h2 className="text-3xl font-medium md:text-6xl">
          Preguntas frecuentes
        </h2>
        <div className="ml-auto h-1 w-1/2 rounded-full bg-my_blue md:h-2"></div>
      </div>

      <div className="w-[1200px]  max-w-full text-justify">
        <h3 className="mb-8 text-center text-xl font-medium text-my_yellow md:text-3xl">
          &quot;Encuentra respuestas a tus dudas&quot;
        </h3>
        <ul className="space-y-4">
          {questions.map((item, index) => {
            return (
              <li
                className="border-b-[2px] border-my_yellow pb-4 cursor-pointer"
                key={index}
                onClick={() => handleAnswer(item.id)}
              >
                <div className="flex justify-between ">
                  <h4 className='font-medium text-lg'>{item.question}</h4>
                  <Image
                    src="/right-arrow.png"
                    alt="arrow icon"
                    width={20}
                    height={20}
                    className="rotate-90"
                  />
                </div>
                {item.active && <p className='mt-4'>{item.description}</p>}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Preguntas;
