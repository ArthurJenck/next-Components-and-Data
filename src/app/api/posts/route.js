export const GET = async (request) => {
    return new Response(
        JSON.stringify([
            {
                userId: 999,
                id: 100,
                title: "Données depuis /api/posts",
                body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            },
        ]),
        {
            status: 200,
            header: {
                "Content-Type": "application/json",
            },
        }
    )
}
