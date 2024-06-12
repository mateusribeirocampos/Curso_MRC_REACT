const Events = () => {

    const handleMyEvent = () => {
        console.log("Ativou o evento!");
    };

    const renderSomething = (x) => {

        if(x)
            {
                return <h1>Renderiza a primeira condição</h1>
            }
            else{
                return <h1>Renderiza a segundo condição</h1>
            }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <div>
                    <h2>Segundo botão para eventos</h2>
                </div>
            </div>
            <div>
                <div>
                    <button onClick={() => console.log("clicou!")}>Clique aqui Também</button>
                </div>
            </div>
            <div>
                <div>
                    <h2>Terceiro botão de eventos</h2>
                    <button onClick={() => {
                        console.log("Isso não deveria existir =)")
                    }}>Clique aqui pela terceira vez!</button>
                </div>
            </div>
            {renderSomething(false)}
        </div>
    );
};

export default Events;