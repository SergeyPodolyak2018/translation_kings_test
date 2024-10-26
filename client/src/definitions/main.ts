export type TMain = {
  status: 'loading' | 'loaded';
  navigation: 'clients' | 'orders';
  clients: TClient[];
  modal: 'client' | 'order' | 'none';
  orders: {
    [key: number]: TOrder[];
  };
  ordersWithClients: TOrderClients[];
};

export type TClient = {
  id: number;
  name: string;
  second_name: string;
};
export type TOrder = {
  id: number;
  name: string;
  summ: number;
  client_id: number;
};
export type TOrderClients = {
  id: number;
  name: string;
  summ: number;
  client_id: number;
  client_name: string;
  client_second_name: string;
};
