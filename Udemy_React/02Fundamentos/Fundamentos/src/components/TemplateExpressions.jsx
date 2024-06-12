const TemplateExpression = () => {

    const name = "Mateus";
    const data = {
        age: 43,
        job: "Programmer",
    };

    return (
        <div>
            <h1> Olá, {name}, tudo bem?</h1>
            <h3>Você atua como: {data.job}</h3>
            <h3>Qual a sua idade {data.age} anos</h3>
            <p>{85 + 36}</p>
            <p>{console.log("Hello World!")}</p>
        </div>
    )



};

export default TemplateExpression;