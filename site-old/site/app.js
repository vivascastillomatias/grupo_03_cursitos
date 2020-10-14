const express = require("express");
const path = require("path");
const browserSync = require("browser-sync");

const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/index-bootstrap", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/index-bootstrap.html"));
});

app.get("/detalleProducto", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/detalleProducto.html"));
});

app.get("/carrito", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/carrito.html"));
});

app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/login.html"));
});

app.get("/registro", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/registro.html"));
});

app.listen(port, () => {
    browserSync({
        files: ["./*.js", "./public/*.html", "./public/css/*.css", "./public/img/*.png", "./public/img/*.jpg"],
        online: false,
        open: false,
        port: port + 1,
        proxy: "localhost:" + port,
        ui: false,
    });
    console.log("\x1b[45m%s\x1b[0m", "   Express escuchando en el puerto 3000   ");
    console.log("Browser-Sync escuchando en el puerto 3001");
    console.log("\x1b[45m%s\x1b[0m", "   Express escuchando en el puerto 3000   ");
});
