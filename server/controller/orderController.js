const orderService = require('../services/orderService.js');
const MESSAGE = require('../helper/messages.js');

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getOrders();

    const massage = MESSAGE.ORDERS(orders);
    res.status(massage.status).json(massage.data);
  } catch (err) {
    console.error(err);
    const massage = MESSAGE.ERROR('Internall error');
    res.status(massage.status).json(massage.data);
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await orderService.getOrderByClient(res.locals.id);
    const massage = MESSAGE.ORDERS(orders);
    res.status(massage.status).json(massage.data);
  } catch (err) {
    console.error(err);
    const massage = MESSAGE.ERROR('Internall error');
    res.status(massage.status).json(massage.data);
  }
};

const postOrder = async (req, res) => {
  try {
    const { name, summ, client_id } = req.body;
    const rezult = await orderService.saveOrder(name, summ, client_id);
    const massage = MESSAGE.ADD_ORDER_SUCCESS(rezult);
    res.status(massage.status).json(massage.data);
  } catch (err) {
    console.error(err);
    const massage = MESSAGE.ERROR('Internall error');
    res.status(massage.status).json(massage.data);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const Order = await orderService.deleteOrder(res.locals.id);
    const massage = MESSAGE.DELETE_SUCCESS(Order);
    res.status(massage.status).json(massage.data);
  } catch (err) {
    console.error(err);
    const massage = MESSAGE.ERROR('Internall error');
    res.status(massage.status).json(massage.data);
  }
};

module.exports = { getOrders, getAllOrders, postOrder, deleteOrder };
