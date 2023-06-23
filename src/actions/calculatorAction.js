export const allClear = () => ({
    type: 'ALL_CLEAR'
});

export const calculateIt = () => ({
    type: 'CALCULATE_IT'
})

export const updateCurrent = (newCurrent) => ({
    type: 'UPDATE_CURRENT',
    payload: newCurrent
})

export const setOperation = (operation) => ({
    type: 'SET_OPERATION',
    payload: operation
})

export const updateHistory = (newHistory) => ({
    type: 'UPDATE_CURRENT',
    payload: newHistory
})