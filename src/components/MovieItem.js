import React from 'react';
import { connect } from 'react-redux'
import { setReview} from '../actions/movies'
import Rate from './Rate';

const MovieItem = ({
    id,
    users,
    img,
    name,
    rate,
    numberOfReview,
    genre,
    year,
    userId,
    startSetReview,
}) => {
    const formatReviewNumber = (number) => {
        return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(number)
    }
    const formatRate = (number) => {
        return number.toString().slice(0, 3)
    }
    const reviewSubmit = (review) => {
        startSetReview(review, id,userId)

    }
    
    return (
        <div className="item__group">
            <div>
                <img src={img}  className="item__img" alt="movie"/>
            </div>
            <div className="item_description">
                <h2>{name}</h2>
                <span>Rate: {formatRate(rate)}★</span>
                <span>Number of reviews: {formatReviewNumber(numberOfReview)}</span>
                <span>Genre: {genre}</span>
                <span>Year: {year}</span>
                <Rate reviewSubmit={reviewSubmit} id={id} users={users} userId={userId} />
            </div>

        </div>
    );
}
const mapStateToProps = (state) => ({
   userId:state.user.id


})

const mapDispatchToProps = (dispacth) => ({
    startSetReview: (review, id,userId) => dispacth(setReview(review, id,userId))
   


})
export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);