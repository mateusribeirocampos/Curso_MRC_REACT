const PropKey = () => {

  return (
    <div>
        <ul>
            <li>Iterar listas sem a propriedade key nos gera um warning, podemos verificar isso no console;</li>
            <li>O react precisa de uma chave única em cada un dos itens iterados;</li>
            <li>Isso serve para ajudá-lo na renderização do componente;</li>
            <li>Geralmente teremos um array de objetos e podemos colocar key como alguma chave única, como o id de algum dado;</li>
            <li>Em último caso devemos utilizar o index do método map;</li>
        </ul>
    </div>
  );
};

export default PropKey