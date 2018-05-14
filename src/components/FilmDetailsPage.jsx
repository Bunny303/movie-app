import React from 'react';
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
                films by &lt;genre&gt;
            </div>
            <FilmsList filmsList={filteredByGenre} />
            <Footer />        
        </div>
    )
};

export default FilmDetailsPage;
