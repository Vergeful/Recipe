// Modals show the item's name, ingredients and instuctions
// Also a key 'prop' is needed when loading the ingredients to avoid React Error Message

import { useEffect, useState } from 'react'
import './modalstyles.css'

export default function Modal({recipeID, toggleDetailsModal}){
    const [info, setInfo] = useState([])

    const key = import.meta.env.VITE_API_URL

    async function getInfo(){
        const detail = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${key}`)
        const detailData = await detail.json()
        setInfo(detailData)
    }

    useEffect(() => {
        getInfo()
    }, [])
    console.log(info.instructions)

    // dangerouslySetInnerHTML allowus us to display text from api without tags showing on screen.

    return(
        <div className="modal-container">
            <div className='modal'>
                <button className='modal-close' onClick={() => toggleDetailsModal(recipeID)}>X</button>
                <h3 className='modal-title'>{info.title}</h3>
                <img src={info.image} alt={info.title} className='modal-image'/>
                <h3>INGREDIENTS:</h3>
                {   info.extendedIngredients?.map(i => <li>{i.original}</li>)   }
                <h3>INSTRUCTIONS:</h3>
                <div className='modal-instructions' dangerouslySetInnerHTML={{__html:info.instructions}}></div>
            </div>
        </div>
    )
}