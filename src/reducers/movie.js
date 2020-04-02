import movies from '../data/moives';

const defaultMoviesState = movies;


const moviesReducer = (state = defaultMoviesState, action) => {
    switch (action.type) {
        case "SET_MOVIE_REVIEW":
            return state.map(movie => {
                if (movie.id === action.id) {
                    const userIndex = movie.users.findIndex((user)=>user.id === action.userId);

                    if(userIndex === -1){
                        const allReview = movie.numberOfReview * movie.rate;
                        const avgReview = (allReview + action.review) / (movie.numberOfReview + 1)
                        
                        return {
                            ...movie,
                            rate: avgReview,
                            numberOfReview: movie.numberOfReview + 1,
                            users:[...movie.users,{
                                id:action.userId,
                                review:action.review
                            }]
                        }
                    }
                    const allReview = (movie.numberOfReview * movie.rate) - movie.users[userIndex].review;
                    const avgReview = (allReview + action.review) / (movie.numberOfReview)
                    movie.users[userIndex].review = action.review
                    return {
                        ...movie,
                        rate: avgReview,
                        users:movie.users
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