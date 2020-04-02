const setReview = (review=0,id=0,userId="")=>({
    type:"SET_MOVIE_REVIEW",
    review:parseInt(review),
    id,
    userId
})

export {setReview};