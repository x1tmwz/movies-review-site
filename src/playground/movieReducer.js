import movies from '../data/moives';

const defaultMoviesState = movies;


const moviesReducer = (state = defaultMoviesState, action) => {
    switch (action.type) {
        case "SET_MOVIE_REVIEW":
            return state.map(movie => {
                if (movie.id === action.id) {
                    const allReview = movie.numberOfReview * movie.rate;
                    const avgReview = (allReview + action.review) / (movie.numberOfReview + 1)
                    return {
                        ...movie,
                        rate: avgReview,
                        numberOfReview: movie.numberOfReview + 1,
                        users:state.users.push({
                            id:action.userId,
                            review:action.review
                        })
                    }
                }
                else {
                    return movie
                }
            });
        case "UPDATE_REVIEW":
            return state.map(movie => {
                if (movie.id === action.id) {
                    const allReview = (movie.numberOfReview * movie.rate) - action.oldReview;
                    const avgReview = (allReview + action.review) / (movie.numberOfReview)
                    return {
                        ...movie,
                        rate: avgReview,
                    }
                }
                else {
                    return movie
                }
            });

        default:
            return state;
    }
}

export default moviesReducer;