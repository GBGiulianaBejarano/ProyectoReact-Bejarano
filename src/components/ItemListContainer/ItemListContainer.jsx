import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{
        const asyncFunc= categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
        .then(Response => {
            setProducts(Response)
        })
        .catch(error => {
            console.error(error)
        })
    },[categoryId])

    return (
        <div className="intro">
            <h1> ¡Bienvenidos a Brisingamer, tu tienda de referencia para todos los aficionados a los videojuegos en Argentina! En Brisingamer, estamos comprometidos a brindarte una experiencia de compra única, donde encontrarás una amplia gama de artículos gamers de alta calidad que harán que tu experiencia de juego sea aún más emocionante!.</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer