export interface Language {
  code: 'es' | 'en';
  label: string;
  flag: string;
  dir?: 'ltr' | 'rtl';
}

export const SITE_CONFIG = {
  title: 'Marcelo Sánchez | Blog',
  author: 'Marcelo Sánchez González',
  description: 'Historias, opiniones y experimentos',
  slogan: 'Ingeniero de Sofware, a veces escritor',
  defaultLang: 'es' as const,
  languages: [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
  ] as const,

  // Configuración de Disqus: Coloca aquí tu Disqus Shortname cuando lo tengas
  // Por ejemplo: 'yinosanchez-blog'
  disqusShortname: '',

  // Navegación principal por idioma
  nav: {
    es: [
      { text: 'Inicio', href: '/' },
      { text: 'Blog', href: '/es/' },
      { text: 'Categorías', href: '/es/categories/' },
      { text: 'Acerca de', href: '/es/about/' },
    ],
    en: [
      { text: 'Home', href: '/' },
      { text: 'Blog', href: '/en/' },
      { text: 'Categories', href: '/en/categories/' },
      { text: 'About', href: '/en/about/' },
    ]
  },

  // Traducciones de la interfaz
  ui: {
    es: {
      'site.title': 'Marcelo Sánchez',
      'site.subtitle': 'Ingeniero de Software, a veces escritor',
      'site.tagline': 'Historias, opiniones y experimentos',
      'site.allPosts': 'Todas las publicaciones',
      'site.readMore': 'Leer artículo',
      'site.readingTime': 'min de lectura',
      'site.publishedOn': 'Publicado el',
      'site.category': 'Categoría',
      'site.categories': 'Categorías',
      'site.authorComment': 'Comentario del autor',
      'site.authorCommentTitle': 'Nota personal del autor',
      'site.authorCommentClose': 'Cerrar nota',
      'site.comments': 'Comentarios',
      'site.disqusNotConfigured': 'Disqus no está configurado aún. Puedes agregar tu shortname en src/config.ts.',
      'site.notAvailableInLang': 'Esta publicación aún no está disponible en tu idioma seleccionado.',
      'site.availableIn': 'Está disponible en los siguientes idiomas:',
      'site.readInOriginal': 'Leer en Español',
      'site.filterByCategory': 'Filtrando por categoría:',
      'site.clearFilter': 'Ver todos los artículos',
      'site.noPostsFound': 'No se encontraron publicaciones en esta categoría.',
      'site.recentPosts': 'Publicaciones recientes',
      'site.share': 'Compartir',
    },
    en: {
      'site.title': 'Marcelo Sánchez',
      'site.subtitle': 'Software Engineer, sometimes writer',
      'site.tagline': 'Stories, opinions and experiments with code',
      'site.allPosts': 'All Articles',
      'site.readMore': 'Read article',
      'site.readingTime': 'min read',
      'site.publishedOn': 'Published on',
      'site.category': 'Category',
      'site.categories': 'Categories',
      'site.authorComment': "Author's Note",
      'site.authorCommentTitle': "Author's Personal Commentary",
      'site.authorCommentClose': 'Close note',
      'site.comments': 'Comments',
      'site.disqusNotConfigured': 'Disqus is not configured yet. You can set your shortname in src/config.ts.',
      'site.notAvailableInLang': 'This post is not yet available in your selected language.',
      'site.availableIn': 'Available in the following languages:',
      'site.readInOriginal': 'Read in Spanish',
      'site.filterByCategory': 'Filtering by category:',
      'site.clearFilter': 'View all articles',
      'site.noPostsFound': 'No posts found in this category.',
      'site.recentPosts': 'Recent Posts',
      'site.share': 'Share',
    }
  }
};
