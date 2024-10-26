const db = require('../dbModel/clients.js');

const save = (userModel) => {
  return db
    .query()
    .insert({
      name: userModel.name,
      second_name: userModel.second_name,
    })
    .returning('id');
};

const getById = (id) => {
  return db.query().select('*').where('id', '=', id);
};

const getAll = () => {
  return db.query().select('*');
};

const deleteById = (id) => {
  const idLoc = Number(id);
  return db.query().where('id', '=', idLoc).del();
};

module.exports = { save, getAll, getById, deleteById };
