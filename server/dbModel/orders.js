const { Model } = require('objection');
const db = require('../db/pgKnex.js');
const ClientModel = require('./clients.js');

Model.knex(db);

class OrdersModel extends Model {
  static get tableName() {
    return 'Orders';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'summ', 'client_id'],

      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        client_id: { type: 'number' },
      },
    };
  }
  static get relationMappings() {
    return {
      clients: {
        relation: Model.HasManyRelation,
        modelClass: ClientModel,
        join: {
          from: 'Orders.client_id',
          to: 'Clients.id',
        },
      },
    };
  }
}

module.exports = OrdersModel;
