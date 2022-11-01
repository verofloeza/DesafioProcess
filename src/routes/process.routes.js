import express from "express";
import minimist from "minimist";

const routerProcess = express.Router();

routerProcess.get( "/",  (req, res) => {

    res.send(`Argumentos de entrada: ${minimist(process.argv.slice(2))._} <br>
    Nombre de la plataforma: ${process.platform} <br>
    Versión de node.js: ${process.version} <br>
    Memoria total reservada: ${process.memoryUsage().heapTotal} <br>
    Path de ejecución: ${process.execPath} <br>
    Process id: ${process.pid} <br>
    Carpeta del proyecto: ${process.cwd()}
    `)
})

export default routerProcess;