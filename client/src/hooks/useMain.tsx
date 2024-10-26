import React from 'react';

import { AppContext } from '../store/store';
import restApi from '../api/rest';
import { TMain } from '../definitions/main';

export function useMain() {
  const globalState = React.useContext(AppContext);
  const { state, dispatch } = globalState;

  React.useEffect(() => {
    dispatch({
      type: 'SET_LOADING',
      payload: 'loading',
    });
    if (state.main.navigation === 'clients') getClients();
    if (state.main.navigation === 'orders') getAllOrders();
  }, [state.main.navigation]);

  const changeNavigation = (nav: TMain['navigation']) => {
    dispatch({
      type: 'SET_NAVIGATION',
      payload: nav,
    });
  };

  const getClients = () => {
    restApi.getClients().then((data) => {
      dispatch({
        type: 'ADD_CLIENTS',
        payload: data.clients,
      });
    });
  };

  const getAllOrders = () => {
    restApi.getAllOrders().then((data) => {
      dispatch({
        type: 'ADD_ORDER_WITH_CLIENTS',
        payload: data.orders,
      });
    });
  };

  const getOrders = (id: number) => {
    restApi.getOrders(id).then((data) => {
      dispatch({
        type: 'ADD_ORDER',
        payload: { id, data: data.orders },
      });
    });
  };
  const openModal = (target: TMain['modal']) => {
    dispatch({
      type: 'SET_MODAL',
      payload: target,
    });
  };
  const createClient = async (data: { name: string; second_name: string }) => {
    dispatch({
      type: 'SET_MODAL',
      payload: 'none',
    });

    await restApi.postClient({
      name: data.name,
      second_name: data.second_name,
    });
    restApi.getClients().then((data) => {
      dispatch({
        type: 'ADD_CLIENTS',
        payload: data.clients,
      });
    });
  };
  const createOrder = async (data: {
    name: string;
    summ: string;
    client_id: string;
  }) => {
    dispatch({
      type: 'SET_MODAL',
      payload: 'none',
    });

    await restApi.postOrder({
      name: data.name,
      summ: Number(data.summ),
      client_id: Number(data.client_id),
    });
    restApi.getAllOrders().then((data) => {
      dispatch({
        type: 'ADD_ORDER_WITH_CLIENTS',
        payload: data.orders,
      });
    });
  };

  return {
    ...state.main,
    getOrders,
    changeNavigation,
    openModal,
    createClient,
    createOrder,
  };
}
