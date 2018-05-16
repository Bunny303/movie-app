import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const Header = ({children}) => (
    <StyledHeader>
        netflixroulette
        {children}
    </StyledHeader>
);

Header.propTypes = {
    children: node
}

const StyledHeader = styled.div`
    color: #F55263;
    background-color: black;
    padding: 15px;
`;

export default Header;