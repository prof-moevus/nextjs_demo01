'use client'

import { useState } from 'react'
import VignetteProduit from "@/app/components/VignetteProduit"


export default function ListeProduits() {
    const [products, setProducts] = useState([
        { id:1, category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { id:2,category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { id:3,category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { id:4,category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { id:5,category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { id:6,category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]);

    const deleteItem = () => {
        setProducts((prevProducts) => {
            const rd = Math.floor(Math.random() * products.length)
            const newProducts = [...products]
            newProducts.splice(rd, 1)
            //const newProducts = products.filter((_, id)=> id !== rd)
            return newProducts
        })
        console.log("DB delete")
        console.log(products)
    }

    const addItem = () => {
        setProducts((prevProducts) => {
            const rd = Math.floor(Math.random() * products.length)
            const newProducts = [...prevProducts]
            let ids = prevProducts.map((item)=>{return item.id})
            const maxID = Math.max(...ids)
            console.log(maxID)
            newProducts.splice(rd, 0, {id: maxID+1 , category: "NA", price: "-1$", stocked: false, name: "NA" })
            return newProducts
        })
    }


    return (
        <>
            <button className='bg-slate-200 text-xl w-1/3 m-1' onClick={deleteItem}>Supprimmer</button>
             <button className='bg-slate-200 text-xl w-1/3 m-1' onClick={addItem}>Ajouter</button>
            <div className='flex flex-row flex-wrap h-1/2'>
                {products && products.map((item, i) => {
                    return (
                     <VignetteProduit item={item} key={item.id} listID={i} />
                    )
                })

                }
            </div>


        </>
    )
}


