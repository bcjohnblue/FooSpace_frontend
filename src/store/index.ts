import { createStore } from 'redux';

import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export type StoreRootState = ReturnType<typeof rootReducer>;
export default store;
