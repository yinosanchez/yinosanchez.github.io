import { SITE_CONFIG } from '../config';
import type { CollectionEntry } from 'astro:content';

export type Lang = 'es' | 'en';

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof SITE_CONFIG.ui)['es']): string {
    return SITE_CONFIG.ui[lang]?.[key] || SITE_CONFIG.ui[SITE_CONFIG.defaultLang][key] || key;
  };
}

export function formatDate(date: Date, lang: Lang = 'es'): string {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export function calculateReadTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute) || 1;
}

/**
 * Obtiene todas las traducciones disponibles para un post por su translation_id
 */
export function getAvailableTranslations(
  posts: CollectionEntry<'blog'>[],
  translationId: string
): { lang: Lang; post: CollectionEntry<'blog'> }[] {
  return posts
    .filter((p) => p.data.translation_id === translationId && !p.data.draft)
    .map((p) => ({
      lang: p.data.lang as Lang,
      post: p,
    }));
}

/**
 * Extrae el slug limpio sin el prefijo del directorio de idioma si existe (ej. "es/mi-post" -> "mi-post")
 */
export function getPostSlug(entry: CollectionEntry<'blog'>): string {
  const parts = entry.slug.split('/');
  return parts[parts.length - 1];
}
