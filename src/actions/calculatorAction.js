export const allClear = () => ({
    type: 'ALL_CLEAR'
});

export const calculateIt = () => ({
    type: 'CALCULATE_IT'
})

export const updateCurrent = (input) => ({
    type: 'UPDATE_CURRENT',
    payload: input
})

export const setOperation = (operation) => ({
    type: 'SET_OPERATION',
    payload: operation
})