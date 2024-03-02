import { useEffect, useState } from "react"

export function Comments(){

const [comments, setComments] = useState([])

useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => setComments(data))
})


    return(
        <>
        <h1>Comments</h1>
        <ul>
            {comments.map(comment =><li key={comment.id}>{comment.name}</li>)}
        </ul>
        
        </>
    )
}