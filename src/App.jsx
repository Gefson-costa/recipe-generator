/* eslint-disable no-unused-vars */

import React, { useState } from "react"
import Header from "./components/Header"

export default function App() {

    const [recipe, setRecipe] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        const el = event.currentTarget
        const formData = new FormData(el)
        const input = formData.get('items')
        el.reset()
    }




    return (
        <main>
            <Header />
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
        </main>
    )
}