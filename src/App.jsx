




import React, { useState } from 'react';
import CookingAnimation from './components/CookingAnimation';
import Header from './components/Header';

const FadeTransition = ({ show, children }) => {
    return (
        <div className={`fade-transition ${show ? 'fade-show' : 'fade-hide'}`}>
            {children}
        </div>
    );
};

export default function App() {
    const [cookingInProgress, setCookingInProgress] = useState(true);
    const [recipe, setRecipe] = useState([])
    const [inputValue, setInputValue] = useState("")

    const listOfIngredients = recipe.map((item, index) => {
        return (
            <span key={`${item}-${index}`} className="ingredient-tag">
                {item}
                <button
                    className="remove-ingredient"
                    onClick={() => removeIngredient(index)}
                    aria-label={`Remove ${item}`}
                >
                    ×
                </button>
            </span>
        )
    })

    function handleSubmit(event) {
        event.preventDefault()
        const input = inputValue.trim().toLowerCase()

        if (input === "") {
            return
        }

        // Prevent duplicate ingredients
        if (recipe.some(ingredient => ingredient.toLowerCase() === input)) {
            setInputValue("")
            return
        }

        setRecipe((prevRecipe) => {
            return [...prevRecipe, inputValue.trim()]
        })
        setCookingInProgress(true);
        setInputValue("")
    }

    function removeIngredient(indexToRemove) {
        setRecipe(prevRecipe => prevRecipe.filter((_, index) => index !== indexToRemove))
        if (recipe.length <= 1) {
            setCookingInProgress(true)
        }
    }

    function clearAllIngredients() {
        setRecipe([])
        setCookingInProgress(true)
        setInputValue("")
    }




    return (
        <main>
            <Header />

            <section className="main-container">
                <section className="left-con">
                    <div className="form-section">
                        <div className="progress-indicator">
                            <div className="progress-text">
                                <span>Ingredients: {recipe.length}/5</span>
                                <span className="progress-label">
                                    {recipe.length < 5 ? `${5 - recipe.length} more needed` : 'Ready to cook!'}
                                </span>
                            </div>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${Math.min((recipe.length / 5) * 100, 100)}%` }}
                                ></div>
                            </div>
                        </div>

                        <form action="" onSubmit={handleSubmit}>
                            <label htmlFor="ingredient-input"></label>
                            <input
                                id="ingredient-input"
                                type="text"
                                placeholder="Enter an ingredient"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button type="submit">Add ingredient</button>
                        </form>
                    </div>

                    <FadeTransition show={recipe.length > 0}>
                        <div className="listOfIngredient-con">
                            <div className="ingredients-header">
                                <h2>List of Ingredients</h2>
                                <button
                                    className="clear-all-btn"
                                    onClick={clearAllIngredients}
                                    title="Clear all ingredients"
                                >
                                    Clear All
                                </button>
                            </div>
                            <div className="ingredients-con">
                                {listOfIngredients}
                            </div>
                        </div>
                    </FadeTransition>

                    <FadeTransition show={recipe.length > 4}>
                        <section>
                            <div className="ready-con">
                                <p>Are you ready for the recipe.</p>
                                <button onClick={() => setCookingInProgress(false)}>Ready</button>
                            </div>
                        </section>
                    </FadeTransition>

                </section>
                <section className="right-con">
                    {cookingInProgress ? (
                        <CookingAnimation />
                    ) : (
                        <div className="recipe-placeholder">
                            <h2>Recipe Generated!</h2>
                            <p>Your delicious recipe is ready to be prepared</p>
                        </div>
                    )}
                </section>
            </section>
        </main>
    )
}
