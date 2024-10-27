import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AddBook } from './features/books/add.jsx'
import { Books } from './features/books/books.jsx'
import { Comments } from './features/comments/comments.jsx'
import './index.css'
import { store } from './store.js'

const router = createBrowserRouter([
  {
    path: '',
    element: <Books />
  },
  {
    path: '/book/:id',
    element: <Comments />
  },
  {
    path: '/add',
    element: <AddBook />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)


