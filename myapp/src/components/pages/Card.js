import React from 'react'

const Card = ({name,price,description,image}) => {
    return (
        <>
            <div class="col">
                <div class="card">
                    <img src={`./productsImage/${image}`} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <h5 class="card-title">Rs.{price}</h5>
                        <p class="card-text text-truncate">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card