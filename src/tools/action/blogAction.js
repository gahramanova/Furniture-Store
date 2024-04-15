

 export  const addBlog = ({id, title, img, desc,date}) => ({
    type: "ADD_BLOG",
    blogdata: {
        id: crypto.randomUUID(),
        title,
        desc,
        img,
        date
 }
})
export const editBlog = (id,update)=> (
    {
        type: "EDIT_BLOG",
        id,
        update
    }
)
export const removeBlog = ({id})=> (
    {
        type: "REMOVE_BLOG",
        id
    }
)