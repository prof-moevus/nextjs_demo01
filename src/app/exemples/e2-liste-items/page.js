'use client'

import { useState } from 'react'
import VignetteProduit from "@/app/components/VignetteProduit"


export default function ListeProduits() {
    const { products, setProducts } = useState([
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]);

    const deleteItem = () => {
        const rd = Math.floor(Math.random() * products.length)
        delete products[rd]
        console.log(products)
    }

    const addItem = () => {
        const rd = Math.floor(Math.random() * products.length)
        products.splice(rd, 0, { category: "NA", price: "-1$", stocked: false, name: "NA" })
        console.log(products)

    }


    return (
        <>
            { products && products.map((item, i) => {
                    return (
                        <VignetteProduit item={item} key={i} listID={i} />
                    )
                })

            }
            {/* <button onClick={deleteItem}>Supprimmer</button>
            <button onClick={addItem}>Ajouter</button> */}
        </>
    )
}


