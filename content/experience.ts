export type ExperienceItem = {
  company: string;
  role: { es: string; en: string };
  period: { start: string; end: string | 'present' };
  location: string;
  summary: { es: string; en: string };
  highlights: { es: string[]; en: string[] };
};

export type EducationItem = {
  institution: string;
  degree: { es: string; en: string };
  period: { start: string; end: string | 'present' };
  note?: { es: string; en: string };
};

export const experience: ExperienceItem[] = [
  {
    company: 'CRAMI',
    role: {
      es: 'Desarrollador .NET Full Stack · Analista Programador',
      en: 'Full-Stack .NET Developer · Analyst Programmer',
    },
    period: { start: 'Sep 2015', end: 'present' },
    location: 'Las Piedras, Uruguay',
    summary: {
      es: 'Responsable de diseño, desarrollo y mantenimiento de sistemas internos para el sector salud: gestión de pacientes, agendas, facturación e integraciones con servicios externos.',
      en: 'Responsible for the design, development and maintenance of internal systems for the healthcare sector: patient management, scheduling, billing and integrations with external services.',
    },
    highlights: {
      es: [
        'Stack principal: C#, ASP.NET, Blazor, Entity Framework, Web API y WCF sobre SQL Server e Informix.',
        'Integraciones con sistemas de terceros, diseño de APIs REST y modernización progresiva de módulos legacy.',
        'Adopción de asistentes de código (Copilot, Claude, Codex) en el flujo diario del equipo.',
        'Exploración de patrones RAG, Model Context Protocol y automatizaciones con n8n para acelerar procesos internos.',
        'Mentoría técnica, revisiones de código y participación en decisiones de arquitectura.',
      ],
      en: [
        'Main stack: C#, ASP.NET, Blazor, Entity Framework, Web API and WCF over SQL Server and Informix.',
        'Third-party integrations, REST API design and progressive modernization of legacy modules.',
        'Adoption of code assistants (Copilot, Claude, Codex) into the team daily workflow.',
        'Exploration of RAG patterns, the Model Context Protocol and n8n automations to accelerate internal processes.',
        'Technical mentoring, code reviews and participation in architecture decisions.',
      ],
    },
  },
  {
    company: 'ST Consultores',
    role: {
      es: 'Desarrollador de Software — Proyecto BPS',
      en: 'Software Developer — BPS project',
    },
    period: { start: 'Jul 2014', end: 'Sep 2015' },
    location: 'Montevideo, Uruguay',
    summary: {
      es: 'Desarrollo de componentes para sistemas de seguridad social en el proyecto del Banco de Previsión Social (BPS), trabajando con equipos multidisciplinarios bajo metodologías ágiles.',
      en: 'Development of components for social-security systems on the Banco de Previsión Social (BPS) project, working with multidisciplinary teams under agile methodologies.',
    },
    highlights: {
      es: [
        'Desarrollo backend en tecnologías .NET y bases de datos relacionales.',
        'Colaboración cercana con analistas funcionales y testers.',
        'Primera experiencia formal en un dominio de alta criticidad y trazabilidad.',
      ],
      en: [
        'Backend development with .NET technologies and relational databases.',
        'Close collaboration with functional analysts and QA.',
        'First formal experience in a highly critical and auditable domain.',
      ],
    },
  },
];

export const education: EducationItem[] = [
  {
    institution: 'UdelaR — Facultad de Ingeniería',
    degree: {
      es: 'Ingeniería en Computación (en curso · 386 créditos)',
      en: 'Computer Engineering (in progress · 386 credits)',
    },
    period: { start: '2014', end: 'present' },
  },
  {
    institution: 'UdelaR-CETP',
    degree: {
      es: 'Tecnólogo en Informática',
      en: 'Technologist in Informatics',
    },
    period: { start: '2009', end: '2013' },
  },
  {
    institution: 'CUTI',
    degree: {
      es: 'Analista GeneXus',
      en: 'GeneXus Analyst',
    },
    period: { start: '2010', end: '2010' },
  },
  {
    institution: 'ORT Uruguay',
    degree: {
      es: 'Analista Programador en Desarrollo de Software',
      en: 'Analyst Programmer in Software Development',
    },
    period: { start: '2006', end: '2009' },
  },
  {
    institution: 'ORT Uruguay',
    degree: {
      es: 'Programador Orientado a Objetos',
      en: 'Object-Oriented Programmer',
    },
    period: { start: '2006', end: '2007' },
  },
];
