const moviesSelector = (movies, { name, rate, genre, yearStart, yearEnd, sortBy }) => {
    return movies.filter((movie) => {
        const nameMatch = movie.name.toLowerCase().includes(name.toLowerCase());
        const yearMatch = movie.year >= yearStart && movie.year <= yearEnd;
        const genreMatch = genre ? movie.genre.toLowerCase() === genre.toLowerCase() : true;
        const rateMatch = parseInt(rate)  ? parseInt(movie.rate) === parseInt(rate) : true;
        return nameMatch && yearMatch && genreMatch && rateMatch;
    }).sort((a, b) => {
        if (sortBy === 'rate') {
            return a.rate < b.rate ? 1 : -1;
        }
        if (sortBy === 'year') {
            return a.year < b.year ? 1 : -1;
        }
    })
}
export default moviesSelector;