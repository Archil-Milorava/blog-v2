export interface createBlogType {
    title: string,
    content: string,
    image: string
}

export interface Blog {
    _id: string,
    title: string,
    content: string,
    image: string,
    createdAt: string,
    updatedAt: string
}