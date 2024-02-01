const router = require("express").Router()
const clientService = require("../service/clientService")

router.post('/client', clientService.createClient)

router.get('/client/:id?', clientService.getClientById)

router.put('/client/:id', clientService.updateClient)

router.delete('/client/:id', clientService.deleteClient)



module.exports = router