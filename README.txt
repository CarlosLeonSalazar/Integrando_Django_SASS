Anteproyecto – Modelo de integración Django – SASS

El presente es solo la estructura previa para desarrollo de proyecto mediante Django y SASS

python 3.12.5

Django requirements:

asgiref==3.8.1
Django==5.2.1
sqlparse==0.5.3
tzdata==2025.2

Dependencias de desarrollo SASS

  "browser-sync": "^3.0.4",
    "gulp": "^5.0.0",
    "gulp-clean-css": "^4.3.0",
    "gulp-rename": "^2.0.0",
    "gulp-sass": "^6.0.1",
    "gulp-sourcemaps": "^3.0.0",
    "gulp-uglify": "^3.0.2",
    "sass": "^1.87.0"


Ejecutar en 2 terminales:

- python manage.py runserver

- npm run serve

Estructura a modo orientativo – SASS y Django

mi_proyecto/
│
├── manage.py
├── .env
├── requirements.txt
├── README.md
│
├── mi_proyecto/              # Configuración principal de Django
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
│
├── static/                   # Archivos estáticos compilados
│   └── css/
│       └── main.css          # Generado por Sass
│
├── sass/                     # Archivos fuente Sass
│   ├── base/
│   │   └── _variables.scss
│   │   └── _mixins.scss
│   ├── components/
│   │   └── _navbar.scss
│   ├── pages/
│   │   └── _home.scss
│   └── main.scss             # Archivo principal que importa todo
│
├── media/                    # Archivos cargados por usuarios
│
├── templates/                # Plantillas HTML base
│   └── base.html
│
├── apps/                     # Aplicaciones internas de Django
│   └── core/
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── views.py
│       ├── urls.py
│       ├── forms.py
│       ├── tests.py
│       └── templates/
│           └── core/
│               └── home.html