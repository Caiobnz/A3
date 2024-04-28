import React from 'react';
import styled from 'styled-components';
import perfil from '../../imagens/perfil.svg';


const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`;

const Icones = styled.ul`
    display: flex;
    align-items: center;
`;

const icones = [perfil, ];

function IconesHeader() {
    return (
        <Icones>
            {icones.map((icone, index) => (
                <Icone key={index}><img src={icone} alt={`Ícone ${index}`} /></Icone>
            ))}
        </Icones>
    );
}

export default IconesHeader;
