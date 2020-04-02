const defaultFilterState = {
    name: '',
    rate: 0,
    genre: "",
    yearStart: 1900,
    yearEnd: 2020,
    sortBy: 'rate'
}
export default (state = defaultFilterState, action) => {
    switch (action.type) {
        case "SET_MOVIE_NAME":
            return {
                ...state,
                name: action.name
            }
        case "SET_RATE":
            return {
                ...state,
                rate: action.rate
            };
        case "SET_START_YEAR":
            return {
                ...state,
                yearStart: action.year
            }
        case "SET_END_YEAR":
            return {
                ...state,
                yearEnd: action.year
            }
        case "SET_GENRE":
            return {
                ...state,
                genre: action.genre
            };
        case "SORT_BY":
            return {
                ...state,
                sortBy: action.sortBy
            }
        default:
            return state;
    }
}
