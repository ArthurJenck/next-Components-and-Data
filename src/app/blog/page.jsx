import Link from "next/link"
import React from "react"
import { getPosts } from "../../lib/serverActions"

const page = async () => {
    const posts = await getPosts()
    // const posts = await fetch("http://localhost:3000/api/posts").then((res) =>
    //     res.json()
    // )

    return (
        <main className="mt-12">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <p className="text-lg mb-8">Derniers posts :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {posts.map((post) => (
                    <Link
                        href={`/blog/${post.id}`}
                        key={post.id}
                        className="block p-4 bg-white shadow-lg rounded-lg hover:bg-gray-100 transition duration-200 dark:bg-gray-700 dark:hover:bg-gray-800"
                    >
                        <h2 className="text-xl font-semibold mb-2">
                            {post.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            {post.body.slice(0, 100) + "..."}
                        </p>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default page
