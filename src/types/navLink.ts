export type NavLink = {
    name: String,
    link: String,
    newTab: Boolean
    id: Number
}

export type Categories = {
    title: String,
    description: String,
    link: String,
    id: Number,
    SecondaryCategory: Array<{
        title: String,
        description: String,
        slug: String,
        id: Number,
    }>
}