import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../features/comments/comments.api'

const CommentModal = ({ onClose, bookId }) => {
	const [text, setText] = useState('')
	const [rate, setRate] = useState(1)
	const dispatch = useDispatch()

	const handleSubmit = async (e) => {
		e.preventDefault()
		const commentData = { text, rate, book: bookId }
		await dispatch(addComment(commentData))
		onClose()
	}

	return (
		<div className="modal">
			<h2>Add Comment</h2>
			<form onSubmit={handleSubmit}>
				<textarea
					value={text}
					onChange={(e) => setText(e.target.value)}
					required
					placeholder="Write your comment"
				/>
				<select value={rate} onChange={(e) => setRate(Number(e.target.value))}>
					{[1, 2, 3, 4, 5].map((value) => (
						<option key={value} value={value}>{value}</option>
					))}
				</select>
				<button type="submit">Submit</button>
				<button type="button" onClick={onClose}>Cancel</button>
			</form>
		</div>
	)
}

export default CommentModal
