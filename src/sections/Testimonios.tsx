import React from 'react';
import Image from 'next/image';
const Testimonios = () => {
  const data = [
    {
      name: 'Andrea',
      description:
        'Con mi profesora Montserrat, pude mejorar mi gramática en el idioma inglés; así como hablar más fluidamente. Sus clases son dinámicas y me brinda recursos que me ayudan en mi formación. Si tengo dudas me las explica. La recomiendo.',
    },
    {
      name: 'Jorge',
      description:
        'Las asesorías virtuales con Montserrat fueron excelentes. Pude recibir una atención personalizada y utilizó corrientes y métodos pedagógicos adecuados a lo que le pedí. Su paciencia y disposición para adaptarse a mi ritmo de aprendizaje fueron fundamentales para mi progreso. ¡Estoy muy agradecido!',
    },
    {
      name: 'Diana',
      description:
        'Estoy satisfecha con los ejercicios y la dinámica que me brindó la profesora Montserrat. De igual manera, me evaluó y detectó las debilidades que tenía, tanto en el idioma inglés y dentro del ámbito pedagógico. Lo que aprendí, lo he aplicado en mis estudios y me ayudó bastante.',
    },
  ];
  return (
    <div className="max-w-full px-4 py-28">
      <div className=" m-auto mb-14 w-fit">
        <h2 className="text-3xl md:text-6xl font-medium">Testimonios</h2>
        <div className="ml-auto h-1 md:h-2 w-1/2 rounded-full bg-my_blue"></div>
      </div>

      <div className="w-[1200px] max-w-full">
        <h3 className="mb-8 text-center text-xl md:text-3xl font-medium text-my_yellow">
        &quot;Historias de éxito de mis estudiantes satisfechos&quot;
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {' '}
          {data.map((item, index) => {
            return (
              <div key={index} className="bg-my_blue px-4 py-8 text-center text-white">
                <h4 className="font-medium">{item.name}</h4>
                <div className="mb-4 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="">
                      <Image src="/star.png" alt="" width={25} height={25} />
                    </div>
                  ))}
                </div>
                <p className="text-base font-light">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
