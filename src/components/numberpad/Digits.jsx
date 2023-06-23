import { useSelector, useDispatch } from "react-redux";
import { updateCurrent, calculateIt } from "../../actions/calculatorAction";

const Digits = () => {

    const current = useSelector(state => state.current);
    const dispatch = useDispatch();

    const handleButton = (event) => {
        const value = event.target.innerHTML;

        let newCurrent = '0';
        
        if (value != '0'){

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
        
        if (!current.includes('.')) {
            const newCurrent = current + '.';
            dispatch(updateCurrent(newCurrent));
        }
    }

    const handleEquals = () => {
        dispatch(calculateIt());
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