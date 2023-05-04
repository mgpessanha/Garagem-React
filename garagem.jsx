import {useState} from 'react';

const Carro = (props) => (<h2>Sou um {props.marca}</h2>);

const Garagem = () => {
    const marcaDoCarro = "Ford";

    return (
        <div>
            <p>Quem mora na garagem?</p>
            <Carro marca={marcaDoCarro} />
        </div>
    )
}

export default Garagem;