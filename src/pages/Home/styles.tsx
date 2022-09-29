

import styled from 'styled-components';

export const Card = styled.div`

    width: 250px;
    height: 250px;
    background-color: gray;
    padding: 15px;
    margin: 15px;
    border-radius: 8px;

    :hover{
        filter: drop-shadow(0 0 2em #1e1e24aa);
        
    }
`

export const ListOfBoards = styled.div`

    display: flex;
    flex-direction: row;
    
    padding: 15px;
    border-radius: 8px;
    border: 1px solid gray;

`