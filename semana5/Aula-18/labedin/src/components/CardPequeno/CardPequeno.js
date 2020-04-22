import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="email-container">
            <img src={ props.imagem } />
                <h4>{ props.label }</h4>
                <p>{ props.conteudo }</p>
        </div>
    );
}

export default CardPequeno;