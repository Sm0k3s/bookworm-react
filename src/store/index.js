import {applyMiddleware, createStore,} from 'redux';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from '../reducers';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk)),
);