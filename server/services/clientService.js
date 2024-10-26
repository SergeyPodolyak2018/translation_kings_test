const clientsRepository = require('../repository/clientsRepository.js');

const ClientModel = require('../models/clients.js');

const getClientById = async (id) => {
  return clientsRepository.getById(id);
};

const saveClient = async (name, second_name) => {
  const client = new ClientModel(name, second_name);
  const rez = await clientsRepository.save(client);
  return rez;
};

const getAllClients = () => {
  return clientsRepository.getAll();
};
const deleteClient = (id) => {
  return clientsRepository.deleteById(id);
};

module.exports = { getClientById, saveClient, getAllClients, deleteClient };
