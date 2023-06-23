const initialState = {
    current: '0',
    history: '0',
    operation: null
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'UPDATE_CURRENT' :
            return {
                ...state,
                current: action.payload
            };
        
        case 'ALL_CLEAR' :
            return {
                initialState
            };
        
        case 'SET_OPERATION' :
            return {
                ...state,
                operation: action.payload
            };

        case 'CALCULATE_IT' :
            return {
                ...state
            };

        default:
            return state;
    }

}

export default rootReducer;