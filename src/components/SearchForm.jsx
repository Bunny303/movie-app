import React, { Component } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            genre: ''
        }
    }

    handleChange(event) {
        // TODO
    }

    handleSubmit(event) {
        // TODO
    }

    render (){
        return (
            <StyledForm onSubmit={this.handleSubmit}>
                <label>Find Your Movie</label>
                <input 
                    type="text" 
                    name="searchname" 
                    value={this.state.searchQuery} 
                    onChange={this.handleChange}
                />
                search by: <button>Title</button> <button>Genre</button>
                <input type="submit" value="Search" />
            </StyledForm>
        )
    }
}

const StyledForm = styled.form`
    background-color: black;
    padding: 30px 15px;
`;

export default SearchForm;