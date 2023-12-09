import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import  useProductFunctions  from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer=({greeting}) =>{

  const { getProducts, getProductById, getProductsByCategory } = useProductFunctions();
  const[products, setProducts] = useState([])
  const {categoryId} = useParams()

    useEffect(()=> {
      const asyncFunc = categoryId ? getProductsByCategory : getProducts

      asyncFunc(categoryId)
        .then(response => {
          setProducts(response)
        })
        .catch(error => {
          console.error(error)
        })
    },[getProductsByCategory, categoryId])

    return (
      <>
        <div className="container">
          <h2 className="greeting">{greeting}</h2>
          <ItemList products={products}/>
        </div>
      </>
    )
  }
  
  export default ItemListContainer