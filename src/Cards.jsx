import React from 'react';

function Card(props){
    return(
        <>
        <article className="col-4 col-12-medium work-item">
            <span className="image fit"><img src={props.imgsrc} alt="" /></span>
            <h3>{props.ptitle}</h3>
            <p>{props.pcontent}</p>
        </article>
        </>
    )
}
export default Card;