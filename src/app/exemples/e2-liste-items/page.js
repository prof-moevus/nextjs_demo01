'use client'

import { useState } from 'react'
import VignetteProduit from "@/app/components/VignetteProduit"


export default function ListeProduits() {
    const [products, setProducts] = useState([
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]);

    // const deleteItem = () => {

    //     setProducts((prevProducts) => {
    //         const rd = Math.floor(Math.random() * products.length)
    //         const newProducts = [...products]
    //         delete products[rd]
    //         return newProducts
    //     })
    // }

    const addItem = () => {
        setProducts((prevProducts) => {
            const rd = Math.floor(Math.random() * products.length)
            const newProducts = [...prevProducts]
            newProducts.splice(rd, 0, { category: "NA", price: "-1$", stocked: false, name: "NA" })
            return newProducts
        })


    }


    return (
        <>
            <div className='flex flex-row flex-wrap h-1/2'>
                {products && products.map((item, i) => {
                    return (
                        <VignetteProduit item={item} key={i} listID={i} />
                    )
                })

                }
            </div>
            <button className='bg-slate-200 text-xl w-1/3 m-1' onClick={deleteItem}>Supprimmer</button>
            <button className='bg-slate-200 text-xl w-1/3 m-1' onClick={addItem}>Ajouter</button>

        </>
    )
}


