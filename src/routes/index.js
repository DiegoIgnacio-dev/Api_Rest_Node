const {Router} = require('express');
const router = Router();

//Raiz
router.get('/', (req,res)=>{
    res.json(
        {
            "Tittle":"Prueba API desde una ruta"
        }
    )
})
module.exports = router;