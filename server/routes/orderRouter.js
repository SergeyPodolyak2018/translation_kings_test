const express = require('express');
const Controller = require('../controller/orderController.js');
const { checkId } = require('../helper/checker.js');

const router = express.Router();
router.param('id', checkId);

router.route(`/`).get(Controller.getAllOrders).post(Controller.postOrder);
router.route(`/:id`).delete(Controller.deleteOrder);
router.route(`/client/:id`).get(Controller.getOrders);

module.exports = router;
