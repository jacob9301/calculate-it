import { useSelector, useDispatch } from "react-redux";

const Operations = () => {

    const current = useSelector(state => state.current);
    const operation = useSelector(state => state.operation);
    const dispatch = useDispatch();

    const handleOperation = (event) => {
        const op = event.target.innerHTML;
        
    }

    return (
        <div id="operations">
            <button id="delete" className="uniform-button">÷</button>
            <button id="delete" className="uniform-button">x</button>
            <button id="delete" className="uniform-button">-</button>
            <button id="delete" className="uniform-button">+</button>
        </div>
    )
}

export default Operations;