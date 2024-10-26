import CONSTANTS from '../constants/constants';
import { TClient, TOrder, TOrderClients } from '../definitions/main';

class RestAPI {
  private readonly base_uri: string;

  constructor() {
    this.base_uri = CONSTANTS.baseUri;
  }

  async getClients(): Promise<{ clients: TClient[] }> {
    return await fetch(`${this.base_uri}${CONSTANTS.clients}`)
      .then((res) => res.json())
      .catch((err) => {
        return Promise.reject(err);
      });
  }
  async getAllOrders(): Promise<{ orders: TOrderClients[] }> {
    return await fetch(`${this.base_uri}${CONSTANTS.orders}`)
      .then((res) => res.json())
      .catch((err) => {
        return Promise.reject(err);
      });
  }
  async getOrders(clientId: number): Promise<{ orders: TOrder[] }> {
    return await fetch(
      `${this.base_uri}${CONSTANTS.orders_by_client}/${clientId}`
    )
      .then((res) => res.json())
      .catch((err) => {
        return Promise.reject(err);
      });
  }
  async postClient(data: Omit<TClient, 'id'>): Promise<{ clients: TClient[] }> {
    return await fetch(`${this.base_uri}${CONSTANTS.clients}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => {
        return Promise.reject(err);
      });
  }
  async postOrder(data: Omit<TOrder, 'id'>): Promise<{ order: TOrder[] }> {
    return await fetch(`${this.base_uri}${CONSTANTS.orders}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => {
        return Promise.reject(err);
      });
  }
}

const restApi = new RestAPI();
export default restApi;
