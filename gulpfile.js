import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import { src, dest, watch, series } from 'gulp';
import browserSync from 'browser-sync';

const sass = gulpSass(dartSass);
const bs = browserSync.create();

// Compilar Sass
export function css() {
  console.log("📦 Compilando Sass...");
  return src('sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('static/css'))
    .pipe(bs.stream()); // Inyectar CSS en vivo
}

// Servidor con BrowserSync
export function serve() {
  bs.init({
    proxy: 'localhost:8000', // Django en este puerto
    port: 3000,               // accede a través de este
    open: true,               // abre navegador automáticamente
    notify: false,            // sin popup en la esquina
  });

  // Vigilar cambios en Sass
  watch('sass/**/*.scss', css);

  // Vigilar cambios en plantillas
  watch('**/templates/**/*.html').on('change', bs.reload);
}

// Tarea por defecto
export default series(css, serve);
    