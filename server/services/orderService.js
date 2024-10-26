const orderRepository = require('../repository/orderRepository.js');

const OrderModel = require('../models/orders.js');

const getOrderById = async (id) => {
  return orderRepository.getById(id);
};
const getOrders = async () => {
  return orderRepository.getAllWithClients();
};

const saveOrder = async (name, summ, client_id) => {
  const client = new OrderModel(name, summ, client_id);
  const rez = await orderRepository.save(client);
  return rez;
};

const getOrderByClient = (id) => {
  return orderRepository.getByClient(id);
};
const deleteOrder = (id) => {
  return orderRepository.deleteById(id);
};

module.exports = {
  getOrderById,
  saveOrder,
  getOrderByClient,
  deleteOrder,
  getOrders,
};
