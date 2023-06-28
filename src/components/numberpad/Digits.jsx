import { useSelector, useDispatch } from "react-redux";
import { allClear, updateHistory, updateCurrent, updateEqualsPressed, setOperation } from "../../actions/calculatorAction";
import calculate from "../../util/evaluate";

const Digits = () => {

    const current = useSelector(state => state.current);
    const history = useSelector(state => state.history);
    const operation = useSelector(state => state.operation);
    const equalsPressed = useSelector(state => state.equalsPressed);
    const dispatch = useDispatch();

    const handleButton = (event) => {
        const value = event.target.innerHTML;

        let newCurrent = '0';

        if (equalsPressed) {
            dispatch(allClear());
            dispatch(updateEqualsPressed(false));
            newCurrent = value;

        } else if (value != '0'){

            if (current == '0') {
                newCurrent = value;
            } else {
                newCurrent = current + value;
            }
        } else {

            if ((current != '0') && (current != '-0')) {
                newCurrent = current + value;
            }
        }

        dispatch(updateCurrent(newCurrent));
    }

    const handleDecimal = () => {
        
        if (equalsPressed) {
            dispatch(allClear());
            dispatch(updateEqualsPressed(false));
            dispatch(updateCurrent('0.'));
        } else if (!current.includes('.')) {
            const newCurrent = current + '.';
            dispatch(updateCurrent(newCurrent));
        }
    }

    const handleEquals = () => {
        dispatch(updateEqualsPressed(true));
        if (operation) {
            const result = calculate([history,current],operation);
            const newHistory = history + operation + current + '=';
            dispatch(setOperation(null));
            dispatch(updateHistory(newHistory));
            dispatch(updateCurrent(result.toString()));
        }
        
    }

    return (
        <div id="digits">
            <button onClick={handleButton} className="uniform-button">7</button>
            <button onClick={handleButton} className="uniform-button">8</button>
            <button onClick={handleButton} className="uniform-button">9</button>

            <button onClick={handleButton} className="uniform-button">4</button>
            <button onClick={handleButton} className="uniform-button">5</button>
            <button onClick={handleButton} className="uniform-button">6</button>

            <button onClick={handleButton} className="uniform-button">1</button>
            <button onClick={handleButton} className="uniform-button">2</button>
            <button onClick={handleButton} className="uniform-button">3</button>

            <button onClick={handleButton} className="uniform-button">0</button>
            <button onClick={handleDecimal} className="uniform-button">.</button>
            <button onClick={handleEquals} className="uniform-button">=</button>
        </div>
    )
}

export default Digits;