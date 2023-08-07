import Search from './components/Search'
import Recipe from './components/Recipe'
import './App.css'
import { useState, useEffect } from 'react'

export default function App() {
  const [search, setSearch] = useState("cookie")
  const [recipes, setRecipes] = useState([])

  const key = import.meta.env.VITE_API_URL

  async function getRecipes(){
    const api  = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${search}&number=10`)
    const apiData = await api.json()
    setRecipes(apiData.results)
    console.log(recipes)
  }

  useEffect(() =>{
    getRecipes()
  }, [search])

  function performSearch(e, input){
    e.preventDefault()
    setSearch(input)
  }

  return (
    <div>
        <Search performSearch={performSearch}/>
        <div className="recipe-container">
          {recipes.map(recipe =>{
            return <Recipe key={recipe.id} imgSrc={recipe.image} title={recipe.title} id={recipe.id}/>
        })}
        </div>
    </div>
  )
}


