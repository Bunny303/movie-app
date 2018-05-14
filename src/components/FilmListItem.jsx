import React from 'react';
import { string, number } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FilmListItem = ({id, title, releaseDate, genre, coverUrl, rating }) => (
    <StyledFilmListItem>
        <img src={coverUrl} />
        <Link to={`/film/${id}`}>
            <p>{title}</p>
        </Link>
        <p>{releaseDate}</p>
        <p>Rating: {rating}</p>
        <p>{genre}</p>
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

const StyledFilmListItem = styled.div`
    width: 30%;
    border: 1px solid black;
    margin-bottom: 15px;

    img{
        width: 100%;
    }

    p{
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;

export default FilmListItem;
