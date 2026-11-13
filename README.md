# Gestión de Incidencias

Aplicación web simple para registrar y listar incidencias, desarrollada como actividad de SCM (Gestión de la Configuración de Software) en la UNEMI.

## Integrantes
- Anthony Pataron
- Jordy Vergara
- Hector Tenelema

## Descripción
Permite registrar incidencias (título, descripción, prioridad) y ver el listado con su estado. Los datos se guardan en el navegador mediante `localStorage`.

## Cómo ejecutarlo
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/TU_USUARIO/gestion-incidencias.git
   ```
2. Entrar a la carpeta del proyecto:
   ```bash
   cd gestion-incidencias
   ```
3. Abrir `index.html` en el navegador (doble clic, o con la extensión Live Server de VS Code).

## Versiones
- `v1.0.0`: registro y listado de incidencias.
- `v1.1.0`: filtro de incidencias por estado.
- `v1.1.1`: corrección de error en el filtro.

## Flujo de trabajo
Ramas `feature/*` y `fix/*`, integradas a `main` mediante Pull Requests. Despliegue automático a GitHub Pages con GitHub Actions.
