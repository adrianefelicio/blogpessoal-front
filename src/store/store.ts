//container que gerencia todos os estados da minha Action
import { createStore } from 'redux'
import { tokenReducer } from './tokens/tokensReducer';

const store = createStore(tokenReducer);

export default store;
