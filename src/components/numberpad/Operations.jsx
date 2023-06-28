import { useSelector, useDispatch } from "react-redux";
import calculate from "../../util/evaluate";
import { updateCurrent, updateHistory, setOperation, updateEqualsPressed } from "../../actions/calculatorAction";

const Operations = () => {

    const current = useSelector(state => state.current);
    const operation = useSelector(state => state.operation);
    const history = useSelector(state => state.history);
    const equalsPressed = useSelector(state => state.equalsPressed);
    const dispatch = useDispatch();

    const handleOperation = (event) => {
        const newOperation = event.target.innerHTML;

        if(equalsPressed) {
            dispatch(updateEqualsPressed(false));
            dispatch(updateHistory(current));

        } 
        
        if (operation) {
            const result = calculate([history,current],operation);

            dispatch(updateHistory(result.toString()));
            dispatch(updateCurrent('0'));
            dispatch(setOperation(newOperation));
        } else {
            dispatch(updateHistory(current));
            dispatch(setOperation(newOperation));
            dispatch(updateCurrent('0'));
        }
        
    }

    return (
        <div id="operations">
            <button id="delete" onClick={handleOperation} className="uniform-button">÷</button>
            <button id="delete" onClick={handleOperation} className="uniform-button">×</button>
            <button id="delete" onClick={handleOperation} className="uniform-button">-</button>
            <button id="delete" onClick={handleOperation} className="uniform-button">+</button>
        </div>
    )
}

export default Operations;