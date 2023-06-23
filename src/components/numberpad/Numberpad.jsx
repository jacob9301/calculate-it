import Digits from "./Digits";
import Operations from "./Operations";
import { useSelector, useDispatch } from "react-redux";
import { allClear, updateCurrent } from "../../actions/calculatorAction";

const Numberpad = () => {

    const current = useSelector(state => state.current);
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(allClear());
    }

    const handleDelete = () => {
        let newCurrent = '0';

        if (current.length > 1) {
            newCurrent = current.slice(0, -1);
        }

        dispatch(updateCurrent(newCurrent));
    }

    return (
        <div id="numberpad">
            <div id="topbar">
                <button onClick={handleClear} id="clear" className="top-button">AC</button>
                <button onClick={handleDelete} id="delete" className="uniform-button top-button">←</button>
            </div>
            <div id="mainpad">
                <Digits />
                <Operations />
            </div>
        </div>
    )
}

export default Numberpad;