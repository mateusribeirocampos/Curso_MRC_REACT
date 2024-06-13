import { useState } from 'react';

const Events = () => {
    const [color, setColor] = useState('red');

    const handleClick = () => {
        setColor(ChangeColor(color));
    };

    const ChangeColor = (currentColor) => {
        if (currentColor === 'red') {
            return 'blue';
        } else if (currentColor === 'blue') {
            return 'yellow';
        } else {
            return 'red';
        }
    };

    return (
        <div>
            <h2>Para verificar a mudança clique no botão abaixo</h2>
            <button onClick={handleClick} style={{ color }}>
                Click here!
            </button>
        </div>
    );
};

export default Events;