import React from 'react';
import { string, number } from 'prop-types';
import styled from 'styled-components';

const FilmCard = ({title, releaseDate, genre, coverUrl, duration, rating, description}) => (
    <StyledFilmCard>
        <img src={coverUrl} />
        <div>
            <StyledTitle>{title}</StyledTitle>
            <p>Rating: {rating}</p>
            <p>{releaseDate}</p>
            <p>Duration: {duration} min</p>
            <p>{description}</p>
        </div>
    </StyledFilmCard>
);

FilmCard.propTypes = {
    title: string.isRequired,
    releaseDate: number.isRequired,
    genre: string.isRequired,
    coverUrl: string.isRequired,
    duration: number.isRequired,
    rating: string.isRequired,
    description: string.isRequired
};

const StyledFilmCard = styled.div`
    background-color: black;
    color: white;

    img{
        display: inline-block;
        width: calc(30% - 30px);
        margin-left: 15px;
        margin-right: 15px;
    }

    div{
        display: inline-block;
        width: 70%;
    }
`;

const StyledTitle = styled.h3`
    font-size: 26px;
    color: #F55263;
`;

export default FilmCard;
