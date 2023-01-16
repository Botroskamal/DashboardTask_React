import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initilaCarName = {name: ''};
const initialFilter = {carStatus: 'All', manufacturer: 'All'};
const initialAuth = { isAuth: false, name: '', email: '' };

const carNameSlice = createSlice({
    name: 'search',
    initialState: initilaCarName,
    reducers: {
        findingCar(state, action) {
            state.name = action.payload
        }
    }
});

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilter,
    reducers: {
        filterByStatus(state, action){
            state.carStatus = action.payload
        },
        filterByManufacturer(state){
            state.manufacturer = action.payload
        }
    }
})

const authSlice = createSlice({
    name: 'Auth',
    initialState: initialAuth,
    reducers: {
        signIn(state, action) {
            state.isAuth = true,
            state.name = action.payload.name,
            state.email = action.payload.email
        },
        signUp(state, action) {
            state.isAuth = true,
            state.name = action.payload.name,
            state.email = action.payload.email
        },
        signOut(state) {
            state.isAuth = false,
            state.name = '',
            state.email = ''
        },
        temp(state,action){
            state = {...state,[ action.payload[0]]:action.payload[1]}
            console.log("from redux actions",action);
        }
    }
})

const store = configureStore({
    reducer: { 
        search: carNameSlice.reducer, 
        Auth: authSlice.reducer,
        Filter: filterSlice.reducer
    }
});

export const carNameActions = carNameSlice.actions;
export const authActions = authSlice.actions;
export const filterActions = filterSlice.actions;


export default store;


// const reducer = (state = { name: '' }, action) => {
//     if(action.type === 'change'){
//         console.log(action.value);
//         return {name: state.name + action.value}
//     }
//     console.log(action.value);
//     return state.name;
// }

// const store = createStore(counterReducer);

// if we have multiple slices so taht we have multiple reducers
/* const store = configureStore({
    reducer: {name: nameSlice.reducer, 
    info: infoSlice.reducer
}
}) */
