"use server"

export const getImg = async () => {
    return await fetch("https://jsonplaceholder.typicode.com/photos/1").then(
        (res) => res.json()
    )
}
