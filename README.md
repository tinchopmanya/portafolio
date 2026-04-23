# Portafolio — Martín Franco

Sitio personal bilingüe (ES/EN) para **Martín Franco**, desarrollador senior .NET con foco en integración de IA aplicada.

Stack: **Next.js 15 · App Router · TypeScript · Tailwind CSS · next-intl · Framer Motion · React Three Fiber**.

## Desarrollo

```bash
npm install
npm run dev
# http://localhost:3000 → redirige a /es
```

Scripts disponibles:

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build |
| `npm run lint` | ESLint |
| `npm run typecheck` | Type-check sin emitir |

## Estructura

```
app/
  [locale]/            # Rutas por idioma (/es, /en)
    layout.tsx         # Providers, navbar, footer, html/body
    page.tsx           # Home single-page
    proyectos/[slug]   # Detalle de cada proyecto
  layout.tsx           # Passthrough (next-intl pattern)
  sitemap.ts / robots.ts / opengraph-image.tsx
components/
  sections/            # Hero, About, Experience, Projects, Skills, Contact
  three/HeroScene.tsx  # Escena 3D (R3F + drei) cargada con next/dynamic
  ui/                  # Navbar, toggles, ProjectCard, MagneticButton, TimelineItem, SectionHeader
content/
  projects.ts          # Data tipada de proyectos (placeholders)
  experience.ts        # Experiencia y formación (datos del CV)
  skills.ts            # Stack agrupado por área
i18n/
  routing.ts           # locales = ['es','en'], default = 'es'
  request.ts           # loader de mensajes
  messages/{es,en}.json
```

## Editar contenido

### Agregar o modificar un proyecto

Editar `content/projects.ts`:

```ts
{
  slug: 'mi-proyecto',
  title: { es: 'Título', en: 'Title' },
  tagline: { es: '...', en: '...' },
  description: { es: '...', en: '...' },
  cover: '/projects/mi-cover.svg', // opcional
  gradient: 'from-indigo-500 via-violet-500 to-fuchsia-500',
  tech: ['Next.js', 'FastAPI'],
  role: { es: 'Full-stack', en: 'Full-stack' },
  year: 2025,
  links: { demo: 'https://...', repo: 'https://...' },
  featured: true,
}
```

El slug se usa en la URL: `/es/proyectos/mi-proyecto`.

### Actualizar experiencia / formación

Editar `content/experience.ts`. Cada item acepta textos ES/EN, período (`start` / `end`, donde `end: 'present'` se muestra como "Presente" / "Present").

### Traducciones

Editar `i18n/messages/es.json` y `i18n/messages/en.json`. Las claves están agrupadas por sección (`hero.*`, `about.*`, etc.).

## Deploy

1. `git push` a la rama actual.
2. Importar el repo en [Vercel](https://vercel.com/new).
3. Sin variables de entorno requeridas.
4. Auto-deploy en cada push.

## Personalización rápida

| Qué | Dónde |
|---|---|
| Colores (light/dark) | `app/globals.css` — variables CSS `--background`, `--accent`, etc. |
| Fuentes | `app/[locale]/layout.tsx` — `next/font/google` |
| Forma/color del blob 3D | `components/three/HeroScene.tsx` |
| Metadatos / SEO | `app/[locale]/layout.tsx` — `generateMetadata` |
| OG image | `app/opengraph-image.tsx` |
