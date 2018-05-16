import React from 'react';
import { shape, node } from 'prop-types';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import FilmCard from './FilmCard';
import FilmsList from './FilmsList';

import filmsDummyData from '../dummyData/dummyData'

const FilmDetailsPage = ({match}) => {
    const { id } = match.params;
    const selectedFilm = filmsDummyData.filter(film => film.id == id)[0];
    const filteredByGenre = filmsDummyData.filter(film => film.genre === selectedFilm.genre);
    
    return (
        <div>
            <Header>
                <Link to="/search">search page</Link>
            </Header>
             <FilmCard {...selectedFilm} /> 
            <div>{/* TODO: here should be the filter component */}
                films by {selectedFilm.genre}
            </div>
            <FilmsList filmsList={filteredByGenre} />
            <Footer />        
        </div>
    )
};

FilmDetailsPage.propTypes = {
    match: shape({
        params: shape({
            id: node,
        }).isRequired,
    }).isRequired
};

export default FilmDetailsPage;
