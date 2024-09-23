import React, { useState } from 'react'
import Card from './components/Card'
import './App.css'

const App = () => {
// const image1= "https://ng.jumia.is/cms/0-6-anniversary/2024/Collections/Thunbmails/Artboard_1_copy_6.png"
// const image2 = "https://ng.jumia.is/cms/0-6-anniversary/2024/Collections/Thunbmails/Artboard_1_copy_7.png"
// const image3 = "https://ng.jumia.is/cms/0-6-anniversary/2024/Collections/Thunbmails/Artboard_1_copy_13.png"
// const image4 = "https://ng.jumia.is/cms/0-6-anniversary/2024/Collections/Thunbmails/Artboard_1_copy_2.png"


const [now, setNow] = useState([
  
   {images : "https://ng.jumia.is/cms/0-6-anniversary/2024/Collections/Thunbmails/Artboard_1_copy_6.png",name:"adidas Air-Force 1", price:"75,000", desc:"A nice white adidas shoe built for durability", id : 1},
 {images : "https://ng.jumia.is/cms/0-6-anniversary/2024/Collections/Thunbmails/Artboard_1_copy_7.png", name:"adidas Air-Force 1", price:"75,000", desc:"A nice white adidas shoe built for durability", id :2 },
{images : "https://ng.jumia.is/cms/0-6-anniversary/2024/Collections/Thunbmails/Artboard_1_copy_13.png", name:"adidas Air-Force 1", price:"75,000", desc:"A nice white adidas shoe built for durability", id:3},
 {images : "https://ng.jumia.is/cms/0-6-anniversary/2024/Collections/Thunbmails/Artboard_1_copy_2.png", name:"adidas Air-Force 1", price:"75,000", desc:"A nice white adidas shoe built for durability", id:4},

  
])

const addToCart = () => {
  return alert("item has been added to cart")
}



const handleDelete = (id) => {
  const setNo = now.filter(image => image.id !== id)
  setNow(setNo)
}

  return (
    <>
    <main>
      <h1>All products</h1>

      <div className="card-container">
      {/* <Card image={image1} name="adidas Air-Force 1" price="75,000" desc="A nice white adidas shoe built for durability" /> */}
      {/* <Card image={image2} name = "HeadPhone" price= "20,000" desc = "Good bass with the body made with durable plastic"/> */}
      {/* <Card image = {image3} name = "Clothing" price = "80,000" desc ="Buy a complete nike dress to make you look good"/> */}
      {/* <Card image= {image4} name ="Itel 50" price ="95,000" desc = "itel 50 with a very strong 10000mah battery"/> */}
      {/* <Card/> */}
       <Card now ={now} addToCart={addToCart}  handleDelete={handleDelete}/>

      
      </div>
    </main>
    
    </>
  )
}

export default App
