
//constants 
const express = require('express'); //llamando a express
const app = express();
const morgan = require('morgan');

//config
//seteamos el puerto siempre que no este previamente definido
app.set('port', process.env.PORT || 3000);
//formateamos el json (opcional)
app.set('json spaces',2);
/*
app.get('/',(req, res)=>{
    res.json(
        {
            "Title":"PRUEBA API 2.0"
        }
    )
})
*/
//routes es la forma mas recomendada de ordenar nuestra api
app.use(require('./routes/index'));

//listening codificamos el listening que es para que nuestro servidor funcione
// y "escuche" el puerto que le hemos indicado

//iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server escuchado en puerto ${app.get('port')}`)
})