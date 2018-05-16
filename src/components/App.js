import React, { Component, PureComponent } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';

import SearchPage from './SearchPage';
import FilmDetailsPage from './FilmDetailsPage';

const App = () => (
    <BrowserRouter>
        <StyledLayout>
            <Switch>
                {/* 
                    TODO:
                    - create search form
                    - add few more styles
                */}
                <Route exact path="(/|/search)" component={SearchPage} />
                <Route path="/film/:id" component={FilmDetailsPage} />
            </Switch>
        </StyledLayout>
    </BrowserRouter>
);

const StyledLayout = styled.div`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
`;

export default App;