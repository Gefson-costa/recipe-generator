

import React, { useState } from "react"
import Header from "./components/Header"

export default function App() {

    const [recipe, setRecipe] = useState(["potato", "tomato", "cheese"])

    const listOfIngredients = recipe.map((item) => {
        return <span>{item}</span>
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
        el.reset()
    }




    return (
        <main>
            <Header />

            <section className="main-container">
                <section className="left-con">
                    <form action="" onSubmit={handleSubmit}>

                        <label for="ingredient-input"></label>
                        <input
                            id="ingredient-input"
                            type="text"
                            placeholder=""
                            name="items"
                        />
                        <button>Add ingredient</button>
                    </form>


                    <div className="ingredients-con">
                        {listOfIngredients}
                    </div>



                    {recipe.length > 4 &&
                        <sections>
                            <div className="ready-con">
                                <p>Lorem ipsum dolor sstrum provident iure eligendi fugiat
                                    a placeat dignissimos assumenda vel, fugit corrupti eum?
                                    Enim nihil eos eum sunt at.</p>
                                <button>Ready</button>
                            </div>
                        </sections>}
                </section>
                <section className="right-con">

                </section>

            </section>
        </main>
    )
}