import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getComments } from '../features/comments/comments.api'
import CommentModal from './comment.modal'


export const CommentList = () => {
	const dispatch = useDispatch()
	const comments = useSelector(state => state.comments.items)
	const { id } = useParams()
	const [isModalOpen, setIsModalOpen] = useState(false)

	useEffect(() => {
		dispatch(getComments(id))
	}, [dispatch, id])

	return (
		<>
			<h3>Comment List</h3>
			<button onClick={() => setIsModalOpen(true)}>Add Comment</button>

			{isModalOpen && (
				<CommentModal onClose={() => setIsModalOpen(false)} bookId={id} />
			)}

			{comments.map(comment => {
				const filledStars = new Array(comment.rate).fill("https://cdn1.iconfinder.com/data/icons/christmas-flat-4/58/020_-_Star-512.png")
				return (
					<div key={comment.id} style={{ padding: 2, margin: 6, background: "lightgrey" }}>
						<p>{comment.text}</p>
						{filledStars.map((star, index) => (
							<img src={star} key={index} style={{ width: 20 }} alt="star" />
						))}
					</div>
				)
			})}
		</>
	)
}
