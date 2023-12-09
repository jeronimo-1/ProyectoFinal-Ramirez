import { useEffect, useState } from "react"
import useProductFunctions from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"

const ItemDetailContainer =()=> {
    const [product, setProduct] = useState(null)
    const { getProducts, getProductById, getProductsByCategory } = useProductFunctions();
    const { itemId } = useParams()

    useEffect (() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })       
    }, [getProductById, itemId])

    return (
        <div className="ItemDetaliContainer">
            <ItemDetail {...product}/>
        </div>
    )
}
export default ItemDetailContainer