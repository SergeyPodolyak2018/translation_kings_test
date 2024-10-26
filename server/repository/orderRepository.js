const db = require('../dbModel/orders.js');

const save = (model) => {
  return db
    .query()
    .insert({
      name: model.name,
      summ: model.summ,
      client_id: model.client_id,
    })
    .returning('id');
};

const getByClient = (id) => {
  return db.query().select('*').where('client_id', '=', id);
};

const getAll = () => {
  return db.query().select('*');
};
const getAllWithClients = () => {
  return db
    .query()
    .select(
      'Orders.id',
      'Orders.name',
      'Orders.summ ',
      'Clients.name as client_name',
      'Clients.second_name as client_second_name'
    )
    .leftJoin('Clients', 'Clients.id', '=', 'Orders.client_id');
};

const deleteById = (id) => {
  const idLoc = Number(id);
  return db.query().where('id', '=', idLoc).del();
};

module.exports = { save, getAll, getByClient, deleteById, getAllWithClients };
