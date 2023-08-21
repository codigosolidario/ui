# UI - Microfront de Código Solidario

## Introducción

En este repositorio se encuentra el módulo principal del front-end de la aplicación, desarrollado utilizando React y Vite. A continuación, se encontrarán instrucciones detalladas sobre la instalación, configuración de paquetes, ejecución del proyecto y una descripción general de la arquitectura de carpetas en src/pages.

## Instalación

Para configurar y ejecutar el proyecto UI del microfront de CódigoSolidario, siga los siguientes pasos:

### Requisitos Previos

Asegúrese de tener instalada la versión 18.13.0 de Node.js en su sistema. Puede descargarla desde [nodejs.org](https://nodejs.org/).

### Clonar el Repositorio

Clone este repositorio en su máquina local utilizando el siguiente comando:

```bash
git clone https://github.com/codigosolidario/ui.git
```

Luego, navegue al directorio del proyecto:

```bash
cd ui
```

### Instalar Dependencias

Instale las dependencias del proyecto utilizando npm:

```bash
npm install
```

## Configuración y Ejecución

Una vez que las dependencias estén instaladas, puede configurar y ejecutar el proyecto de la siguiente manera:

### Configuración de Variables de Entorno

1. Duplique el archivo `.env.example` ubicado en el mismo directorio y renómbrelo como `.env`.
2. Configure las variables de entorno necesarias en el archivo `.env` según los requisitos del proyecto.

### Ejecución en Modo de Desarrollo

Utilice el siguiente comando para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Esto lanzará la aplicación en modo de desarrollo y abrirá automáticamente una ventana del navegador que mostrará la aplicación en ejecución. La aplicación se actualizará automáticamente cada vez que realice cambios en el código fuente.

## Arquitectura

La estructura de carpetas del proyecto está organizada en el directorio `src/pages`. A continuación, se presenta una descripción de esta estructura:

- `src/pages`: Este directorio alberga las páginas de la aplicación. Cada subdirectorio representa una página individual.
  - `Home`: Ejemplo de un directorio de página que contiene componentes y archivos relacionados con la página de inicio.
    - `Home.js`: Archivo principal de la página de inicio.
    - `components`: Directorio opcional para componentes específicos de esta página.
  - `About`: Otro ejemplo de directorio de página.

Esta organización facilita la navegación y localización de archivos dentro del proyecto.
