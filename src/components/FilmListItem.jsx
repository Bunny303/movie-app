import React from 'react';
import { string, number } from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FilmListItem = ({id, title, releaseDate, genre, coverUrl, rating }) => (
    <StyledFilmListItem to={`/film/${id}`}>
        <img src={coverUrl} />
        <StyledInfobox>
            <StyledTitle>{title}</StyledTitle>
            <p>{releaseDate}</p>
            <p>Rating: {rating}</p>
            <p>{genre}</p>
        </StyledInfobox>
    </StyledFilmListItem>
);

FilmListItem.propTypes = {
    id: number.isRequired,
    title: string.isRequired,
    releaseDate: number.isRequired,
    genre: string.isRequired,
    coverUrl: string.isRequired,
    duration: number.isRequired,
    rating: string.isRequired,
    description: string.isRequired
}

const StyledFilmListItem = styled(NavLink)`
    width: 30%;
    margin-bottom: 15px;
    background-color: #f7f7f7;

    img{
        width: 100%;
    }

    p{
        margin-top: 5px;
        margin-bottom: 5px;
    }

    &:link,
    &:visited,
    &:hover,
    &:active{
        text-decoration: none;
        color: black;
    }

    &:hover{
        background-color: #efefef;
    }    
`;

const StyledInfobox = styled.div`
    padding: 10px;
`;

const StyledTitle = styled.h4`
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export default FilmListItem;
