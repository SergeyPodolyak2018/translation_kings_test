const { Model } = require('objection');
const db = require('../db/pgKnex.js');

Model.knex(db);

class ClientslModel extends Model {
  static get tableName() {
    return 'Clients';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'second_name'],

      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        second_name: { type: 'string' },
      },
    };
  }
}

module.exports = ClientslModel;
