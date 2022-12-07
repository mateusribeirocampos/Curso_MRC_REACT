const Challenge = () => {
    const valor1 = 25
    const valor2 = 50

  return (
    <div>
        <button onClick={() => console.log(valor1 + valor2)}>
            click no botão para saber a soma de 25 + 50!!!
        </button>
    </div>
  )
}

export default Challenge