const clientService = require('../services/clientService');
const MESSAGE = require('../helper/messages.js');

const getClients = async (req, res) => {
  try {
    const clients = await clientService.getAllClients();
    const massage = MESSAGE.CLIENTS(clients);
    res.status(massage.status).json(massage.data);
  } catch (err) {
    console.error(err);
    const massage = MESSAGE.ERROR(err);
    res.status(massage.status).json(massage.data);
  }
};

const getClient = async (req, res) => {
  try {
    const client = await clientService.getAllUsers(res.locals.id);
    const massage = MESSAGE.CLIENTS(client);
    res.status(massage.status).json(massage.data);
  } catch (err) {
    console.error(err);
    const massage = MESSAGE.ERROR(err);
    res.status(massage.status).json(massage.data);
  }
};

const postClient = async (req, res) => {
  try {
    const { name, second_name } = req.body;
    const rezult = await clientService.saveClient(name, second_name);
    const massage = MESSAGE.ADD_CLIENT_SUCCESS(rezult);
    res.status(massage.status).json(massage.data);
  } catch (err) {
    console.error(err);
    const massage = MESSAGE.ERROR(err);
    res.status(massage.status).json(massage.data);
  }
};

const deleteClient = async (req, res) => {
  try {
    const client = await clientService.deleteClient(res.locals.id);
    const massage = MESSAGE.DELETE_SUCCESS(client);
    res.status(massage.status).json(massage.data);
  } catch (err) {
    console.error(err);
    const massage = MESSAGE.ERROR(err);
    res.status(massage.status).json(massage.data);
  }
};

module.exports = { getClients, getClient, postClient, deleteClient };
