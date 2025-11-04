# Web Moto Sport La Roca (React + Vite)

Proyecto creado como scaffold para replicar la página mostrada en la imagen. Incluye componentes React y estilos básicos.

Pasos para ejecutar:

1. Instalar dependencias

```bash
npm install
```

2. Iniciar servidor de desarrollo

```bash
npm run dev
```

3. Construir para producción

```bash
npm run build
npm run preview
```

Notas:

- Las imágenes usadas en el scaffold son externas (Unsplash). Reemplaza por tus assets en `public/` o `src/assets` según prefieras.
- Los componentes están en `src/components`. Puedes dividir, tipar con TypeScript, o añadir rutas según convenga.
- Las imágenes usadas en el scaffold son externas (Unsplash). Reemplaza por tus assets en `public/` o `src/assets` según prefieras.
- Para uso offline de la tipografía Montserrat: coloca los archivos .woff2 en `public/assets/fonts/` con los nombres:
  - `Montserrat-Regular.woff2`
  - `Montserrat-Medium.woff2`
  - `Montserrat-Bold.woff2`
  - `Montserrat-ExtraBold.woff2`
    Después de colocar esos archivos, la aplicación cargará la fuente localmente (no necesita Google Fonts).

## Instagram en “Eventos y noticias”

La sección `EVENTOS Y NOTICIAS` puede mostrar automáticamente las últimas publicaciones de Instagram del perfil. Para habilitarlo:

1. Crea un archivo `.env.local` en la raíz del proyecto (puedes copiar `.env.example`).
2. Agrega tu token de acceso de Instagram (Basic Display o Graph):

```
VITE_IG_TOKEN=TU_TOKEN_LARGO_AQUI
```

3. Reinicia el servidor de desarrollo.

La app solicitará a `https://graph.instagram.com/me/media` los últimos posts y mostrará los 4 más recientes. Si no hay token o falla la carga, verás tarjetas de ejemplo.

Importante:

- No compartas el token ni lo subas al repo.
- Considera usar un token de larga duración y renovarlo cuando caduque.
