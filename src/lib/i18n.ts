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
      subtitle: "Desarrollador Full Stack | Ingeniería Informática UPCH | Django · SvelteKit · React · AWS",
      description:
        "Estudiante de Ingeniería Informática en la UPCH, apasionado por la IA, la Ciencia de Datos y el desarrollo de soluciones tecnológicas. Tengo iniciativa, gusto por el liderazgo y el trabajo en equipo. Me interesan el emprendimiento digital, las tecnologías emergentes y aprender constantemente.",
      resume: "Descargar CV",
      getintouch: "Contactar",
    },

    aboutme: {
      title: "Sobre mí",
      description:
        "Soy desarrollador Full Stack y estudiante de Ingeniería Informática en la Universidad Peruana Cayetano Heredia. Trabajo con Django, SvelteKit y React en proyectos reales desplegados en producción. Me especializo en arquitecturas web modernas, APIs REST escalables e integración con plataformas ERP como Odoo 18. También me interesan la IA, la Ciencia de Datos, los métodos de Monte Carlo y el docking molecular. Me motiva construir productos útiles y aprender de forma continua.",
    },

    skills: {
      title: "Habilidades",
      core: {
        title: "Lenguajes de Programación",
        description: "Lenguajes que domino para desarrollo de software",
      },
      backend: {
        title: "Backend",
        description: "Tecnologías para desarrollo de servidores y APIs",
      },
      frontend: {
        title: "Frontend",
        description: "Frameworks y herramientas para interfaces de usuario",
      },
      databases: {
        title: "Bases de Datos",
        description: "Herramientas para gestión y almacenamiento de datos",
      },
      erp: {
        title: "ERP & Integraciones",
        description: "Plataformas empresariales y servicios de integración",
      },
      devops: {
        title: "DevOps & Cloud",
        description: "Infraestructura, despliegue y gestión en la nube",
      },
      design: {
        title: "Diseño & Gestión",
        description: "Herramientas para diseño y gestión de proyectos",
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
        dashboard: {
          title: "Dashboard",
          description:
            "Visualización de la dinámica del Gasto Público en el Perú, desglosada por sus tres niveles de gobierno (Nacional, Regional y Local). El dashboard permite comparar la asignación, la ejecución y las tendencias del gasto corriente y de inversión en cada una de las regiones.",
        },
        tetris: {
          title: "Tetris Game",
          description:
            "Implementación del clásico juego Tetris desarrollado en Python con Pygame, mi primer proyecto de videojuego.",
        },
        marketplace: {
          title: "Marketplace de Repuestos",
          description:
            "Plataforma e-commerce con arquitectura de microservicios: Django REST + SvelteKit + PostgreSQL. Integración completa con Odoo 18 vía JSON-RPC, gestión de imágenes con Cloudinary, tareas asíncronas con Celery + Redis y despliegue con Docker.",
        },
        dyeautopartes: {
          title: "DYE Autopartes",
          description:
            "E-commerce de repuestos de vehículos desplegado en AWS S3 + CloudFront con dominio personalizado. Stack: React 19 + TypeScript + Tailwind + Supabase. Incluye correos corporativos y optimización SEO.",
        },
        mitiendita: {
          title: "Mi Tiendita",
          description:
            "App web mobile-first para comerciantes ambulantes: registro de ventas con un tap, resumen diario y estadísticas por producto.",
        },
        medicalc: {
          title: "MediCalc",
          description:
            "Calculadora médica web con 6 módulos especializados para enfermería: dosis, goteo, conversiones y más. Diseñada para uso bajo presión en entorno hospitalario.",
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
          "Desarrollador Full Stack y estudiante de Ingeniería Informática especializado en Django, SvelteKit, React y AWS. Construyo soluciones reales desplegadas en producción.",
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
      subtitle: "Full Stack Developer | Computer Engineering UPCH | Django · SvelteKit · React · AWS",
      description:
        "Computer Engineering student at UPCH, passionate about AI, Data Science, and developing impactful technological solutions. I'm proactive, enjoy leadership and teamwork, and have a strong interest in digital entrepreneurship, emerging technologies, and continuous learning.",
      resume: "Download CV",
      getintouch: "Get in touch",
    },

    aboutme: {
      title: "About me",
      description:
        "I am a Full Stack developer and Computer Engineering student at the Universidad Peruana Cayetano Heredia. I work with Django, SvelteKit, and React on real projects deployed in production. I specialize in modern web architectures, scalable REST APIs, and integration with ERP platforms like Odoo 18. I'm also interested in AI, Data Science, Monte Carlo methods, and molecular docking. I'm driven to build useful products and keep learning continuously.",
    },

    skills: {
      title: "Skills",
      core: {
        title: "Programming Languages",
        description: "Languages I master for software development",
      },
      backend: {
        title: "Backend",
        description: "Technologies for server-side development and APIs",
      },
      frontend: {
        title: "Frontend",
        description: "Frameworks and tools for user interfaces",
      },
      databases: {
        title: "Databases",
        description: "Tools for data management and storage",
      },
      erp: {
        title: "ERP & Integrations",
        description: "Enterprise platforms and integration services",
      },
      devops: {
        title: "DevOps & Cloud",
        description: "Infrastructure, deployment, and cloud management",
      },
      design: {
        title: "Design & Management",
        description: "Tools for design and project management",
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
        dashboard: {
          title: "Dashboard",
          description:
            "Real-time monitoring system with Grafana and InfluxDB for IoT sensor data visualization.",
        },
        tetris: {
          title: "Tetris Game",
          description:
            "Implementation of the classic Tetris game developed in Python with Pygame, my first video game project.",
        },
        marketplace: {
          title: "Parts Marketplace",
          description:
            "E-commerce platform with microservices architecture: Django REST + SvelteKit + PostgreSQL. Full Odoo 18 integration via JSON-RPC, image management with Cloudinary, async tasks with Celery + Redis, Docker deployment.",
        },
        dyeautopartes: {
          title: "DYE Autopartes",
          description:
            "Vehicle parts e-commerce deployed on AWS S3 + CloudFront with custom domain. Stack: React 19 + TypeScript + Tailwind + Supabase. Includes corporate email setup and SEO optimization.",
        },
        mitiendita: {
          title: "Mi Tiendita",
          description:
            "Mobile-first web app for street vendors: one-tap sale recording, daily summary, and per-product analytics.",
        },
        medicalc: {
          title: "MediCalc",
          description:
            "Medical web calculator with 6 specialized modules for nursing: dosage, drip rate, unit conversion and more. Designed for high-pressure hospital environments.",
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
          "Full Stack developer and Computer Engineering student specialized in Django, SvelteKit, React, and AWS. I build real solutions deployed in production.",
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
