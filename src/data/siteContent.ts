import marlenPhoto from "../assets/Marlen.jpeg";
import rominaPhoto from "../assets/Romina.jpeg";

export type NavigationItem = {
  id: string;
  label: string;
};

export type IconName =
  | "shield"
  | "gear"
  | "clipboard"
  | "trend"
  | "instrument"
  | "alert"
  | "search-file"
  | "clock"
  | "search"
  | "checklist"
  | "monitor"
  | "check-circle"
  | "team"
  | "user";

export type HighlightItem = {
  title: string;
  description: string;
  icon: IconName;
};

export type StatItem = {
  value: string;
  label: string;
  icon: IconName;
};

export type ContactItem = {
  id: "marlen" | "romina";
  name: string;
  role: string;
  email: string;
  emailHref: string;
  whatsapp: string;
  whatsappHref: string;
  photoSrc: string;
  photoPosition: string;
};

export type ImpactItem = {
  label: string;
  icon: IconName;
};

export const siteContent = {
  brand: {
    title: "Gestión de Instrumental",
    tagline: "Central de Esterilización",
  },
  navigation: [
    { id: "inicio", label: "Inicio" },
    { id: "proyecto", label: "Proyecto" },
    { id: "metodologia", label: "Metodología" },
    { id: "resultados", label: "Resultados" },
    { id: "conclusiones", label: "Conclusiones" },
    { id: "contacto", label: "Contacto" },
  ] satisfies NavigationItem[],
  hero: {
    title: "Diseño, desarrollo y mejora continua en la gestión de instrumental quirúrgico",
    description:
      "Central de Esterilización de un Hospital Público, Región de Valparaíso, Chile.",
    location: "Viña del Mar, Chile",
    primaryAction: {
      label: "Conoce el proyecto",
      href: "#proyecto",
    },
    secondaryAction: {
      label: "Contáctanos",
      href: "#contacto",
    },
  },
  project: {
    description:
      "Este proyecto aborda la necesidad de optimizar la gestión del instrumental quirúrgico mediante un enfoque integral del ciclo de vida, fortaleciendo la seguridad del paciente, la trazabilidad y la eficiencia operativa del proceso de esterilización.",
    highlights: [
      {
        title: "Seguridad del paciente",
        description: "Reducción de riesgos e incidencias asociadas a la atención.",
        icon: "shield",
      },
      {
        title: "Eficiencia operativa",
        description: "Optimización de tiempos y recursos en todo el proceso.",
        icon: "gear",
      },
      {
        title: "Trazabilidad completa",
        description: "Seguimiento en cada etapa del ciclo de vida del instrumental.",
        icon: "clipboard",
      },
      {
        title: "Mejora continua",
        description: "Procesos estandarizados y mantenimiento preventivo.",
        icon: "trend",
      },
    ] satisfies HighlightItem[],
  },
  problem: {
    cards: [
      {
        title: "Variabilidad en cajas quirúrgicas",
        description:
          "Falta de estandarización en la configuración del instrumental y sus sets de apoyo.",
        icon: "instrument",
      },
      {
        title: "Riesgo clínico",
        description:
          "Aumento de eventos adversos e infecciones asociadas a la atención de salud.",
        icon: "alert",
      },
      {
        title: "Falta de trazabilidad",
        description:
          "Dificultad para asegurar estado funcional y disponibilidad del instrumental.",
        icon: "search-file",
      },
      {
        title: "Mantenimiento insuficiente",
        description:
          "Ausencia de procesos preventivos y control sistemático del recurso.",
        icon: "clock",
      },
    ] satisfies HighlightItem[],
    note:
      "Es imperativo transitar hacia un modelo de gestión integral del ciclo de vida del instrumental quirúrgico.",
  },
  methodology: {
    steps: [
      {
        title: "Diagnóstico",
        description:
          "Análisis de la situación actual, procesos y brechas en la gestión del instrumental.",
        icon: "search",
      },
      {
        title: "Planificación",
        description:
          "Definición de especificaciones técnicas, inventarios y estandarización de procesos.",
        icon: "checklist",
      },
      {
        title: "Implementación",
        description:
          "Puesta en marcha del modelo de gestión integral y del mantenimiento preventivo.",
        icon: "gear",
      },
      {
        title: "Seguimiento",
        description:
          "Trazabilidad, control y monitoreo de indicadores operativos y clínicos.",
        icon: "monitor",
      },
      {
        title: "Mejora continua",
        description:
          "Evaluación permanente e innovación orientada a la optimización del sistema.",
        icon: "trend",
      },
    ] satisfies HighlightItem[],
  },
  results: {
    stats: [
      {
        value: "72%",
        label: "Reducción de tiempos de respuesta",
        icon: "clock",
      },
      {
        value: "77%",
        label: "Disminución de suspensiones por reprocesamiento",
        icon: "check-circle",
      },
      {
        value: "1.580",
        label: "Instrumentos disponibles en backup y material nuevo",
        icon: "trend",
      },
      {
        value: "100%",
        label: "Instrumental inspeccionado técnicamente al ingreso",
        icon: "clipboard",
      },
      {
        value: "Mayor seguridad",
        label: "Reducción de riesgos para pacientes y personal",
        icon: "shield",
      },
    ] satisfies StatItem[],
    findings: [
      {
        title: "Reducción de tiempos",
        description: "Agilización de flujos de trabajo entre pabellón y esterilización.",
        icon: "clock",
      },
      {
        title: "Mayor capacidad de respuesta",
        description: "Disponibilidad oportuna de sets para intervenciones quirúrgicas.",
        icon: "check-circle",
      },
      {
        title: "Mitigación de errores",
        description:
          "Disminución de fallas operativas y suspensiones asociadas al instrumental.",
        icon: "shield",
      },
      {
        title: "Trabajo colaborativo",
        description:
          "Revisión activa y creación de cajas nuevas, además de mejora de las existentes.",
        icon: "team",
      },
      {
        title: "Enfermería presente en quirófano",
        description:
          "Revisión de configuraciones y requerimientos para disminuir incidencias.",
        icon: "user",
      },
    ] satisfies HighlightItem[],
  },
  impact: {
    description:
      "La articulación entre la Central de Esterilización y el Pabellón Quirúrgico impacta directamente en la seguridad del paciente y en el cumplimiento de los objetivos estratégicos institucionales.",
    items: [
      { label: "Seguridad del paciente", icon: "shield" },
      { label: "Calidad en los procesos", icon: "gear" },
      { label: "Eficiencia del bloque quirúrgico", icon: "team" },
      { label: "Cumplimiento de estándares", icon: "clipboard" },
    ] satisfies ImpactItem[],
  },
  conclusions: {
    items: [
      "La inspección técnica rigurosa en la recepción garantiza la funcionalidad del 100% del instrumental en circulación.",
      "La gestión proactiva de bodega y material de respaldo asegura continuidad operativa.",
      "La baja del instrumental debe alinearse con criterios de vida útil y fatiga del material.",
    ],
  },
  contact: {
    title: "Contáctanos",
    people: [
      {
        id: "marlen",
        name: "Marlen Morales Palacios",
        role: "Supervisora Central de Esterilización",
        email: "moralespalaciosmarlen@gmail.com",
        emailHref: "mailto:moralespalaciosmarlen@gmail.com",
        whatsapp: "+56 9 9085 3935",
        whatsappHref:
          "https://wa.me/56990853935?text=Hola%2C%20quisiera%20realizar%20una%20consulta",
        photoSrc: marlenPhoto,
        photoPosition: "24% center",
      },
      {
        id: "romina",
        name: "Romina Cárdenas Villegas",
        role: "Coordinadora de Instrumental Central de Esterilización",
        email: "r.cardenas.villegas@gmail.com",
        emailHref: "mailto:r.cardenas.villegas@gmail.com",
        whatsapp: "+56 9 7139 6505",
        whatsappHref:
          "https://wa.me/56971396505?text=Hola%2C%20quisiera%20realizar%20una%20consulta",
        photoSrc: rominaPhoto,
        photoPosition: "74% center",
      },
    ] satisfies ContactItem[],
  },
  footer: {
    title: "Gestión de Instrumental Quirúrgico",
    subtitle: "Central de Esterilización · Hospital Público · Región de Valparaíso, Chile",
    year: "2025",
  },
} as const;
