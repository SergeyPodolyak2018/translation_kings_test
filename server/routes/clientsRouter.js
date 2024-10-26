const express = require('express');

const Controller = require('../controller/clientController');
const { checkId } = require('../helper/checker');

const router = express.Router();
router.param('id', checkId);

router.route(`/`).get(Controller.getClients).post(Controller.postClient);

router.route(`/:id`).delete(Controller.deleteClient);

module.exports = router;
