import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  route: undefined,
  routeName: undefined,
  routeTitle: undefined
}

const reducer = handleActions({
  ROUTER: {
    SET_ROUTE: (state, { payload: { route } }) => ({ ...state, route }),
    SET_ROUTE_NAME: (state, { payload: { routeName } }) => ({ ...state, routeName }),
    SET_ROUTE_TITLE: (state, { payload: { routeTitle } }) => ({ ...state, routeTitle })
  }
},
  INITIAL_STATE
);

export default reducer;