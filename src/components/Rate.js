import React, { useEffect } from 'react';

const Rate = (props) => {
    const submitHandler = (e) => {
        const starRate = e.target.value
        props.reviewSubmit(starRate);
    }
    useEffect(() => {
        const user = props.users.find((user) => user.id === props.userId)
        const radioArray = Array.from(document.getElementById(props.id).childNodes)
        if(user){
            radioArray.forEach((element)=>{
                if(element.value === user.review.toString()){
                    element.checked = true
                }
            })
        }
    })
    return (
        <div className="rate" id={props.id} onChange={submitHandler} >
            <input type="radio" id={`1${props.id}`} name={props.id} value="5" />
            <label htmlFor={`1${props.id}`} title="text">5 stars</label>
            <input type="radio" id={`2${props.id}`} name={props.id} value="4" />
            <label htmlFor={`2${props.id}`} title="text">4 stars</label>
            <input type="radio" id={`3${props.id}`} name={props.id} value="3" />
            <label htmlFor={`3${props.id}`} title="text">3 stars</label>
            <input type="radio" id={`4${props.id}`} name={props.id} value="2" />
            <label htmlFor={`4${props.id}`} title="text">2 stars</label>
            <input type="radio" id={`5${props.id}`} name={props.id} value="1" />
            <label htmlFor={`5${props.id}`} title="text">1 star</label>
        </div>

    )
}
export default Rate;