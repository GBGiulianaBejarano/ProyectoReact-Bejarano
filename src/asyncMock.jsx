const products = [
    {
        id: 1,
        nombre:'Silla Gamer Corsair',
        precio: 90000,
        category: 'Sillas Gamers',
        img: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_36817_Silla_Gamer_Corsair_T3_Rush_Fabric_Gris_Blanco_7b9b7a14-med.jpg',
        stock: 10,
        descripcion: 'Silla Gamer Corsair T3 Rush Fabric Gris/Blanco', 
    },
    {
        id:'2',
        nombre: 'Silla Gamer HHGears',
        precio: 78000,
        category: 'Sillas Gamers',
        img: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_37548_Silla_Gamer_HHGears_SM-115_Negro_y_Rojo_Hasta_90kg_172c245f-med.jpg',
        stock:67,
        descripcion: 'Silla Gamer HHGears SM-115 Negro y Rojo Hasta 90kg '
    },
    {
        id:'3',
        nombre: 'Silla Gamer Vertagear',
        precio:240000 ,
        category: 'Sillas Gamers',
        img: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_36926_Silla_Gamer_Vertagear_SL3800_HygennX_Negro_y_Blanco_Ergonomic_29fcc807-med.jpg',
        stock: 1,
        descripcion: 'Silla Gamer Vertagear SL3800 HygennX Negro y Blanco Ergonomic '
    },
    {
        id:'4',
        nombre: 'Auriculares Inalambricos Logitech',
        precio: 75000 ,
        category: 'Auriculares',
        img: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_24416_Auriculares_Inalambricos_Logitech_G733_Lightspeed_RGB_Lila__1dffcd73-grn.jpg',
        stock:1,
        descripcion: 'Auriculares Inalambricos Logitech G733 Lightspeed RGB Lila'
    },
    {
        id:'5',
        nombre: 'Auriculares Redragon Zeus',
        precio: 45000 ,
        category: 'Auriculares',
        img: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_37623_Auriculares_Redragon_Zeus_X_Pink_H510P-RGB_7.1_Surround_a78260b5-grn.jpg',
        stock:1,
        descripcion: 'Auriculares Redragon Zeus X Pink H510P-RGB 7.1 Surround'
    },
    
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() =>{
            resolve(products)
        },400)
    })
}

export const getProductById = (productsId) => {
    return new Promise ((resolve) =>{
        setTimeout (() => {
            resolve (products.find(prod => prod.id === productsId ))
        }, 400)
    })
}