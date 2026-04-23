export type SkillGroup = {
  title: { es: string; en: string };
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { es: 'Lenguajes', en: 'Languages' },
    items: ['C#', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: { es: '.NET Stack', en: '.NET Stack' },
    items: ['ASP.NET', 'Blazor', 'Entity Framework', 'Web API', 'WCF'],
  },
  {
    title: { es: 'Bases de datos', en: 'Databases' },
    items: ['SQL Server', 'Informix', 'PostgreSQL', 'MySQL', 'Oracle'],
  },
  {
    title: { es: 'IA & Integración', en: 'AI & Integration' },
    items: ['Copilot', 'Claude', 'Codex', 'RAG', 'MCP', 'LLM APIs'],
  },
  {
    title: { es: 'Automatización', en: 'Automation' },
    items: ['n8n', 'Scripting', 'CI/CD básico'],
  },
  {
    title: { es: 'Explorando', en: 'Exploring' },
    items: ['Next.js', 'FastAPI', 'Supabase', 'React Three Fiber'],
  },
  {
    title: { es: 'Prácticas', en: 'Practices' },
    items: ['Scrum', 'Kanban', 'Code Review', 'Mentoría', 'Pair programming'],
  },
];
