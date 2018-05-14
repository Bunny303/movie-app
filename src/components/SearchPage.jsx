import React from 'react'
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import FilmsList from './FilmsList';

import filmsDummyData from '../dummyData/dummyData'

const SearchPage = () => (
    <div>
        <Header />
        <div>{/* TODO: extract Search form is separate component  */}
            Search form
        </div>
        <div>{/* TODO: here should be the filter component */}
            filters
        </div>
        <FilmsList filmsList={filmsDummyData} />
        <Footer />
    </div>
);

export default SearchPage;