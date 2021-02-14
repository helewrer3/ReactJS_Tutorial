import React, {useEffect, useState} from 'react'
import Recipe from './Recipe'
import './App.css'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')
  const APP_ID = '99274899', APP_KEY = '58ed02871dc8f9542268e58f1e2bc623', exurl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const getRec = async () => {
    const res = await fetch(`${exurl}`)
    const data = await res.json()
    setRecipes(data.hits)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  useEffect(() => {
    getRec()
  }, [query])

  return(
    <div className="app">
      <div className="heading">INGREWRER3</div>
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-btn">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
        ))}
      </div>
    </div>
  )
}

export default App