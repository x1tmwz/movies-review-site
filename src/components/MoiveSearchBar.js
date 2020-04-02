import React from 'react';
import { connect } from 'react-redux';
import { setMovieName, setRate, setStartYear, setEndYear, setGenre, sortByRate, sortByYear } from '../actions/filter';

const MovieSearchBar = ({
    searchByName,
    searchByRate,
    searchByStartYear,
    searchByEndYear,
    searchByGenre,
    sortByRate,
    sortByYear
}) => {
    const isValidYear = (year) => {
        const yearRegX = /^(19|20)\d{2}$/
        if (year.match(yearRegX) && year <= 2020) {
            return true;
        }
        return false;
    }
    const textHandler = (e) => {
        searchByName(e.target.value);
    }
    const genreHandler = (e) => {
        searchByGenre(e.target.value)
    }
    const rateHandler = (e) => {
        searchByRate(e.target.value)
    }
    const sortByHandler = (e) => {
        if (e.target.value === 'rate') {
            sortByRate();
        } else if (e.target.value === 'year') {
            sortByYear();
        }
    }
    const startYearHandler = (e) => {
        const year = e.target.value
        if (isValidYear(year)) {
            searchByStartYear(year);
        }
    }
    const endYearHandler = (e) => {
        const year = e.target.value
        if (isValidYear(year)) {
            searchByEndYear(year);
        }
    }
    const startYearFocusHandler = (e) => {
        e.target.value = 1900;
    }
    const endYearFocusHandler = (e) => {
        e.target.value = 2020;
    }

    return (
        // <div className="container">
            <div className="input-group">
                <div className="input-item">
                    <span className="input_span"> Search:</span><input type="text" onChange={textHandler} maxLength="150" className="text-input" />
                </div>
                <div className="input-item">
                    <span className="input_span">Genre:</span><select onChange={genreHandler} className="select">
                        <option value="">All...</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="science fiction">Science fiction</option>
                        <option value="drama">Drama</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="thriller">Thriller</option>
                    </select>
                </div>
                <div className="input-item">
                    <span className="input_span">Ratting:</span><select onChange={rateHandler} className="select">
                        <option value="0">All...</option>
                        <option value="1">1 ★ </option>
                        <option value="2">2 ★</option>
                        <option value="3">3 ★</option>
                        <option value="4">4 ★</option>
                        <option value="5">5 ★</option>
                    </select>
                </div>
                <div className="input-item">
                    <span className="input_span">Sort By:</span><select onChange={sortByHandler} className="select">
                        <option value="rate">Rate</option>
                        <option value="year">Year</option>
                    </select>

                </div>
                <div className="input-item">
                    <div className="input_group_year">
                        <span className="input_span">Start year:</span><input type="number" placeholder="YYYY" min="1900" max="2020" onChange={startYearHandler} onFocus={startYearFocusHandler} className="number-input" />
                        <span className="input_span">End year:</span><input type="number" placeholder="YYYY" min="1900" max="2020" onChange={endYearHandler} onFocus={endYearFocusHandler} className="number-input" />
                    </div>
                </div>





            </div>

        // </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    searchByName: (name) => dispatch(setMovieName(name)),
    searchByRate: (rate) => dispatch(setRate(rate)),
    searchByStartYear: (year) => dispatch(setStartYear(year)),
    searchByEndYear: (year) => dispatch(setEndYear(year)),
    searchByGenre: (genre) => dispatch(setGenre(genre)),
    sortByRate: () => dispatch(sortByRate()),
    sortByYear: () => dispatch(sortByYear())

})
export default connect(undefined, mapDispatchToProps)(MovieSearchBar);
