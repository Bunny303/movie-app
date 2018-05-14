import React from 'react';
import { node } from 'prop-types';

const Header = ({children}) => (
    <div>
        netflixroulette
        {children}
    </div>
);

Header.propTypes = {
    children: node
}

export default Header;