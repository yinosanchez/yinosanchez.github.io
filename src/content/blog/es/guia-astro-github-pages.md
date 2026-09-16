---
title: "Guía Rápida: Desplegando Astro en GitHub Pages"
description: "Paso a paso para configurar tu pipeline de GitHub Actions y publicar un blog ultra rápido sin costo."
date: 2026-09-15
category: "tutoriales"
lang: "es"
translation_id: "guia-astro-pages"
author_comment: "Configurar el workflow de GitHub Pages con Astro toma menos de 5 minutos una vez que entiendes la configuración de permisos del token de GitHub Actions."
tags: ["astro", "github-actions", "devops"]
---

GitHub Pages es una de las soluciones más confiables y económicas para alojar sitios estáticos. Al combinarlo con Astro y GitHub Actions, obtenemos despliegues automáticos con cada `git push`.

## Pasos principales

1. **Configurar el repositorio en GitHub**:
   - En *Settings -> Pages*, seleccionar **Source: GitHub Actions**.
2. **Crear el workflow `.github/workflows/deploy.yml`**:
   - Utilizar las acciones oficiales de Astro y GitHub Pages (`actions/deploy-pages`).
3. **Definir `site` y `base` en `astro.config.mjs`**:
   - Asegúrate de incluir la URL correcta de tu dominio o subdirectorio.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install dependencies
        run: npm install
      - name: Build site
        run: npm run build
```

¡Con esta configuración, cada commit que subas a la rama principal actualizará automáticamente tu blog en producción!
