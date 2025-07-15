import type { LandingContent } from ".";

import weldingImage from "/images/welding.png";
import deliveryImage from "/images/delivery.png";
import architectureImage from "/images/architecture.png";
import abstractImage from "/images/abstract.png";
import dogImage from "/images/dog.png";

const content: LandingContent = {
  hero: {
    title:
      "Hola, Soy Oli — Diseñador de Producto que ama experimentar para mejorar las cosas.",
    location: "Lima, Peru",
  },
  projects: {
    title: "Lo que hago",
    projects: [
      {
        title: "Del caos a la claridad en la planta de producción",
        description:
          "Lideré el diseño de un módulo flexible de seguimiento de producción que trajo claridad a la planta, usualmente ocupados y desordenados. Diseñado para más de 30 líderes de equipo y operadores, la solución se volvió parte de su día a día, con más del 80% de usuarios objetivo usándola de forma constante.",
        image: weldingImage,
        projectURL:
          "https://drive.google.com/file/d/1K62kwWHh7c51LO-bGBKAsM1SVaOJgzpO/view?usp=drive_link",
        company: "Building Swell — EE.UU. & Canadá",
      },
      {
        title: "Reconstruyendo la confianza en la cadena de entregas",
        description:
          "Diseñé un sistema de gestión de entregas que reemplazó llamadas y hojas de cálculo dispersas por un flujo de trabajo unificado y organizado. Ayudó a alinear a los equipos del taller y del sitio con estados claros, visibilidad compartida y constancias de entrega confiables.",
        image: deliveryImage,
        projectURL:
          "https://drive.google.com/file/d/1OFwrufsqiYjFFpbMagAYGQY0aRUtsiZv/view?usp=drive_link",
        company: "Building Swell — EE.UU. & Canadá",
      },
      {
        title: "Diseñando confianza para la inversión digital",
        description:
          "Creé la primera experiencia digital del banco para invertir en fondos mutuos, un producto complejo con bajo entendimiento por parte de los clientes. Mapeamos la experiencia previa, desde la primera inversión hasta el retiro, simplificamos el concepto de riesgo y co-creamos la nueva experiencia con clientes, asesores y otros stakeholders.",
        image: architectureImage,
        projectURL:
          "https://drive.google.com/drive/folders/185RSQ1cz1IRYSB6xWB_cHWU06drjf9dR?usp=drive_link",
        company: "Scotiabank — Perú",
      },
      {
        title: "Ayudando a los clientes a encontrar lo que ya existía",
        description:
          "Rediseñamos la arquitectura de información en las plataformas web y app del banco para destacar herramientas clave y organizar mejor los ajustes relacionados a las cuentas. El trabajo, basado en entrevistas y ejercicios de card sorting, ayudó a reducir la confusión y contribuyó a un aumento del 10% en el NPS.",
        image: abstractImage,
        projectURL:
          "https://drive.google.com/file/d/1DQqjytJinwtUHtn5g8hzNj2-TKDO0eBq/view?usp=drive_link",
        company: "Scotiabank — Perú",
      },
      {
        title: "Isla de los Perros",
        description:
          "⚠️ Este proyecto aún está en proceso. Estoy trabajando en los últimos detalles antes de compartirlo.",
        image: dogImage,
        projectURL:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fchangelog.com%2Fnews%2Fmake-memes-anywhere-you-can-type-a-url-wgR&psig=AOvVaw0QKsVCrLKiTlsHX6CLiGY7&ust=1751890940508000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOi97rucqI4DFQAAAAAdAAAAABAE",
        company: "Personal Project",
      },
    ],
  },
};

export default content;
