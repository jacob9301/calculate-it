const Numberpad = () => {
    return (
        <div id="numberpad">
            <div id="topbar">
                <button id="clear" className="top-button">AC</button>
                <button id="delete" className="uniform-button top-button">←</button>
            </div>
            <div id="mainpad">
                <div id="digits">
                    <button className="uniform-button">7</button>
                    <button className="uniform-button">8</button>
                    <button className="uniform-button">9</button>

                    <button className="uniform-button">4</button>
                    <button className="uniform-button">5</button>
                    <button className="uniform-button">6</button>

                    <button className="uniform-button">1</button>
                    <button className="uniform-button">2</button>
                    <button className="uniform-button">3</button>

                    <button className="uniform-button">0</button>
                    <button className="uniform-button">.</button>
                    <button className="uniform-button">=</button>
                </div>
                <div id="operations">
                    <button id="delete" className="uniform-button">÷</button>
                    <button id="delete" className="uniform-button">x</button>
                    <button id="delete" className="uniform-button">-</button>
                    <button id="delete" className="uniform-button">+</button>
                </div>
            </div>
        </div>
    )
}

export default Numberpad;