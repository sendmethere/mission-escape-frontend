import React from 'react';
import styled from 'styled-components';

const MapButton = styled.button`
    border-radius: 10px;
    border: none;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem 0 0;
    &:hover{  
        background-color : skyblue;
        color : blue;
        cursor: pointer;
      }
`;

const ButtonContainer = styled.div`
      margin: 0 0 0.5rem 0;
`

const MapInfo = () => {
    return (
        <div>
            <h1>제목</h1>
            <ButtonContainer>
                <MapButton>타일</MapButton>      
                <MapButton>오브젝트</MapButton>      
                <MapButton>통과</MapButton>      
                <MapButton>이벤트</MapButton>    
            </ButtonContainer>  
        </div>
    );
};

export default MapInfo;     