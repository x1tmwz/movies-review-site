const setMovieName =(name = "")=>({
    type:'SET_MOVIE_NAME',
    name
})
const setRate =(rate = 0)=>({
    type:'SET_RATE',
    rate
})
const setStartYear =(year=1990)=>({
    type:'SET_START_YEAR',
    year
})
const setEndYear =(year=2020)=>({
    type:'SET_END_YEAR',
    year
})
const setGenre=(genre="")=>({
    type:'SET_GENRE',
    genre
})
const sortByRate = ()=>({
    type:'SORT_BY',
    sortBy:'rate'
})
const sortByYear =()=>({
    type:'SORT_BY',
    sortBy:'year'
})
export {setMovieName,setRate,setStartYear,setEndYear,setGenre,sortByRate,sortByYear};