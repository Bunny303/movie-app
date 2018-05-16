import React from 'react'
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import FilmsList from './FilmsList';
import SearchForm from './SearchForm';

import filmsDummyData from '../dummyData/dummyData'

const SearchPage = () => (
    <div>
        <Header />
        <SearchForm/>
        <div>{/* TODO: here should be the filter component */}
            filters
        </div>
        { filmsDummyData ? <FilmsList filmsList={filmsDummyData} /> : <h2>No films found</h2> }
        <Footer />
    </div>
);

export default SearchPage;