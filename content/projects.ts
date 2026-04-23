export type Project = {
  slug: string;
  title: { es: string; en: string };
  tagline: { es: string; en: string };
  description: { es: string; en: string };
  cover: string;
  gradient: string;
  tech: string[];
  role: { es: string; en: string };
  year: number;
  links?: { demo?: string; repo?: string; caseStudy?: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'rag-knowledge-assistant',
    title: {
      es: 'RAG Knowledge Assistant',
      en: 'RAG Knowledge Assistant',
    },
    tagline: {
      es: 'Buscador semántico sobre documentación interna.',
      en: 'Semantic search over internal documentation.',
    },
    description: {
      es: 'Asistente de búsqueda con patrón Retrieval-Augmented Generation que indexa documentación técnica, procedimientos y tickets históricos para devolver respuestas citadas y confiables. Pensado para equipos que manejan volúmenes grandes de conocimiento tácito.',
      en: 'Retrieval-Augmented Generation assistant that indexes technical docs, procedures and historical tickets to return cited, reliable answers. Designed for teams dealing with large volumes of tacit knowledge.',
    },
    cover: '/projects/rag-cover.svg',
    gradient: 'from-indigo-500 via-violet-500 to-fuchsia-500',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL + pgvector', 'OpenAI API', 'LangChain'],
    role: {
      es: 'Diseño end-to-end, ingesta, embeddings y UI conversacional.',
      en: 'End-to-end design, ingestion, embeddings and conversational UI.',
    },
    year: 2025,
    featured: true,
  },
  {
    slug: 'mcp-server-enterprise',
    title: {
      es: 'MCP Server para herramientas corporativas',
      en: 'MCP Server for enterprise tools',
    },
    tagline: {
      es: 'Expone operaciones de un sistema .NET a Claude y Copilot vía MCP.',
      en: 'Exposes .NET system operations to Claude and Copilot via MCP.',
    },
    description: {
      es: 'Servidor basado en el Model Context Protocol que publica herramientas controladas sobre un backend .NET legacy — consultas, aperturas de tickets, lectura de documentación — de forma que un asistente pueda operar con permisos acotados y trazabilidad completa.',
      en: 'Model Context Protocol server that publishes controlled tools on top of a legacy .NET backend — queries, ticket creation, documentation reads — so an assistant can operate with scoped permissions and full audit trail.',
    },
    cover: '/projects/mcp-cover.svg',
    gradient: 'from-cyan-400 via-sky-500 to-indigo-500',
    tech: ['TypeScript', 'MCP SDK', 'C# / .NET', 'SQL Server', 'OAuth'],
    role: {
      es: 'Arquitectura, mapeo de tools y política de permisos.',
      en: 'Architecture, tool mapping and permission policy.',
    },
    year: 2025,
    featured: true,
  },
  {
    slug: 'n8n-automation-hub',
    title: {
      es: 'n8n Automation Hub',
      en: 'n8n Automation Hub',
    },
    tagline: {
      es: 'Flujos que conectan sistemas legacy con LLMs.',
      en: 'Workflows that connect legacy systems with LLMs.',
    },
    description: {
      es: 'Colección de workflows en n8n que orquestan integraciones entre ERPs legacy, servicios de mensajería y modelos de lenguaje. Elimina tareas manuales repetitivas sin exigir cambios en los sistemas origen.',
      en: 'Collection of n8n workflows that orchestrate integrations between legacy ERPs, messaging services and language models. Removes repetitive manual work without requiring changes to the source systems.',
    },
    cover: '/projects/n8n-cover.svg',
    gradient: 'from-rose-500 via-pink-500 to-amber-400',
    tech: ['n8n', 'Webhooks', 'LLM APIs', 'SQL', 'REST'],
    role: {
      es: 'Diseño de flujos, integración y observabilidad.',
      en: 'Flow design, integration and observability.',
    },
    year: 2024,
  },
  {
    slug: 'dotnet-management-system',
    title: {
      es: 'Sistema de gestión .NET',
      en: '.NET management system',
    },
    tagline: {
      es: 'Aplicación empresarial Blazor + EF sobre SQL Server.',
      en: 'Blazor + EF enterprise application on SQL Server.',
    },
    description: {
      es: 'Sistema de gestión representativo del trabajo diario en dominios críticos: módulos de ABM, reportes, integraciones y control de permisos. Arquitectura en capas, pruebas y CI integrados.',
      en: 'Enterprise management system representative of day-to-day work in critical domains: CRUD modules, reporting, integrations and permission control. Layered architecture with tests and CI in place.',
    },
    cover: '/projects/dotnet-cover.svg',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    tech: ['Blazor', 'C#', 'Entity Framework', 'SQL Server', 'Azure DevOps'],
    role: {
      es: 'Full-stack, desde datos hasta UI.',
      en: 'Full-stack, from data to UI.',
    },
    year: 2024,
  },
];
