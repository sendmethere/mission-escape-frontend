import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    margin: 0.4rem 0 0 0;
    font-size: 0.6rem;
    color: #666666;
    text-align: center;
`

const Footer = () => {
    return (
        <Content>
            미션대탈출 made by 행복한엄쌤
        </Content>
    );
};

export default Footer;