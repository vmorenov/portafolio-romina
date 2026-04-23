export type NavigationItem = {
  id: string;
  label: string;
};

export type ValueItem = {
  title: string;
  description: string;
  icon: "heart" | "shield" | "team";
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: "stethoscope" | "syringe" | "clipboard" | "heartbeat" | "care";
};

export type ExperienceItem = {
  company: string;
  role: string;
  years: string;
  description: string;
};

export const siteContent = {
  brand: {
    title: "Enfermería",
    tagline: "Cuidado que transforma",
  },
  navigation: [
    { id: "inicio", label: "Inicio" },
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "servicios", label: "Servicios" },
    { id: "experiencia", label: "Experiencia" },
    { id: "contacto", label: "Contacto" },
  ] satisfies NavigationItem[],
  hero: {
    heading: "Cuidado profesional,",
    headingAccent: "siempre contigo",
    description:
      "Brindo atención de enfermería con calidad, calidez y vocación de servicio.",
    ctaLabel: "Contáctame",
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Soy enfermera profesional con vocación de servicio, comprometida con el cuidado integral de las personas, promoviendo su bienestar físico, emocional y social.",
      "Cuento con experiencia en atención clínica, educación al paciente y trabajo en equipo multidisciplinario.",
    ],
    values: [
      {
        title: "Empatía",
        description: "Escucho y acompaño con respeto, cercanía y calidez.",
        icon: "heart",
      },
      {
        title: "Responsabilidad",
        description: "Comprometida con la seguridad y el bienestar del paciente.",
        icon: "shield",
      },
      {
        title: "Profesionalismo",
        description: "Actualización constante y ética en cada acción.",
        icon: "team",
      },
    ] satisfies ValueItem[],
  },
  services: {
    title: "Servicios",
    items: [
      {
        title: "Cuidado clínico",
        description:
          "Valoración, monitoreo y cuidado integral del paciente.",
        icon: "stethoscope",
      },
      {
        title: "Administración de medicamentos",
        description:
          "Aplicación segura de medicamentos según prescripción médica.",
        icon: "syringe",
      },
      {
        title: "Educación en salud",
        description:
          "Orientación y educación para el autocuidado y prevención.",
        icon: "clipboard",
      },
      {
        title: "Control de signos vitales",
        description:
          "Monitoreo y registro para evaluar el estado de salud.",
        icon: "heartbeat",
      },
      {
        title: "Acompañamiento",
        description:
          "Apoyo emocional y acompañamiento al paciente y su familia.",
        icon: "care",
      },
    ] satisfies ServiceItem[],
  },
  experience: {
    title: "Experiencia",
    items: [
      {
        company: "Hospital San José",
        role: "Enfermera asistencial",
        years: "2021 - Actualidad",
        description:
          "Atención directa al paciente en servicios de hospitalización, urgencias y consulta externa.",
      },
      {
        company: "Clínica del Bienestar",
        role: "Enfermera auxiliar",
        years: "2019 - 2021",
        description:
          "Apoyo en procedimientos clínicos, toma de signos vitales y cuidado básico del paciente.",
      },
    ] satisfies ExperienceItem[],
  },
  contact: {
    title: "Contáctame",
    intro: "Estoy disponible para brindarte el mejor cuidado.",
    email: {
      label: "Correo electrónico",
      value: "r.cardenas.villegas@gmail.com",
      href: "mailto:r.cardenas.villegas@gmail.com?subject=Consulta%20de%20enfermer%C3%ADa",
    },
    whatsapp: {
      label: "WhatsApp",
      value: "+56 9 7139 6505",
      href: "https://wa.me/56971396505?text=Hola%2C%20quiero%20realizar%20una%20consulta",
      helper: "Haz clic para escribirme por WhatsApp",
    },
  },
} as const;
