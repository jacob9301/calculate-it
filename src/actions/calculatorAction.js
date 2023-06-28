export const allClear = () => ({
    type: 'ALL_CLEAR'
});

export const updateEqualsPressed = (bool) => ({
    type: 'UPDATE_EQUALS_PRESSED',
    payload: bool
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
    type: 'UPDATE_HISTORY',
    payload: newHistory
})