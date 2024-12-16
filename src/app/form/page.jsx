"use client"
import React, { useState } from "react"

const page = () => {
    const [inputValue, setInputValue] = useState("rien pour l'instant")

    return (
        <div>
            <input
                className="p-2 border border-gray-600"
                type="text"
                // value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <p>Tu as écrit : {inputValue}</p>
        </div>
    )
}

export default page
