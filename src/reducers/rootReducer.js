const initialState = {
    current: '0',
    history: '0',
    operation: null,
    equalsPressed: false
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
                ...initialState
            };
        
        case 'SET_OPERATION' :
            return {
                ...state,
                operation: action.payload
            };

        case 'UPDATE_EQUALS_PRESSED' :
            return {
                ...state,
                equalsPressed: action.payload
            };

        case 'UPDATE_HISTORY' :
            return {
                ...state,
                history: action.payload
            }

        default:
            return state;
    }

}

export default rootReducer;