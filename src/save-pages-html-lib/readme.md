# Proyecto de Descarga de Archivos HTML

Este proyecto es una utilidad de línea de comandos que permite descargar archivos HTML desde URLs específicas y guardarlos en el directorio de salida. Además, se incluye un retraso configurable entre cada descarga. A continuación, se describen los componentes principales del proyecto:

## Configuracion del entorno

1. Instalar las dependencias:

```
npm i
```

## Uso

1. En la carpeta "config", en el archivo "url-to-download.json", debes agregar un array con las url que deseas descargar. (Las url entre comillas, como string)

2. Después, para iniciar el proyecto, ejecuta:

```
npm start
```

Esto automaticamente comenzara a descargar las url

## Configuraciones personalizadas

En la carpeta `config`, encontrarás dos archivos de configuración:

### `config.json`

Este archivo contiene la configuración del tiempo de espera (en segundos) entre cada descarga. Puedes ajustar este valor según tus necesidades.

El mismo, se encuentra en el campo `secondsToWaitBetweenDownloads`. Por defecto el valor es de 10 segundos por defecto, puedes modificarlo a tu antojo.

## Nombre de archivos descargados

### Por defecto

Por defecto se utilizará una estrategia predeterminada para generar un nombre de archivo. En este caso, la estrategia predeterminada es eliminar caracteres especiales de la URL y guardar el archivo con ese nombre.

Ejemplo:
Supongamos estamos descargando el contenido de la pagina `https://www.example.com/page#section`

Se procedera a elimaninar los caracteres especiales, quednado `httpswwweamplecompagesection`

Y se guardara la pagina en un archivo `httpswwweamplecompagesection.html`

## Guardar paginas con nombres de Archivos Personalizados

En el archivo `customFileName.ts`, puedes definir condiciones personalizadas para nombrar archivos descargados en función de características específicas de la URL.

Aquí hay una guía sobre cómo hacerlo

# TODO

Me tengo que ir a dormir, pero dejo una explicacion a mejorar despues

Es un array que tiene la forma

```
{
    id: string
    condition: (url: string) => boolean;
    getCustomName: (...args: any[]) => string;
}
```

La movida es que asignas un id a cada customName

Luego una condicion que chequea la url y se fija si aplica a esa url la forma de definir el nombre que estamos definiendo

Y luego la forma de hacerlo

Ejemplo:

Este customName aplica solo a la pagina meetup.com

```

        id: "isMeetup",
        condition: (url) => {
            return url.includes("meetup.com")
        },
        getCustomName: (url) => {
            const postMeetupPart: string = url.replace(/.*meetup\.com\//, "");
            const cleanPostMeetupPart = postMeetupPart.replace(/[\/\\]/g, '');
            return cleanPostMeetupPart;
        }
```
