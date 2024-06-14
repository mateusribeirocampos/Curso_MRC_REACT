import { useState } from "react";

const Events1 = () => {
    const [backgroundColor, setColor] = useState ('#c3c3c3');
    
    const handleClickBackground = () => {
        setColor(ChangeColor(backgroundColor));
    };

    const ChangeColor = (currentBackColor) => {
        if(currentBackColor === '#c3c3c3'){
            return 'gray';
        } else if (currentBackColor === 'gray'){
            return '#2596be';
        } else if (currentBackColor === '#2596be') {
            return '#c3c3c3';
        }
    }
    
    return (
        <div>
            <h2>Clique no botão para ver a mudança de cor do background</h2>
            <button onClick={handleClickBackground}style={{ backgroundColor}}>Background color</button>
        </div>
    )


};

export default Events1;