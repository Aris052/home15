import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBook } from './books.api'


export const AddBook = () => {
	const { register, handleSubmit, formState: { errors } } = useForm()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const onSubmit = async (data) => {
		const bookData = {
			...data, rate: null
		}
		await dispatch(addBook(bookData)).unwrap()
		navigate('/')
	}

	return <div>
		<h1>Add Book</h1>
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label>Title</label>
				<input {...register('title', { required: 'title is required' })} />
				{errors.title && <p>{errors.title.message}</p>}
			</div>

			<div>
				<label>Author</label>
				<input {...register('author', { required: 'Author is required' })} />
				{errors.author && <p>{errors.author.message}</p>}
			</div>

			<div>
				<label>URL</label>
				<input {...register('photo', { required: 'URL is required' })} />
				{errors.url && <p>{errors.url.message}</p>}
			</div>

			<button type="submit">Add Book</button>
		</form>
	</div>
}
