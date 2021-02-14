import React from 'react'
import Style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={Style.recipe}>
            <h1>{title}</h1>
            <img src={image} alt="" className={Style.image}/>
            <p>{calories}</p>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Recipe