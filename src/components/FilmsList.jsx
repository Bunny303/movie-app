import React from 'react';
import { array } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FilmListItem from './FilmListItem'

const FilmList = ({filmsList}) => (
    <StyledFilmList>
        {
            filmsList.map(film => (
                <FilmListItem {...film} key={film.id} />
            ))
        }
    </StyledFilmList>
);

FilmList.propTypes = {
    filmsList: array
}

const StyledFilmList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export default FilmList;
