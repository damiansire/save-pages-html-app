import axios from 'axios';
import fs from 'fs';
import path from 'path';
import UrlsToDownload from "./config/url-to-download.json";
import { customsFilesName } from "./config/customFileName";
import { removeSpecialCharactersFromUrl } from './libs/urlHandler'; // Replace with the actual path to your module file
import { secondsToWaitBetweenDownloads } from "./config/config.json"


const getOutputPath = (fileName: string) => {
    const outputDir = 'output'; // Carpeta de salida
    const outputFile = `${fileName}.html`; // Nombre del archivo de salida

    // Crear la carpeta de salida si no existe
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, outputFile); // Ruta completa del archivo de salida
    return outputPath;
}

const getFileName = (url: string) => {
    for (const customFileName of customsFilesName) {
        console.log("Evaluando condicion de nombre: ", customFileName.id)
        if (customFileName.condition(url)) {
            const customName: string = customFileName.getCustomName(url)
            console.log("Custom name obtenido:", customName)
            return customName;
        }
    }
    const genericName = removeSpecialCharactersFromUrl(url)
    return genericName;
}

// Función para limpiar el directorio de salida
const clearOutputDirectory = () => {
    const outputDir = 'output';

    if (fs.existsSync(outputDir)) {
        const files = fs.readdirSync(outputDir);

        for (const file of files) {
            const filePath = path.join(outputDir, file);
            fs.unlinkSync(filePath); // Elimina el archivo
        }

        console.log(`Contenido del directorio ${outputDir} eliminado.`);
    }
}

clearOutputDirectory();

const downloadHtml = (urlToDownload: string) => {
    axios.get(urlToDownload)
        .then((response: any) => {
            const fileName: string = getFileName(urlToDownload)
            const outputPath = getOutputPath(fileName)
            fs.writeFileSync(outputPath, response.data);
            console.log(`Archivo HTML descargado y guardado como ${outputPath}`);
        })
        .catch((error: any) => {
            console.error('Error al descargar el archivo HTML:', error);
        });
}


for (const urlToDownload of UrlsToDownload) {
    downloadHtml(urlToDownload);
}
