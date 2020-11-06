import shoe2 from './images/0004.jpg';

export const initialState = {
    basket:[],
    user:null,
}

const reducer = (state, action) => {
    console.log("From reducer:- ", "\nState:",state,"\nAction:",action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return {...state, basket: [...state.basket, action.item]};
        case "REMOVE_FROM_BASKET":
            return {...state, basket: state.basket.filter(item => item.id !== action.id)};
        default:
            return {...state};
    }
}

export default reducer;