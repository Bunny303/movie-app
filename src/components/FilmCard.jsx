import React from 'react';
import styled from 'styled-components'

const FilmCard = ({title, releaseDate, genre, coverUrl, duration, rating, description}) => (
    <StyledFilmCard>
        <img src={coverUrl} />
        <div>
            <h3>{title}</h3>
            <p>{releaseDate}</p>
            <p>Rating: {rating}</p>
            <p>{duration} min</p>
            <p>{genre}</p>
            <p>{description}</p>
        </div>
    </StyledFilmCard>
);

const StyledFilmCard = styled.div`
    img{
        display: inline-block;
        width: 30%;
    }

    div{
        display: inline-block;
        width: 70%;
    }
`;

export default FilmCard;
