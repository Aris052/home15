import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBooks } from './books.api'

export const Books = () => {
    const books = useSelector(state => state.books.list)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBooks())
            .unwrap()
            .then(response => {

            })
    }, [])
    return <>
        <h1><Link to={"/add"}>Add Book</Link></h1>
        <h3>Books {books.length}</h3>
        {
            books.map(book => <div key={book.id}>
                <img src={book.photo} style={{ width: 200, height: 300 }} />
                <p>{book.author}</p>
                <p>{book.title}</p>
                <Link to={"/book/" + book.id}>Comments</Link>
            </div>)
        }
    </>
}