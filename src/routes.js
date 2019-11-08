const express = require('express');

const PiadaController = require('./piadaController');
const router = express.Router();


router.get('/piadas',PiadaController.index);
router.post('/piadas', PiadaController.store);
router.delete('/piadas', PiadaController.delete);

module.exports = router;