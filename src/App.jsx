import Search from './components/Search'
import Recipe from './components/Recipe'
import Modal from './components/Modal'
import './App.css'
import { useState, useEffect } from 'react'

export default function App() {
  // Initialize the page to show cookie recipes (yummy)
  const [search, setSearch] = useState("cookie")
  // Recipes will hold an array of 0-10 objects
  const [recipes, setRecipes] = useState([])

  //Modal state
  const [showModal, setShowModal] = useState(false)
  const [currentID, setCurrentID] = useState(0)

  const key = import.meta.env.VITE_API_URL

  async function getRecipes(){
    const api  = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${search}&number=10`)
    const apiData = await api.json()
    setRecipes(apiData.results)
  }

  // Only update Recipes when the search term is changes by the user
  // useEffect is ran after the App component is rendered
  useEffect(() =>{
    getRecipes()
  }, [search])

  function performSearch(e, input){
    e.preventDefault()
    setSearch(input)
  }

  function toggleDetailsModal(id){
    if(!showModal){
      setCurrentID(id)
      setShowModal(true)
    }else{
      setCurrentID(0)
      setShowModal(false)
    }
  }

  // Use key when mapping to avoid React warning
  return (
    <div>
        <Search performSearch={performSearch}/>
        <div className="recipe-container">
          {recipes.map(recipe =>{
            return <Recipe key={recipe.id} imgSrc={recipe.image} title={recipe.title} id={recipe.id} toggleDetailsModal={toggleDetailsModal}/> 
        })}
        </div>
        {showModal && <Modal recipeID={currentID} toggleDetailsModal={toggleDetailsModal} />}
    </div>
  )
}


