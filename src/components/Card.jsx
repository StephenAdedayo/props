import React from 'react'
import '../styles/card.css'


const Card = ({now, addToCart, handleDelete }) => {
    // event handler
    

  return (
    <div className='card'>
{/* 
      <div className="card-img">

      <img src={props.image} alt="" />

      </div>
<div className="card-content">



    
<p className="product-name">
       {props.name}
      </p>

      <p className="product-price">
        N {props.price}
      </p>

      <p className="product-description">
        {props.desc}
      </p>

      <div className="icon-container">

      </div>
    
     <button onClick={() => addToCart()}>Add to Cart</button>

</div> */}


{now.map(image => (

<div className="card-cont" key={image.id}>
 <img src={image.images} alt="" />
 <p className='product-name'>{image.name}</p>
 <p>{image.price}</p>
 <p>{image.desc}</p>
 <button onClick={() => addToCart()}>Add to cart</button>
 <button onClick={() => handleDelete(image.id)}>delete</button>
</div>
 

))}


    </div>
  )
}

export default Card
