import type { AboutContent } from ".";

const content: AboutContent = {
  hero: {
    title: "Who I am",
  },
  atWork: {
    title: "At TEST",
    sections: [
      "En mis 7 años como diseñador de producto, he formado parte de entornos muy distintos — desde ser el único diseñador en la sala hasta colaborar con un equipo de más de 20 personas.",
      "He trabajado con procesos de aprobación estructurados y lanzamientos trimestrales, y también en equipos donde se publicaba a producción cada semana.",
      "Estos contrastes me enseñaron a adaptarme rápido, hacer las preguntas correctas y enfocarme en lo que realmente importa: crear cosas que ayuden a las personas.",
    ],
  },
  quotes: {
    quote:
      "Working with him was like pairing with a Swiss Army knife — sharp, adaptable, and somehow always calm under pressure",
    person: "- Jordan Easterling, CEO at Building Swell",
  },
  inLife: {
    title: "En la vida",
    sections: [
      "Me gusta hacer bromas para hacer reír a los demás. Para mí, un buen fin de semana es jugar videojuegos con mi novia mientras mi perro disfruta de un buen hueso.",
      "También me gusta el fútbol, los viajes con amigos, y hace poco empecé a practicar Muay Thai — hasta ahora, va bastante bien.",
    ],
  },
  experience: {
    sections: [
      {
        title: "Experiencia",
        items: [
          {
            title: "Building Swell - Product Designer",
            date: "2022 - Presente  |  Estados Unidos (remoto)",
            description:
              "Único diseñador en un equipo ágil y enfocado en los usuarios, conformado por 9 personas. Construí el sistema de diseño desde cero y lideré la creación de productos completamente nuevos, aprendiendo e iterando rápidamente en el camino. El objetivo: hacerle la vida más fácil a las plantas de prefabricados.",
          },
          {
            title: "Scotiabank Peru — Product Designer",
            date: "2019 - 2022  |  Perú",
            description:
              "Formé parte de un equipo multidisciplinario de más de 20 diseñadores, investigadores y diseñadores de servicios en un banco que atiende a más de 1.3 millones de clientes en Perú. Mi enfoque estuvo en digitalizar servicios que antes solo estaban disponibles en agencias — incluyendo áreas clave como inversiones, transferencias internacionales y la reprogramación de créditos durante la pandemia.",
          },
          {
            title: "Glass Design — Product Designer",
            date: "2018 - 2019  |  Perú",
            description:
              "Diseñador de producto outsourced para Scotiabank Perú, el único cliente para el que trabajé durante mi tiempo en Glass Design. Después de seis meses, fui contratado directamente por Scotiabank.",
          },
          {
            title: "Urbaner — UX Designer",
            date: "2018  |  Perú",
            description:
              "Único diseñador. Enfocado en mejoras constantes para web y app.",
          },
        ],
      },
      {
        title: "Educación",
        items: [
          {
            title: "Universidad de San Martín de Porres",
            date: "2016  |  Perú",
            description: "Licenciatura en Ciencias de la Comunicación.",
          },
        ],
      },
    ],
  },
};

export default content;
