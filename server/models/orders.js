class OrderModel {
  name;
  summ;
  client_id;
  constructor(name, summ, client_id) {
    this.name = name;
    this.summ = summ;
    this.client_id = client_id;
  }
}

module.exports = OrderModel;
