const Events = () => {
    const handleMyEvent = () => {
        console.log("Ribeiro");
    }
  return (
    <div>
        <div>
            <button onClick={() => console.log("Mateus")}>
                Click aqui!
            </button>
        </div>
        <button onClick={handleMyEvent}>Clique aqui então!</button>
    </div>
  )
}

export default Events