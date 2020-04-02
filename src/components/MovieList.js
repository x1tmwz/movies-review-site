import React from 'react';
import { connect } from 'react-redux';
import MoveItem from './MovieItem';
import moviesSelector from '../selectors/filter';

const MovieList = (props) => {
    return (
        <div className="list">
            <h1>MovieList</h1>
            {props.movies.map(movie => <MoveItem
                img={movie.img}
                users={movie.users}
                key={movie.id}
                id={movie.id}
                name={movie.name}
                rate={movie.rate}
                numberOfReview = {movie.numberOfReview}
                genre = {movie.genre}
                year = {movie.year}
                />)}

        </div>
    );
}
const mapStateToProps = (state) => ({
    movies: moviesSelector(state.movies,state.filters)

})
export default connect(mapStateToProps)(MovieList);