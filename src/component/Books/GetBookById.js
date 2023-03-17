import { useParams } from "react-router"
import axios from "axios"
import { useState } from "react"

function GetBookById(){
    let {id} = useParams()
    let [title ,setTitle] = useState("")
    let [excerpt ,setexcerpt] = useState("")
    let [ISBN ,setISBN] = useState("")
    let [category ,setcategory] = useState("")
    let [subcategory ,setsubcategory] = useState("")
    let [bookCover ,setbookCover] = useState()
    let [releasedAt ,setreleasedAt] = useState("")

    let token = localStorage.getItem('x-api-key')
    axios.get(`http://localhost:8000/books/${id}` ,{headers:{ "Authorization":token}})
    .then((res)=>{
       setTitle(res.data.data.title)
       setISBN(res.data.data.ISBN)
       setbookCover(res.data.data.bookCover)
       setexcerpt(res.data.data.excerpt)
       setsubcategory(res.data.data.subcategory)
       setcategory(res.data.data.category)
       setreleasedAt(res.data.data.releasedAt)
    })
return(
    <>
    <div className='container'>
        <div className="shadow-none p-3 mb-5 bg-light rounded">
        <img  width='20%' src={bookCover} alt="book"/><br/>
         <a>{title}</a>
         <li>excerpt: {excerpt}</li>
         <li>ISBN: {ISBN}</li>
         <li> category: {category}</li>
         <li>subcategory: {subcategory}</li>
         <li>releasedAt: {releasedAt}</li>
    </div>
    </div>
   </>
)
}
export default GetBookById