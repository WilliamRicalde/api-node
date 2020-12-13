const { Router } = require('express');
const router = Router();
const fs = require('fs');

let info = {
    "Name": "William",
    "Lastname": "Huchim"
}

router.get('/', (req, res) => {
    res.json(info)
})

router.post('/', (req, res) => {
    const name = req.body;
    console.log(name);
    res.send('Correcto')
})

module.exports = router;