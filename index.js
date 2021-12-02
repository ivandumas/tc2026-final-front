//Importando la biblioteca para realizar aplicaciones web
const express = require("express")
const path = require("path")

//Creación de la aplicación web
const app = express();

//Middleware
app.use(express.static(path.join(__dirname,'public')))
//Configurar el servidor y que sepa que es un json
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Atender una petición del recurso mipagina
app.get('/mipagina',(request,response)=>{
    response.sendFile(path.join(__dirname,'views','index.html'))
})

//Que la aplicación escuche peticiones
app.listen(8083,()=>{
        console.log("Aplicación web en línea en el puerto 8083")
    })
