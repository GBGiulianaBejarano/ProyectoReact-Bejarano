import { useEffect, useState } from 'react'
import {getProducts} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer1 = ({ greeting }) => {
    return (
        <div className="intro">
            <h1> ¡Bienvenidos a Brisingamer, tu tienda de referencia para todos los aficionados a los videojuegos en Argentina! En Brisingamer, estamos comprometidos a brindarte una experiencia de compra única, donde encontrarás una amplia gama de artículos gamers de alta calidad que harán que tu experiencia de juego sea aún más emocionante!.</h1>
        </div>
    )
}

const ItemListContainer =([ greeting ]) => {
    const [products, setProducts] = useState ([])

    useEffect (() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch (error => {
            console.error(error)
        })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products = {products}/>
        </div>
    )

}

export default ItemListContainer