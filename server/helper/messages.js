const statusIndex = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  DUPLICATE: 422,
  UNAUTORIZED: 401,
  FORBIDDEN: 403,
  DELETED: 204,
  TO_MANY_REQUEST: 429,
  ERROR: 500,
};

const MESSAGE = {
  ERROR: (data) => {
    return {
      status: statusIndex.ERROR,
      data: {
        error: data,
      },
    };
  },
  ADD_CLIENT_SUCCESS: (data) => {
    return {
      status: statusIndex.CREATED,
      data: {
        client: data,
      },
    };
  },
  ADD_ORDER_SUCCESS: (data) => {
    return {
      status: statusIndex.CREATED,
      data: {
        order: data,
      },
    };
  },
  DELETE_SUCCESS: (data) => {
    return {
      status: statusIndex.DELETED,
      data: {
        result: data,
      },
    };
  },

  CLIENTS: (data) => {
    return {
      status: statusIndex.OK,
      data: {
        clients: data,
      },
    };
  },
  ORDERS: (data) => {
    return {
      status: statusIndex.OK,
      data: {
        orders: data,
      },
    };
  },
};
module.exports = MESSAGE;
