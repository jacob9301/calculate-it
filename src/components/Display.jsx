import { useSelector } from 'react-redux';

const Display = () => {

    const current = useSelector(state => state.current);
    const history = useSelector(state => state.history);

    return (
        <div id="display">
            <div id="history" className="disp">
                {history}
            </div>
            <div id="main-display" className="disp">
                {current}
            </div>
        </div>
    )
}

export default Display;