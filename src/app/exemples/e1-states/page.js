'use client'
import { useState } from 'react'
// https://react.dev/reference/react/Component#setstate

export default function DemoStateInt() {
    let [count, setCount] = useState(0)

    function increment() {
        if (count > 9) {
            setCount(0)
        } 
        console.log(`Debug ${count}`)
        setCount(count + 1)

    } 
    return (
        <>
        <h1>Démo sur les états</h1>
        <p className='px-3 latte:py-8 m-144 md:bg-cyan-600'>allo {count}</p>

        <button 
        className="h-12 w-1/2 bg-blue-200 rounded-lg text-pumpkin hover:bg-slate-300 hover:rounded-md md:bg-emerald-400 md:rounded-none lg:bg-fuchsia-800" 
        onClick={()=>{increment()}}
        >+1 👍</button>
        <input type='text' className= "bg-tahiti-500 m-1 focus:bg-emerald-600 shadow-xl shadow-orange-300" placeholder='Prenom'></input>
        </>
    )
}

export function DemoStateObject() {

    let [student, setStudent] = useState({name: "Bob", grade: 90})
    let [dGrade, setDGrade] = useState("")

    function convertToLetter() {
        if (student.grade > 90) {
            setDGrade("A")
        } else {
    
            setDGrade("F")
        }
    } 
    return (
        <>
        <h1>Démo sur les états</h1>
        <p>allo {student.name}</p>
        <p>Ta note est  {dGrade}</p>
        <button className='w-1/2 bg-amber-700' onClick={()=>{convertToLetter()}}>Convert</button>
        </>
    )

}