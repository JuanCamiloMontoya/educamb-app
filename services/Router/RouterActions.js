import { createActions } from 'redux-actions';

export const { router } = createActions({
  ROUTER: {
    SET_ROUTE: (route) => ({ route }),
    SET_ROUTE_NAME: (routeName) => ({ routeName }),
    SET_ROUTE_TITLE: (routeTitle) => ({ routeTitle })
  }
})