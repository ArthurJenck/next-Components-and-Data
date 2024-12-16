import React from "react"

const page = async () => {
    const imgObject = await fetch(
        "https://jsonplaceholder.typicode.com/photos/1"
    ).then((res) => res.json())

    return (
        <div>
            <h1>Une image</h1>
            <img src={imgObject.url} alt="" />
        </div>
    )
}

export default page
