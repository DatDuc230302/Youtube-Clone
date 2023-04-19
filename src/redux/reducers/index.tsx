import { combineReducers } from 'redux';
import menuShow from './menuShow';
import menuFade from './menuFade';
import menuLayout from './menuLayout';
import alert from './alert';

export const allReducers = combineReducers({
    menuFade,
    menuShow,
    menuLayout,
    alert,
});
