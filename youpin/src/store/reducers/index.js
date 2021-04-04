import {
	combineReducers
} from 'redux';

import productReducer from './product/reducer';
import userReducer from './user/reducer';
const reducer = combineReducers({
	user: userReducer,
	product: productReducer
});
export default reducer;