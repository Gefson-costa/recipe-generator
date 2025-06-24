




import React, { useState } from 'react';
import CookingAnimation from './components/CookingAnimation';

const FadeTransition = ({ show, children }) => {
    return (
        <div className={`fade-transition ${show ? 'fade-show' : 'fade-hide'}`}>
            {children}
        </div>
    );
};

export default function App() {
    const [cookingInProgress, setCookingInProgress] = useState(false);

    const [recipe, setRecipe] = useState([])

    const listOfIngredients = recipe.map((item) => {
        return <span key={item}>{item}</span>
    })

    function handleSubmit(event) {
        event.preventDefault()
        const el = event.currentTarget
        const formData = new FormData(el)
        const input = formData.get('items').trim()

        if (input === "") {
            return
        }

        setRecipe((item) => {
            return [...item, input]
        })
        setCookingInProgress(true);
        el.reset()
    }




    return (
        <main>
            <Header />

            <section className="main-container">
                <section className="left-con">
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="ingredient-input"></label>
                        <input
                            id="ingredient-input"
                            type="text"
                            placeholder="Enter an ingredient"
                            name="items"
                        />
                        <button>Add ingredient</button>
                    </form>

                    <FadeTransition show={recipe.length > 0}>
                        <div className="listOfIngredient-con">
                            <h2>List of Ingredients</h2>
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
                    <FadeTransition show={cookingInProgress}>
                        <CookingAnimation />
                    </FadeTransition>
                </section>
            </section>
        </main>
    )
}
