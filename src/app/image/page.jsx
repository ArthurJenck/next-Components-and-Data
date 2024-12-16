import React from "react"
import { getImg } from "../lib/serverActions"

const page = async () => {
    const imgObject = await getImg()

    return (
        <div>
            <h1>Une image</h1>
            <img src={imgObject.url} alt="" />
        </div>
    )
}

export default page
