import { TMain, TOrder, TOrderClients } from '../definitions/main';

export type TState = { main: TMain };

export type TAction =
  | { type: 'SET_LOADING'; payload: TMain['status'] }
  | { type: 'SET_NAVIGATION'; payload: TMain['navigation'] }
  | { type: 'ADD_CLIENTS'; payload: TMain['clients'] }
  | { type: 'ADD_ORDER'; payload: { id: number; data: TOrder[] } }
  | { type: 'ADD_ORDER_WITH_CLIENTS'; payload: TOrderClients[] }
  | { type: 'SET_MODAL'; payload: TMain['modal'] };

export const mainReducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        main: {
          ...state.main,
          status: action.payload,
        },
      };
    case 'SET_NAVIGATION':
      return {
        ...state,
        main: {
          ...state.main,
          navigation: action.payload,
        },
      };
    case 'SET_MODAL':
      return {
        ...state,
        main: {
          ...state.main,
          modal: action.payload,
        },
      };
    case 'ADD_CLIENTS':
      return {
        ...state,
        main: {
          ...state.main,
          clients: action.payload,
          status: 'loaded',
        },
      };
    case 'ADD_ORDER':
      return {
        ...state,
        main: {
          ...state.main,
          orders: {
            ...state.main.orders,
            [action.payload.id]: [...action.payload.data],
          },
        },
      };
    case 'ADD_ORDER_WITH_CLIENTS':
      return {
        ...state,
        main: {
          ...state.main,
          ordersWithClients: action.payload,
          status: 'loaded',
        },
      };

    default:
      return state;
  }
};
