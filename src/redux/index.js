
const initialState = {
    no: 1,
    idKuis : 1,
    benar: 0
};

export const reducer = (state = initialState, action) => {
    if(action.type === 'SET_NO'){
        return {
            ...state,
            no: action.value
        }
    }
    if(action.type === 'SET_IDKUIS'){
        return {
            ...state,
            idKuis: action.value
        }
    }
    if(action.type === 'SET_BENAR'){
        return {
            ...state,
            benar: action.value
        }
    }
    if(action.type === 'RESET'){
        return initialState; 
    }
    return state;
}
