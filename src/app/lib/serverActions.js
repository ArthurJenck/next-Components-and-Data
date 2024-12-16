"use server"

export const getImg = async () => {
    return await fetch("https://jsonplaceholder.typicode.com/photos/1").then(
        (res) => res.json()
    )
}

export const getPosts = async () => {
    return await fetch("https://jsonplaceholder.typicode.com/posts").then(
        (res) => res.json()
    )
}

export const getPost = async (id) => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
        (res) => res.json()
    )
}
