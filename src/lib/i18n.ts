import { createI18n } from "vue-i18n";

const messages = {
  es: {
    navbar: {
      aboutme: "Sobre mí",
      skills: "Habilidades",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
      blog: "Blog",
    },

    hero: {
      presentation: "Hola mundo, yo soy",
      //subtitle: "Futuro Ingeniero en IA y Desarrollador Full Stack",
      description:
        "Estudiante de Ingeniería Informática en la UPCH, apasionado por la IA, la Ciencia de Datos y el desarrollo de soluciones tecnológicas. Tengo iniciativa, gusto por el liderazgo y el trabajo en equipo. Me interesan el emprendimiento digital, las tecnologías emergentes y aprender constantemente.",
      resume: "Descargar CV",
      getintouch: "Contactar",
    },

    aboutme: {
      title: "Sobre mí",
      description:
        "Soy estudiante de Ingeniería Informática en la Universidad Peruana Cayetano Heredia, apasionado por la tecnología y la innovación. Mis principales intereses se centran en la Inteligencia Artificial y la Ciencia de Datos, aunque también disfruto del desarrollo Full Stack. Además, me atraen áreas como la química computacional, los modelos de Monte Carlo y algunas herramientas de docking molecular, que combinan ciencia, simulación y computación de alto rendimiento.",
    },

    skills: {
      title: "Habilidades",
      core: {
        title: "Lenguajes de Programación",
        description: "Lenguajes que domino para desarrollo de software",
      },
      databases: {
        title: "Bases de Datos y Análisis",
        description: "Herramientas para gestión de datos y visualización",
      },
      tools: {
        title: "Herramientas y Plataformas",
        description: "Tecnologías esenciales para desarrollo y análisis",
      },
      outro: {
        title: "Hardware y IoT",
        description:
          "Experiencia en proyectos de Internet de las Cosas y robótica",
      },
    },

    services: {
      title: "Servicios",
    },

    projects: {
      title: "Proyectos",
      access: "Ver proyecto",
      items: {
        hananweb: {
          title: "Hanan-Web",
          description:
            "Página web profesional desarrollada para Hanan, implementando diseño moderno y funcionalidades responsivas.",
        },
        dyeingenieria: {
          title: "DyE Ingeniería",
          description:
            "Sitio web corporativo para empresa de ingeniería, con diseño profesional y presentación de servicios.",
        },
        gaviperu: {
          title: "Tienda Virtual Gavi-Perú",
          description:
            "E-commerce completo para Gavi-Perú, con catálogo de productos, carrito de compras y sistema de gestión.",
        },
        snakefrutas: {
          title: "Cazador de Frutas",
          description:
            "Videojuego estilo Snake desarrollado en Python con Pygame, donde controlas un personaje que debe atrapar frutas.",
        },
        dashboardiot: {
        title: "Dashboard",
        description:
      "Visualización de la dinámica del Gasto Público en el Perú, desglosada por sus tres niveles de gobierno (Nacional, Regional y Local). El dashboard permite comparar la asignación, la ejecución y las tendencias del gasto corriente y de inversión en cada una de las regiones.",
        },
        tetris: {
          title: "Tetris Game",
          description:
            "Implementación del clásico juego Tetris desarrollado en Python con Pygame, mi primer proyecto de videojuego.",
        },
      },
    },

    contact: {
      title: `Ponte en <span class="text-primary-400">contacto</span>`,
      description: "¡Estoy disponible para colaborar en proyectos innovadores!",
      phone: "Teléfono",
    },

    footer: {
      links: "Enlaces rápidos",
      home: "Inicio",
      aboutme: "Sobre Mí",
      skills: "Habilidades",
      services: "Servicios",
      projects: "Proyectos",
      social: "Redes sociales",
      rights: "Todos los derechos reservados.",
      about: {
        title: "Sobre Mí",
        description:
          "Estudiante de Ingeniería Informática especializado en IA, Ciencia de Datos y Desarrollo Full Stack. Creo soluciones innovadoras que combinan software y hardware.",
      },
    },
  },
  en: {
    navbar: {
      aboutme: "About me",
      skills: "Skills",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      blog: "Blog",
    },

    hero: {
      presentation: "Hello World, I am",
      //subtitle: "Future AI Engineer and Full Stack Developer",
      description:
        "Computer Engineering student at UPCH, passionate about AI, Data Science, and developing impactful technological solutions. I’m proactive, enjoy leadership and teamwork, and have a strong interest in digital entrepreneurship, emerging technologies, and continuous learning.",
      resume: "Download CV",
      getintouch: "Get in touch",
    },

    aboutme: {
      title: "About me",
      description:
        "I am a Computer Engineering student at the Universidad Peruana Cayetano Heredia, passionate about technology and innovation. My main interests lie in Artificial Intelligence and Data Science, although I also enjoy Full Stack development. I am additionally drawn to areas such as computational chemistry, Monte Carlo models, and various molecular docking tools, where science, simulation, and high-performance computing come together.",
    },

    skills: {
      title: "Skills",
      core: {
        title: "Programming Languages",
        description: "Languages I master for software development",
      },
      databases: {
        title: "Databases and Analysis",
        description: "Tools for data management and visualization",
      },
      tools: {
        title: "Tools and Platforms",
        description: "Essential technologies for development and analysis",
      },
      outro: {
        title: "Hardware and IoT",
        description:
          "Experience in Internet of Things and robotics projects",
      },
    },

    services: {
      title: "Services",
    },

    projects: {
      title: "Projects",
      access: "View project",
      items: {
        hananweb: {
          title: "Hanan-Web",
          description:
            "Professional website developed for Hanan, implementing modern design and responsive functionalities.",
        },
        dyeingenieria: {
          title: "DyE Engineering",
          description:
            "Corporate website for engineering company, featuring professional design and service presentation.",
        },
        gaviperu: {
          title: "Gavi-Peru Online Store",
          description:
            "Complete e-commerce for Gavi-Peru, with product catalog, shopping cart and management system.",
        },
        snakefrutas: {
          title: "Fruit Hunter",
          description:
            "Snake-style video game developed in Python with Pygame, where you control a character that must catch fruits.",
        },
        dashboardiot: {
          title: "IoT Dashboard",
          description:
            "Real-time monitoring system with Grafana and InfluxDB for IoT sensor data visualization.",
        },
        tetris: {
          title: "Tetris Game",
          description:
            "Implementation of the classic Tetris game developed in Python with Pygame, my first video game project.",
        },
      },
    },

    contact: {
      title: `Get in <span class="text-primary-400">touch</span>`,
      description: "I'm available to collaborate on innovative projects!",
      phone: "Phone",
    },

    footer: {
      links: "Quick links",
      home: "Home",
      aboutme: "About Me",
      skills: "Skills",
      services: "Services",
      projects: "Projects",
      social: "Socials",
      rights: "All rights reserved.",
      about: {
        title: "About Me",
        description:
          "Computer Engineering student specialized in AI, Data Science, and Full Stack Development. I create innovative solutions that combine software and hardware.",
      },
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "es",
  fallbackLocale: "en",
  messages,
});