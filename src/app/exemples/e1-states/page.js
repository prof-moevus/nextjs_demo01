'use client'
import { useState } from 'react'
// https://react.dev/reference/react/Component#setstate

export  function DemoStateInt() {
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
        <p>allo {count}</p>
        <button className="h-12 w-1/2 bg-amber-800 rounded-lg" onClick={()=>{increment()}}>+1 👍</button>
        </>
    )
}

export default function DemoStateObject() {

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