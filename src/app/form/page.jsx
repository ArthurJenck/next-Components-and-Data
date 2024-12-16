"use client"
import React, { useState } from "react"
import { getPost } from "../../lib/serverActions"

const page = () => {
    const [inputValue, setInputValue] = useState("")
    const handleGetArticle = async () => {
        const post = await getPost(1)
        console.log(post)
    }

    return (
        <div>
            <input
                className="p-2 mb-4 border border-gray-600"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <p>Tu as écrit : {inputValue}</p>

            <button
                className="p-4 bg-green-300"
                onClick={(e) => handleGetArticle()}
            >
                Récupérer un article
            </button>
        </div>
    )
}

export default page
