import { useState } from "react"

export default function Search({performSearch}) {
    const [input, setInput] = useState("")

    function handleChange(e){
        setInput(e.target.value)
    }

    return (
      <div className="search">
        <div className="burger food-icons"><i className="fa-solid fa-burger fa-bounce fa-2xl"></i></div>
        <div className="pizza food-icons"><i className="fa-solid fa-pizza-slice fa-spin-pulse fa-2xl"></i></div>
        <div>
            <h1>Savitur's Recipe Search</h1>
            <h6>This is powered by the Spoonacular API!</h6>
        </div>
        <form onSubmit={(e) => performSearch(e, input)} className="form">
            <input type="text" placeholder="Search for any recipe you want!" onChange={handleChange}></input>
            <button className="search-button"> <i className="fa-sharp fa-solid fa-magnifying-glass fa-shake fa-xl"></i> </button>
        </form>
      </div>
    )
  }