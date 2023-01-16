import { createStore } from 'redux';

const reducer = (state = { name: '' }, action) => {
    if(action.type === 'change'){
        console.log(action.value);
        return {name: state.name + action.value}
    }
    console.log(action.value);
    return state.name;
}

const store = createStore(reducer);


export default store;